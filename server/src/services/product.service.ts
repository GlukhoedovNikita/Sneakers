import { UploadedFile } from 'express-fileupload'

import fileService from './file.service'
import productModel from '@models/product.model'

import myError from '@utils/myError'
import { IProduct, IProductNoImage } from 'interfaces/product.interfaces'

class ProductService {
    async getAll() {
        try {
            const products = await productModel.find<IProduct>()
            return products
        } catch (e) {
            throw new Error(`Product Service Error - ${e}`)
        }
    }

    async getOne(id: string) {
        try {
            myError(!id, 'Нет id')
            const product = await productModel.findById<IProduct>(id)
            myError(!product, 'Неправильный id')
            return product
        } catch (e) {
            throw new Error(`Product Service Error - ${e}`)
        }
    }

    async create(product: IProductNoImage, image: UploadedFile) {
        try {
            const imageName = fileService.createdFile(image)
            const createdProduct = await productModel.create<IProduct>({ ...product, image: imageName })
            return createdProduct
        } catch (e) {
            throw new Error(`Product Service Error - ${e}`)
        }
    }

    async update(id: string, product: IProductNoImage, image: UploadedFile) {
        try {
            myError(!id, 'Нет id')
            const imageName = fileService.createdFile(image)
            const updatedProduct = await productModel.findByIdAndUpdate<IProduct>(
                id,
                { ...product, image: imageName },
                { new: true }
            )
            myError(!updatedProduct, 'Неправильный id')
            return updatedProduct
        } catch (e) {
            throw new Error(`Product Service Error - ${e}`)
        }
    }

    async delete(id: string) {
        try {
            myError(!id, 'Нет id')
            const deletedProduct = await productModel.findByIdAndDelete<IProduct>(id)
            myError(!deletedProduct, 'Неправильный id')
            return deletedProduct
        } catch (e) {
            throw new Error(`Product Service Error - ${e}`)
        }
    }
}

export default new ProductService()
