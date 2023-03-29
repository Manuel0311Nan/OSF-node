import { Photo } from "../models/photo.model.js";
import { httpStatusCode } from "../../utils/httpStatusCode.js";

const getAllPhoto = async (req, res, next) => {
    try {
        const photo = await Photo.find().populate();
        return res.json(photo)
    } catch (error) {
        return next(error)
    }
};

const createPhoto = async (req, res, next) =>{
    try {
        const { body } = req;
        const newPhoto = new Photo({
            city: body.city,
            date: body.date,
            image: body.image
        });
        const savedPhoto = await newPhoto.save();
        return res.json({
            status: 201,
            message: httpStatusCode[201],
            date: savedPhoto
        });
    } catch (error) {
        return next(error)
    }
}
const getPhotoById = async (req, res, next) => {
    try {
        const { id } = req.params;
        const photoById = await Photo.findById(id);
        return res.status(200).json(photoById);
    } catch (error) {
        return next(error)
    }
}
const editPhoto = async (req, res, next) => {

    const photoImage = req.image;// me traigo la url de la foto
    const bodyData = req.body;

    if (photoImage) { bodyData.image = photoImage }
    const { id } = req.params;
  
    try {
      const photo = await Photo.findById(id)
      const photoModify = new Photo(bodyData);
  
      //Para evitar que se modifique el id de mongo:
      photoModify._id = photo;
      //buscamos por el id y le pasamos los campos a modificar
      await Photo.findByIdAndUpdate(photo, photoModify);
  
      //retornamos respuesta de  los datos del objeto creado 
      return res.json({
        status: 200,
        message: [httpStatusCode[200]],
        data: { photo: photoModify },
      });
    } catch (error) {
      return next(error);
    }
  };
const deletePhoto = async (req, res, next) => {
    try {
        const { id } = req.params;
        const photoDelete = await Photo.findByIdAndDelete(id);
        return res.json({
            status: 200,
            message: "foto Borrada",
            data: { photo: photoDelete }
        });
    } catch (error) {
        return next(error)
    }
}

export {getAllPhoto, createPhoto, getPhotoById, editPhoto, deletePhoto}