import { mock } from "jest-mock-extended";
import { taskRoutes } from ".";
import { Request, Response } from "express";
import { taskDataAccess } from "../../../../data-access/task-db";

const arrangMocks = () => {
    jest.mock("../../../../data-access/task-db");
    const mockCreateTask = mock(taskDataAccess().createTask);
    return {
        mockCreateTask
    }
}


const mockRes = () => {
    const res = {} as Response;
    res.status = jest.fn().mockReturnValue(res);
    res.json = jest.fn().mockReturnValue(res);
    return res;
};
describe("task-routes", () => {
    describe("should successfully handld task request", () => {
        it("should successfully create task", async () => {
            const taskRouter = taskRoutes();
            const res = mockRes();
            const { mockCreateTask } = arrangMocks();
            (<jest.Mock>mockCreateTask).mockReturnValueOnce(1);
            const response = await taskRouter.createTask(
                {
                    body: {
                        title: "title",
                        deadline: "01/02/2000",
                        userId: 1
                    }
                } as Request,
                res
            );
            expect(response).toBeUndefined();
            expect(res.json).toBeCalled()
        });

    })

})