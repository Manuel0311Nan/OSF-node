import express from 'express';
import { getAllNews, createNew, getNewById, deleteNew } from '../controllers/news.controller';

const newsRoutes = express.Router();

newsRoutes.get('/', getAllNews);
newsRoutes.post('/createNewsAboutOsf', createNew);
newsRoutes.get('/:id', getNewById);
newsRoutes.delete('/:id', deleteNew);

export { newsRoutes };