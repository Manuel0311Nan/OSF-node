import express from "express";
import { getAllShows, createShow, getShowById, editShow, deleteShow } from "../controllers/shows.controller.js";

const showRoutes = express.Router();

showRoutes.get('/', getAllShows);
showRoutes.post('/create', createShow);
showRoutes.get('/:id', getShowById);
showRoutes.put('/edit', editShow);
showRoutes.delete('/:id', deleteShow);

export {showRoutes}