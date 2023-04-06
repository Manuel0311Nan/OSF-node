import { Albums } from "../models/album.model.js";
import { httpStatusCode } from "../../utils/httpStatusCode.js";

const getAllAlbums = async (req, res, next) => {
    try {
        const albums = await Albums.find().populate();
        return res.json(albums)
    } catch (error) {
        return next(error)
    }
};
const createAlbum = async (req, res, next) =>{
    try {
        const { body } = req;
        const newAlbum = new Albums({
            name: body.name,
            songs: body.songs,
            date: body.date,
            image: body.image
        });
        const savedAlbum = await newAlbum.save();
        return res.json({
            status: 201,
            message: httpStatusCode[201],
            date: savedAlbum
        });
    } catch (error) {
        return next(error)
    }
}
const getAlbumById = async (req, res, next) => {
    try {
        const { id } = req.params;
        const albumById = await Albums.findById(id);
        return res.status(200).json(albumById);
    } catch (error) {
        return next(error)
    }
}

export {getAllAlbums, createAlbum, getAlbumById}