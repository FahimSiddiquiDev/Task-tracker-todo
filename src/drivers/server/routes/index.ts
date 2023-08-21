/* eslint-disable @typescript-eslint/no-var-requires */
const express = require('express');
import { taskRoutes } from './task';
import { createAuthModule } from '../authentication/auth';

export const router = express.Router();
const taskRouter = taskRoutes();
const auth = createAuthModule();
router
    .get("/tasks", auth.isAuthorized , taskRouter.getTasks)
    .post("/tasks", auth.isAuthorized, taskRouter.createTask)
    .post("/tasks/:id/delete", auth.isAuthorized, taskRouter.deleteTask)
    .get("/tasks/:id", auth.isAuthorized, taskRouter.getTaskById)
    .put("/tasks/:id", auth.isAuthorized, taskRouter.updateTask);
