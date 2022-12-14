import express from "express";

import dotenv from "dotenv";
import { connection } from "./config/database.js";
import cors from "cors";
import logger from "morgan";
import { aboutRoutes } from "./api/routes/about.routes.js";

connection();
dotenv.config();

const router = express.Router();
const server = express();
const PORT = process.env.PORT|| 4000;

server.set("secretKey", "nodeRestApi");

server.use((req, res, next) => {
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.header('Access-Control-Allow-Credentials', true);
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    next();
});

server.use(logger('dev'));
server.use(express.json());
server.use(express.urlencoded({ extended: true }));
server.use(cors("*"));


server.use('/', router);
server.use("/about", aboutRoutes)



server.use('*', (req, res, next) => {
    const error = new Error('Route not found');
    error.status = 404;
    next(error);
  });
  server.use((err, req, res, next) => {
    return res.status(err.status || 500).json(err.message || 'Unexpected error');
  });

server.listen(PORT, () => {
    console.log(`Node server linstening on port http://localhost:${PORT}`)
});