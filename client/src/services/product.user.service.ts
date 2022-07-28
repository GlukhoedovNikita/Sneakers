import axios from 'axios'

import { SERVER_URL } from '@constants/index'
import { IProductUserResponse, IProductUserUpdate } from '@store/slices/productUser/product.user.types'

const api = axios.create({
    baseURL: SERVER_URL,
    withCredentials: true,
})

class ProductUserService {
    async get() {
        try {
            const response = await api.get<IProductUserResponse>('/user/product')
            return response.data
        } catch (e) {
            throw e
        }
    }

    async update(product: IProductUserUpdate) {
        try {
            const response = await api.put<IProductUserResponse>('/user/product', product)
            return response.data
        } catch (e) {
            throw e
        }
    }
}

export default new ProductUserService()
