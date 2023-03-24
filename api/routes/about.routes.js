import express from "express";
import { getAllAbout, createAbout, getAboutById, deleteAbout } from "../controllers/about.controller.js"

const aboutRoutes = express.Router();

aboutRoutes.get('/', getAllAbout);
aboutRoutes.post('/createCrewOSFthebestteam', createAbout);
aboutRoutes.get('/:id', getAboutById);
aboutRoutes.delete('/:id', deleteAbout);

export {aboutRoutes}