import express from "express";
import { getAllAlbums, createAlbum, getAlbumById } from "../controllers/album.controller";

const albumRoutes = express.Router();

albumRoutes.get('/', createAlbum);
albumRoutes.post('/createAlbumOSFNew', createAlbum);
albumRoutes.get('/:id', getAlbumById);

export {albumRoutes}