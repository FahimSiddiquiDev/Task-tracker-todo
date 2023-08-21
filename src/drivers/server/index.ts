/* eslint-disable @typescript-eslint/no-var-requires */
const express = require('express');
import { Express } from 'express';
import * as cors from 'cors';
import * as bodyParser from 'body-parser';
import { initializeDb } from "../../db";
import { conf as config } from "../../config";
import { router } from './routes';

export const startServer = async () => {
  const app: Express = express();
  
  app.use(cors());
  app.use(bodyParser.json());
  app.use(router);
  
  // Initialize the database and start the server
  await initializeDb().then(() => {
    app.listen(config.PORT, () => {
      console.log(`Server is running on port ${config.PORT}`);
    });
  });
}
