import { CreateTaskInput, DeleteTaskInput, Task, UpdateTaskInput } from ".";
import { createTaskInput, deleteTaskInput, task, tasks, updateTaskInput } from "./schema";
import { validate } from "../../validator";

export const validateUpdateTaskInput = (data: unknown) => validate<UpdateTaskInput>(updateTaskInput, data);
export const validateCreateTaskInput = (data: unknown) => validate<CreateTaskInput>(createTaskInput, data);
export const validateDeleteTaskInput = (data: unknown) => validate<DeleteTaskInput>(deleteTaskInput, data);
export const validateTask = (data: unknown) => validate<Task>(task, data)
export const validateTasks = (data: unknown) => validate<Task[]>(tasks, data)