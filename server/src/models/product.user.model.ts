import { Schema, Types, model } from 'mongoose'

const productUser = new Schema({
    userId: {
        type: Types.ObjectId,
        required: true,
        unique: true,
        ref: 'auth'
    },
    favourites: { type: Types.Array, required: true, default: [] },
    cart: { type: Types.Array, required: true, default: [] },
    order: { type: Types.Array, required: true, default: [] },
})

export default model('product-user', productUser)
