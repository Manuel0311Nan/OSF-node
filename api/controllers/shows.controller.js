import { Shows } from '../models/shows.model.js';
import { httpStatusCode } from '../../utils/httpStatusCode.js';

const getAllShows = async (req, res, next) => {
    try {
        const show = await Shows.find().populate();
        return res.json(show)
    } catch (error) {
        return next(error)
    }
};
const createShow = async (req, res, next) =>{
    try {
        const { body } = req;
        const newShow = new Shows({
            nameLocal: body.nameLocal,
            city: body.city,
            group1: body.group1,
            group2: body.group2,
            group3: body.group3,
            date: body.date,
            image: body.image,
            coordinates: body.coordinates
        });
        const savedShow = await newShow.save();
        return res.json({
            status: 201,
            message: httpStatusCode[201],
            date: savedShow
        });
    } catch (error) {
        return next(error)
    }
}
const getShowById = async (req, res, next) => {
    try {
        const { id } = req.params;
        const showById = await Shows.findById(id);
        return res.status(200).json(showById);
    } catch (error) {
        return next(error)
    }
}
const editShow = async (req, res, next) => {

    const showPhoto = req.image;// me traigo la url de la foto
    const bodyData = req.body;

    if (showPhoto) { bodyData.image = showPhoto }
    const { id } = req.params;
  
    try {
      const show = await Shows.findById(id)
      const showModify = new Shows(bodyData);
  
      //Para evitar que se modifique el id de mongo:
      showModify._id = show;
      //buscamos por el id y le pasamos los campos a modificar
      await Shows.findByIdAndUpdate(show, showModify);
  
      //retornamos respuesta de  los datos del objeto creado 
      return res.json({
        status: 200,
        message: [httpStatusCode[200]],
        data: { show: showModify },
      });
    } catch (error) {
      return next(error);
    }
  };

const deleteShow = async (req, res, next) => {
    try {
        const { id } = req.params;
        const showDelete = await Shows.findByIdAndDelete(id);
        return res.json({
            status: 200,
            message: "show eliminado",
            data: { about: showDelete }
        });
    } catch (error) {
        return next(error)
    }
}


export {getAllShows, createShow, getShowById, editShow, deleteShow}