import { config } from "dotenv";

config();

export const conf = {
    NODE_ENV: process.env.NODE_ENV,
    PORT: process.env.PORT
}