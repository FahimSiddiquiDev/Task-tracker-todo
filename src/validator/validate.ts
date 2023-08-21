import { ZodError, ZodTypeAny } from "zod";

export function validate<T>(type: ZodTypeAny, input: unknown): T {
    try {
        return type.parse(input);
    } catch (error: unknown) {
        if (error instanceof ZodError) {
            throw new Error(`Validation errors:\n ${error.issues.map((issue) => JSON.stringify(issue)).join("\n")}`);
        }
        throw error;
    }
}
