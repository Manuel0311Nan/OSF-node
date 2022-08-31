import mongoose from "mongoose";

const Schema = mongoose.Schema;

const aboutSchema = new Schema(
    {
        name: { type: String, required: true },
        city: { type: String, required: true },
        instrument: { type: String, required: true },
        date: { type: String, required: true },
        image: { type: String, required: true },
    },
    {
        timestamps: true,
    }
);

const About = mongoose.model('About', aboutSchema)

export {About}