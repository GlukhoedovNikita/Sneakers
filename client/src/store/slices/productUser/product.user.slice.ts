import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import {
    fetchCart,
    fetchFavourite,
    fetchOrder,
    updateAddCart,
    updateAddFavourite,
    updateOrder,
    updateDeleteCart,
    updateDeleteFavourite,
} from './product.user.actions'

import { IProduct } from '../product/product.types'
import { IProductUserState } from './product.user.types'

const initialState: IProductUserState = {
    loading: false,
    error: null,
    favourite: [],
    cart: [],
    order: [],
}

const productUserSlice = createSlice({
    name: 'productUser',
    initialState,
    reducers: {},
    extraReducers: {
        [fetchFavourite.pending.type]: (state) => {
            state.loading = true
            state.error = null
        },
        [fetchFavourite.fulfilled.type]: (state, action: PayloadAction<IProduct[]>) => {
            state.loading = false
            state.error = null
            state.favourite = action.payload
        },
        [fetchFavourite.rejected.type]: (state, action: PayloadAction<string>) => {
            state.loading = false
            state.error = action.payload
        },

        [fetchCart.pending.type]: (state) => {
            state.loading = true
            state.error = null
        },
        [fetchCart.fulfilled.type]: (state, action: PayloadAction<IProduct[]>) => {
            state.loading = false
            state.error = null
            state.cart = action.payload
        },
        [fetchCart.rejected.type]: (state, action: PayloadAction<string>) => {
            state.loading = false
            state.error = action.payload
        },

        [fetchOrder.pending.type]: (state) => {
            state.loading = true
            state.error = null
        },
        [fetchOrder.fulfilled.type]: (state, action: PayloadAction<IProduct[]>) => {
            state.loading = false
            state.error = null
            state.order = action.payload
        },
        [fetchOrder.rejected.type]: (state, action: PayloadAction<string>) => {
            state.loading = false
            state.error = action.payload
        },

        [updateAddFavourite.pending.type]: (state) => {
            state.error = null
        },
        [updateAddFavourite.fulfilled.type]: (state, action: PayloadAction<IProduct[]>) => {
            state.error = null
            state.favourite = action.payload
        },
        [updateAddFavourite.rejected.type]: (state, action: PayloadAction<string>) => {
            state.error = action.payload
        },

        [updateAddFavourite.pending.type]: (state) => {
            state.error = null
        },
        [updateAddFavourite.fulfilled.type]: (state, action: PayloadAction<IProduct[]>) => {
            state.error = null
            state.favourite = action.payload
        },
        [updateAddFavourite.rejected.type]: (state, action: PayloadAction<string>) => {
            state.error = action.payload
        },

        [updateAddCart.pending.type]: (state) => {
            state.error = null
        },
        [updateAddCart.fulfilled.type]: (state, action: PayloadAction<IProduct[]>) => {
            state.error = null
            state.cart = action.payload
        },
        [updateAddCart.rejected.type]: (state, action: PayloadAction<string>) => {
            state.error = action.payload
        },

        [updateOrder.pending.type]: (state) => {
            state.error = null
        },
        [updateOrder.fulfilled.type]: (state, action: PayloadAction<IProduct[]>) => {
            state.error = null
            state.order = action.payload
            state.cart = []
        },
        [updateOrder.rejected.type]: (state, action: PayloadAction<string>) => {
            state.error = action.payload
        },

        [updateDeleteFavourite.pending.type]: (state) => {
            state.error = null
        },
        [updateDeleteFavourite.fulfilled.type]: (state, action: PayloadAction<IProduct[]>) => {
            state.error = null
            state.favourite = action.payload
        },
        [updateDeleteFavourite.rejected.type]: (state, action: PayloadAction<string>) => {
            state.error = action.payload
        },

        [updateDeleteCart.pending.type]: (state) => {
            state.error = null
        },
        [updateDeleteCart.fulfilled.type]: (state, action: PayloadAction<IProduct[]>) => {
            state.error = null
            state.cart = action.payload
        },
        [updateDeleteCart.rejected.type]: (state, action: PayloadAction<string>) => {
            state.error = action.payload
        },
    }
})

export default productUserSlice.reducer
