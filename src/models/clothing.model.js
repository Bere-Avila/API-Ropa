import { Schema, model } from "mongoose";

const productoSchema = new Schema({
    productCode: {
        type: String,
        unique: true,
        required: true
    },
    brand: String,
    category: String,
    size: String,
    color: String,
    price: Number,
    stock: Number,
    manufacturingDate: String,
    status: Number
}, {
    versionKey: false,
    timestamps: true
});

export default model('producto', productoSchema)