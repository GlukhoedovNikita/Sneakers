export interface IProductNoImage {
    name: string,
    price: string,
}

export interface IProduct extends IProductNoImage {
    image: string,
}
