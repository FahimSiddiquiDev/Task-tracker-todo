import { openDb } from "../../db";
import { CreateTaskInput, DeleteTaskInput, UpdateTaskInput } from "../../models/task";
import { validateTask, validateTasks } from "../../models/task/validator";
import { logger } from "../../logger";

export function taskDataAccess() {
    async function getTasks() {
        const db = await openDb();
        const tasks = await db.all('SELECT * FROM tasks');
        return validateTasks(tasks);
    }
    async function getTaskById(taskId: string) {
        const db = await openDb();
        const task = await db.run('SELECT * FROM tasks WHERE id = ?', taskId);
        return validateTask(task);
    }
    async function updateTask(taskModel: UpdateTaskInput) {
        const db = await openDb();
        await db.run('UPDATE tasks SET done = ?, lastModifiedAt = ? WHERE id = ? AND userId= ?', taskModel.done, Date.now(), taskModel.id, taskModel.userId);
    }
    async function deleteTask(taskModel: DeleteTaskInput) {
        const db = await openDb();
        await db.run('DELETE from tasks WHERE id = ? AND userId= ?', taskModel.id, taskModel.userId);
    }
    async function createTask(createTaskInput: CreateTaskInput) {
        const db = await openDb();    
        const stmt = await db.prepare('INSERT INTO tasks (title, deadline, done, createdAt, lastModifiedAt, userId) VALUES (?, ?, 0, ?, ?, ?)');
        const result = await stmt.run(createTaskInput.title, createTaskInput.deadline, Date.now(), Date.now(), createTaskInput.userId);
        logger.log(`Task has been created for userId ${createTaskInput.userId}`);
        return result;
    }
    return {
        createTask,
        getTaskById,
        getTasks,
        updateTask,
        deleteTask
    }
}