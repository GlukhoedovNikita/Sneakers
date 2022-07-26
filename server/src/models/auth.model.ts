import { Schema, model } from 'mongoose'

const authModel = new Schema({
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true }
})

export default model('auth', authModel)
