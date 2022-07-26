import ProductService from '@services/product.service'
import { Request, Response } from 'express'

class ProductController {
    async getAll(req: Request, res: Response) {
        try {
            const products = await ProductService.getAll()
            res.json(products)
        } catch (e) {
            res.status(400).json({ message: `Product Controller Error - ${e}` })
        }
    }

    async getOne(req: Request, res: Response) {
        try {
            const product = await ProductService.getOne(req.params.id)
            res.json(product)
        } catch (e) {
            res.status(400).json({ message: `Product Controller Error - ${e}` })
        }
    }

    async create(req: Request, res: Response) {
        try {
            const createdProduct = await ProductService.create(req.body)
            res.json(createdProduct)
        } catch (e) {
            res.status(400).json({ message: `Product Controller Error - ${e}` })
        }
    }

    async update(req: Request, res: Response) {
        try {
            const updatedProduct = await ProductService.update(req.params.id, req.body)
            res.json(updatedProduct)
        } catch (e) {
            res.status(400).json({ message: `Product Controller Error - ${e}` })
        }
    }

    async delete(req: Request, res: Response) {
        try {
            const deletedProduct = await ProductService.delete(req.params.id)
            res.json(deletedProduct)
        } catch (e) {
            res.status(400).json({ message: `Product Controller Error - ${e}` })
        }
    }
}

export default new ProductController()
