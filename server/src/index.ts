import express, { Application, json } from 'express'
import { connect } from 'mongoose'
import { config } from 'dotenv'

import cors from 'cors'
import fileUpload from 'express-fileupload'
import cookieParser from 'cookie-parser'

import pathResolve from '@utils/pathResolve'

import productRouter from '@routes/product.router'
import authRouter from '@routes/auth.router'
import productUserRouter from '@routes/product.user.router'

config({
    path: pathResolve('.env')
})

const PORT = process.env.PORT || 5000
const app: Application = express()
app.use(json())
app.use(cors({
    credentials: true,
    origin: process.env.CLIENT_URL
}))
app.use(fileUpload)
app.use(cookieParser())

app.use('/product', productRouter)
app.use('/auth', authRouter)
app.use('/product/user', productUserRouter)

const start = () => {
    connect(process.env.DB_URL as string)
    app.listen(PORT, () => console.log(`Server start on port - ${PORT}`))
}

start()
