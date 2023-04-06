import mongoose from "mongoose";

const Schema = mongoose.Schema;

const albumSchema = new Schema(
    {
        name: { type: String, required: true },
        songs: { type: Array, required: true },
        //date es Number porque sólo enviamos el año de publicación del EP o Album
        date: { type: Number, required: true },
        image: { type: String, required: true },
    },
    {
        timestamps: true,
    }
);

const Albums = mongoose.model('Albums', albumSchema)

export {Albums}