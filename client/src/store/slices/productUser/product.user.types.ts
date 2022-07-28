import { IProduct } from '../product/product.types'

export interface IProductUserState {
    loading: boolean,
    error: null | string,
    favourite: IProduct[],
    cart: IProduct[],
    order: IProduct[],
}

export interface IProductUser {
    favourite: IProduct[],
    cart: IProduct[],
    order: IProduct[],
}

export interface IProductUserUpdate {
    favourite?: IProduct[],
    cart?: IProduct[],
    order?: IProduct[],
}

export interface IProductUserResponse extends IProductUser {
    userId: string,
}

export interface IProductUserUpdateDelete extends IProductUserUpdate {
    productId: string,
}

export interface IProductUserUpdateAdd extends IProductUserUpdateDelete {
    products: IProduct[],
}
