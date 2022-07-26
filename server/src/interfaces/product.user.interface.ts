import { IProduct } from './product.interfaces'

export interface IProductUser {
    favourites: IProduct[],
    cart: IProduct[],
    order: IProduct[],
}

export interface IProductUserCreated extends IProductUser {
    userId: string,
    _id: string,
}
