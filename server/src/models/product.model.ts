import { Schema, model } from 'mongoose'

const productModel = new Schema({
    image: { type: String, required: true },
    price: { type: String, required: true },
    name: { type: String, required: true }
})

export default model('product', productModel)
