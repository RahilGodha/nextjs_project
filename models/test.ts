import mongoose, { Document, Model } from "mongoose";

interface IProduct extends Document {
    name: string;
    price: string;
    company: string;
}

const productSchema = new mongoose.Schema({
    name: String,
    price: String,
    company: String,
});

export const Product: Model<IProduct> = mongoose.models.products as Model<IProduct> || mongoose.model<IProduct>("products", productSchema);
