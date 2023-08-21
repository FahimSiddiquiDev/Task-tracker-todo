import { taskDataAccess } from ".";
import { openDb } from "../../db";
import { mock } from "jest-mock-extended";

jest.mock('../../db');
const mockOpenDb = mock(openDb);

const dataAccess = taskDataAccess();
describe("data-access-task-db", () => {
    it("should successfully create task", async () => {
        (<jest.Mock>mockOpenDb).mockReturnValueOnce({
            prepare: jest.fn().mockResolvedValueOnce({
                run: jest.fn().mockResolvedValueOnce(1)
            }),
        });
        const response = await dataAccess.createTask({
            title: "title",
            deadline: "01/02/2000",
            userId: 1
        }
        );
        expect(response).toEqual(1);
    });
});
