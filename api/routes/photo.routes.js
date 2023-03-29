import express from "express";
import { getAllPhoto, createPhoto, getPhotoById, editPhoto, deletePhoto } from "../controllers/photo.controller.js";

const photoRoutes = express.Router();

photoRoutes.get('/', getAllPhoto);
photoRoutes.post('/createPhotoCrewOSFthebestteam', createPhoto);
photoRoutes.get('/:id', getPhotoById);
photoRoutes.put('/edit/:id', editPhoto);
photoRoutes.delete('/delete', deletePhoto)

export { photoRoutes };
