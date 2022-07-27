import productUserController from '@controllers/product.user.controller'
import { Router } from 'express'

const productUserRouter = Router()

productUserRouter.get('', productUserController.get)
productUserRouter.post('', productUserController.create)
productUserRouter.put('', productUserController.update)

export default productUserRouter
