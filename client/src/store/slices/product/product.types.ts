export interface IProduct {
    _id: string,
    name: string,
    price: string,
    image: string,
}

export interface IProductState {
    loading: boolean,
    error: null | string,
    products: IProduct[],
}
