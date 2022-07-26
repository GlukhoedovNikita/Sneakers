import { Request, Response } from 'express'

import productUserService from '@services/product.user.service'

class ProductUserController {
    async getAll(req: Request, res: Response) {
        try {
            const { refreshToken } = req.cookies
            const productUser = await productUserService.getAll(refreshToken as string)
            res.json(productUser)
        } catch (e) {
            res.status(402).json({ message: `Product User Error - ${e}` })
        }
    }

    async create(req: Request, res: Response) {
        try {
            const { refreshToken } = req.cookies
            const createdProductUser = await productUserService.create(refreshToken as string)
            res.json(createdProductUser)
        } catch (e) {
            res.status(402).json({ message: `Product User Error - ${e}` })
        }
    }

    async update(req: Request, res: Response) {
        try {
            const { refreshToken } = req.cookies
            const updatedProductUser = await productUserService.update(refreshToken as string, req.body)
            res.json(updatedProductUser)
        } catch (e) {
            res.status(402).json({ message: `Product User Error - ${e}` })
        }
    }
}

export default new ProductUserController()
