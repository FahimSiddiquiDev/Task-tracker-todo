/* eslint-disable @typescript-eslint/no-var-requires */
const bunyan = require("bunyan");
export const logger = bunyan.createLogger({name: 'myapp'});