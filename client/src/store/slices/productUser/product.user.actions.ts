import { createAsyncThunk } from '@reduxjs/toolkit'

import productUserService from '@services/product.user.service'

import { IProduct } from '../product/product.types'
import { IProductUserUpdateAdd, IProductUserUpdateDelete } from './product.user.types'

export const fetchFavourite = createAsyncThunk(
    'favourite/fetch',
    async (_, { rejectWithValue }) => {
        try {
            const productUser = await productUserService.get()
            return productUser.favourite
        } catch (e) {
            return rejectWithValue(`Erorr Fetch Favourite - ${e}`)
        }
    }
)

export const fetchCart = createAsyncThunk(
    'cart/fetch',
    async (_, { rejectWithValue }) => {
        try {
            const productUser = await productUserService.get()
            return productUser.cart
        } catch (e) {
            return rejectWithValue(`Erorr Fetch Cart - ${e}`)
        }
    }
)

export const fetchOrder = createAsyncThunk(
    'order/fetch',
    async (_, { rejectWithValue }) => {
        try {
            const productUser = await productUserService.get()
            return productUser.order
        } catch (e) {
            return rejectWithValue(`Error Fetch Order - ${e}`)
        }
    }
)

export const updateAddFavourite = createAsyncThunk(
    'favourite/update/add',
    async (favouriteUpdate: IProductUserUpdateAdd, { rejectWithValue }) => {
        try {
            const {
                productId,
                products,
                favourite,
            } = favouriteUpdate
            const product = products.filter((v) => v._id === productId)[0]
            const productUser = await productUserService.update({ favourite: [...favourite as IProduct[], product] })
            return productUser.favourite
        } catch (e) {
            return rejectWithValue(`Error Update Add Favourite - ${e}`)
        }
    }
)

export const updateAddCart = createAsyncThunk(
    'cart/update/add',
    async (cartUpdate: IProductUserUpdateAdd, { rejectWithValue }) => {
        try {
            const {
                productId,
                products,
                cart,
            } = cartUpdate
            const product = products.filter((v) => v._id === productId)[0]
            const productUser = await productUserService.update({ cart: [...cart as IProduct[], product] })
            return productUser.cart
        } catch (e) {
            return rejectWithValue(`Error Update Add Cart - ${e}`)
        }
    }
)

export const updateOrder = createAsyncThunk(
    'order/update',
    async (cart: IProduct[], { rejectWithValue }) => {
        try {
            const productUser = await productUserService.update({ order: cart, cart: [] })
            return productUser.order
        } catch (e) {
            return rejectWithValue(`Error Update Order - ${e}`)
        }
    }
)

export const updateDeleteFavourite = createAsyncThunk(
    'favourite/update/delete',
    async (favouriteUpdate: IProductUserUpdateDelete, { rejectWithValue }) => {
        try {
            const {
                productId,
                favourite,
            } = favouriteUpdate
            const updateFavourite = (favourite as IProduct[]).filter((product) => product._id !== productId)
            const userProduct = await productUserService.update({ favourite: updateFavourite })
            return userProduct.favourite
        } catch (e) {
            return rejectWithValue(`Error Update Delete Favourite - ${e}`)
        }
    }
)

export const updateDeleteCart = createAsyncThunk(
    'cart/update/delete',
    async (cartUpdate: IProductUserUpdateDelete, { rejectWithValue }) => {
        try {
            const {
                productId,
                cart,
            } = cartUpdate
            const updateCart = (cart as IProduct[]).filter((product) => product._id !== productId)
            const userProduct = await productUserService.update({ cart: updateCart })
            return userProduct.cart
        } catch (e) {
            return rejectWithValue(`Error Update Delete Cart - ${e}`)
        }
    }
)
