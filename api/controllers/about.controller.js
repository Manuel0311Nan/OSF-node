import { About } from "../models/about.model.js";
import { httpStatusCode } from "../../utils/httpStatusCode.js";

const getAllAbout = async (req, res, next) => {
    try {
        const about = await About.find().populate();
        return res.json(about)
    } catch (error) {
        return next(error)
    }
};

const createAbout = async (req, res, next) =>{
    try {
        const { body } = req;
        const newAbout = new About({
            name: body.name,
            city: body.city,
            instrument: body.instrument,
            date: body.date,
            image: body.image
        });
        const savedAbout = await newAbout.save();
        return res.json({
            status: 201,
            message: httpStatusCode[201],
            date: savedAbout
        });
    } catch (error) {
        return next(error)
    }
}

const getAboutById = async (req, res, next) => {
    try {
        const { id } = req.params;
        const aboutById = await About.findById(id);
        return res.status(200).json(aboutById);
    } catch (error) {
        return next(error)
    }
}

const deleteAbout = async (req, res, next) => {
    try {
        const { id } = req.params;
        const aboutDelete = await About.findByIdAndDelete(id);
        return res.json({
            status: 200,
            message: "componente eliminado",
            data: { about: aboutDelete }
        });
    } catch (error) {
        return next(error)
    }
}

export {getAllAbout, createAbout, getAboutById, deleteAbout}