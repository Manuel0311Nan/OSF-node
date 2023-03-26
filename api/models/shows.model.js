import mongoose from "mongoose";

const Schema = mongoose.Schema;

const showsSchema = new Schema(
    {
        nameLocal: { type: String, required: true },
        city: { type: String, required: true },
        group1: { type: String, required: false },
        group2: { type: String, required: false },
        group3: { type: String, required: false },
        date: { type: String, required: true },
        image: { type: String, required: true },
        coordinates: {type: Array,required: true}

    },
    {
        timestamps: true,
    }
);

const Shows = mongoose.model('Shows', showsSchema)

export {Shows}