import mongoose from "mongoose";

const Schema = mongoose.Schema;

const photoSchema = new Schema(
    {
        city: { type: String, required: false, trim: true },
        date: { type: Date, default: Date.now() },
        image: { type: String, required: true },
    },
    {
        timestamps: true,
    }
);

const Photo = mongoose.model('Photo', photoSchema);

export { Photo };
