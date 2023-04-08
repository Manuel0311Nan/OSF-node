import mongoose from "mongoose";

const Schema = mongoose.Schema;

const newsSchema = new Schema(
    {
        title: { type: String, required: true },
        description: { type: String, required: true },
        date: { type: Date, required: true },
        image: { type: String, required: true },
        tags: { type: Array, required: false }
    },
    {
        timestamps: true,
    }
);

const News = mongoose.model('News', newsSchema);

export { News }