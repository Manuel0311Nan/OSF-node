import { News } from "../models/news.model.js";
import { httpStatusCode } from "../../utils/httpStatusCode.js";

const getAllNews = async (req, res, next) => {
  try {
    const news = await News.find().populate();
    return res.json(news);
  } catch (error) {
    return next(error);
  }
};

const createNew = async (req, res, next) => {
  try {
    const { body } = req;
    const newNew = new News({
      title: body.title,
      description: body.description,
      date: body.date,
      image: body.image,
      tags: body.tags,
    });
    const savedNew = await newNew.save();
    return res.json({
      status: 201,
      message: httpStatusCode[201],
      date: savedNew,
    });
  } catch (error) {
    return next(error);
  }
};

const getNewById = async (req, res, next) => {
  try {
    const { id } = req.params;
    const newById = await News.findById(id);
    return res.status(200).json(newById);
  } catch (error) {
    return next(error);
  }
};

const deleteNew = async (req, res, next) => {
  try {
    const { id } = req.params;
    const newDelete = await News.findByIdAndDelete(id);
    return res.json({
      status: 200,
      message: "noticia eliminada",
      data: { news: newDelete },
    });
  } catch (error) {
    return next(error);
  }
};

export { getAllNews, createNew, getNewById, deleteNew };
