import authService from '@services/auth.service'

import productUserModel from '@models/product.user.model'
import { IProductUserCreated, IProductUser } from 'interfaces/product.user.interface'

class ProductUserService {
    async getAll(refreshToken: string) {
        try {
            const user = await authService.check(refreshToken)
            const productUser = await productUserModel.findOne<IProductUserCreated>({ userId: String(user?._id) })
            return productUser
        } catch (e) {
            throw e
        }
    }

    async create(refreshToken: string) {
        try {
            const user = await authService.check(refreshToken)
            const createdProductUser = await productUserModel.create({ userId: String(user?._id) })
            return createdProductUser
        } catch (e) {
            throw e
        }
    }

    async update(refreshToken: string, productUser: IProductUser) {
        try {
            const user = await authService.check(refreshToken)
            const productUserNonNull = Object.fromEntries(Object.entries(productUser)
                .map(([key, value]) => [key, value.filter(Boolean)]))
            const updatedProductUser = await productUserModel.findOneAndUpdate<IProductUserCreated>(
                { userId: String(user?._id), },
                productUserNonNull,
                { new: true },
            )
            return updatedProductUser
        } catch (e) {
            throw e
        }
    }
}

export default new ProductUserService()
