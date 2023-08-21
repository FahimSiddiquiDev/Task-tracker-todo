import { Request, Response } from "express";
import { taskDataAccess} from "../../../../data-access/task-db";
import { validateCreateTaskInput, validateDeleteTaskInput, validateUpdateTaskInput } from "../../../../models/task/validator";

export function taskRoutes() {
    const dataAccess = taskDataAccess();
    async function getTaskById(req: Request, res: Response) {
        const taskId = req.params.id;
        const task = await dataAccess.getTaskById(taskId);
        res.json(task);
    }
    async function getTasks(req: Request, res: Response) {
        const tasks = await dataAccess.getTasks();
        res.json(tasks);
    }
    async function createTask(req: Request, res: Response) {
        const task = validateCreateTaskInput(req.body);
        const result = await dataAccess.createTask(task);
        res.json({ id: result });
    }
    async function updateTask(req:Request, res: Response) {
        const id = Number(req.params.id);
        const task = validateUpdateTaskInput({ id, ...req.body});
        await dataAccess.updateTask(task);
        res.json({ success: true });
    }
    async function deleteTask(req:Request, res: Response) {
        const id = Number(req.params.id);
        const task = validateDeleteTaskInput({ id, ...req.body});
        await dataAccess.deleteTask(task);
        res.json({ success: true });
    }
    return {
        createTask,
        getTaskById,
        getTasks,
        updateTask,
        deleteTask
    }
}