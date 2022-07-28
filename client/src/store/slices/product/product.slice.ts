import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import { fetchProduct } from './product.actions'
import { IProduct, IProductState } from './product.types'

const initialState: IProductState = {
    loading: false,
    error: null,
    products: [],
}

const productSlice = createSlice({
    name: 'product',
    initialState,
    reducers: {},
    extraReducers: {
        [fetchProduct.pending.type]: (state) => {
            state.loading = true
            state.error = null
        },
        [fetchProduct.fulfilled.type]: (state, action: PayloadAction<IProduct[]>) => {
            state.loading = false
            state.error = null
            state.products = action.payload
        },
        [fetchProduct.rejected.type]: (state, action: PayloadAction<string>) => {
            state.loading = false
            state.error = action.payload
        },
    }
})

export default productSlice.reducer
