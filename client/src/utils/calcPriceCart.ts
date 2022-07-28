import { IProduct } from '@store/slices/product/product.types'

const calcPriceCart = (product: IProduct[]) => {
    const price = product.reduce((prev, curr) => prev + +curr.price, 0)
    const tax = Math.round(0.05 * price)
    return {
        price,
        tax
    }
}

export default calcPriceCart
