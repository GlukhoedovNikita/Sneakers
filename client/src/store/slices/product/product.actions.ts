import { createAsyncThunk } from '@reduxjs/toolkit'

import productService from '@services/product.service'
import { IProduct } from './product.types'

export const fetchProduct = createAsyncThunk(
    'product',
    async (_, { rejectWithValue }) => {
        try {
            const products = await productService.get()
            return products
        } catch (e) {
            return rejectWithValue(`Error Fetch Products - ${e}`)
        }
    }
)

export const createProduct = createAsyncThunk(
    'product',
    async (product: IProduct, { rejectWithValue }) => {
        try {
            const products = await productService.create(product)
            return products
        } catch (e) {
            return rejectWithValue(`Error Create Product - ${e}`)
        }
    }
)

export const updateProduct = createAsyncThunk(
    'product',
    async (product: IProduct, { rejectWithValue }) => {
        try {
            const products = await productService.update(product)
            return products
        } catch (e) {
            return rejectWithValue(`Error Update Product - ${e}`)
        }
    }
)
