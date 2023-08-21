import { z } from "zod";

export const createTaskInput = z.object({
    title: z.string(),
    deadline: z.string(),
    userId: z.number()
});

export const updateTaskInput = z.object({
    id: z.number(),
    done: z.boolean(),
    userId: z.number()
});

export const deleteTaskInput = z.object({
    id: z.number(),
    userId: z.number()
});

export const task = z.object({
    id: z.number(),
    done: z.number(), //z.enum([ '0' ,'1' ]).transform(val => val === '1' ).default('0'),
    deadline: z.string(),
    createdAt: z.number(),
    lastModifiedAt: z.number(),
    userId: z.number()
});

export const tasks = z.array(task);
