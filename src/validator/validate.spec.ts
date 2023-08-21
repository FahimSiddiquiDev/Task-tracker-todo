import { z } from "zod";
import { validate } from "./validate";
type test ={
    someValue: string
}

describe("validator-validate", () => {
    it("should successfully validate the request", () => {
        const data = {
            someValue: "xxx"
        }
        const schema= z.object({
            someValue: z.string(),
        });
        expect(validate<test>(schema, data)).toEqual({someValue: "xxx"});
    });
    it("should throw error if schema and data does not match with the type", () => {
        const data = {
            someValue: "xxx"
        }
        const schema= z.object({
            wrongAttribute: z.string(),
        });
        expect(() => validate<test>(schema, data)).toThrowError();
    });
});