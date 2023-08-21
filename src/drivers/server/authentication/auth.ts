import * as auth from "basic-auth";
import { NextFunction, Request, Response } from "express";

export function createAuthModule() {
    const check = (name: string, pass: string) => (
        name === "username" && pass === "password"
    );
    const isAuthorized = (req: Request, _: Response, next: NextFunction) => {
        const credentials = auth(req)
        if (credentials && check(credentials.name, credentials.pass)) {
            return next()
        }
        return next(new Error('Not authorized! Go back!'))
    }    
    return {
        isAuthorized
    }
}
