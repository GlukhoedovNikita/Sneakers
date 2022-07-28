import axios from 'axios'

import { IProduct } from '@store/slices/product/product.types'
import { SERVER_URL } from '@constants/index'

const api = axios.create({
    baseURL: SERVER_URL
})

class ProductService {
    async get() {
        try {
            const response = await api.get<IProduct[]>('/product')
            return response.data
        } catch (e) {
            throw e
        }
    }

    async create(product: IProduct) {
        try {
            const response = await api.post<IProduct[]>('/product', product)
            return response.data
        } catch (e) {
            throw e
        }
    }

    async update(product: IProduct) {
        try {
            const response = await api.put<IProduct[]>('/product', product)
            return response.data
        } catch (e) {
            throw e
        }
    }
}

export default new ProductService()
