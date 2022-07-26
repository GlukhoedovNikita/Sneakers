import { Schema, model, Types } from 'mongoose'

const tokenModel = new Schema({
    userId: {
        type: Types.ObjectId,
        required: true,
        unique: true,
        ref: 'auth'
    },
    refreshToken: { type: String, required: true },
})

export default model('token', tokenModel)
