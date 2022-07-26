import ProductController from '@controllers/product.controller'
import { Router } from 'express'

const productRouter = Router()

productRouter.get('', ProductController.getAll)
productRouter.get('/:id', ProductController.getAll)
productRouter.post('', ProductController.create)
productRouter.put('/:id', ProductController.update)
productRouter.delete('/:id', ProductController.delete)

export default productRouter
