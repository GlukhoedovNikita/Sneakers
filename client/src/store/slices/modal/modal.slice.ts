import { createSlice } from '@reduxjs/toolkit'

import { IModalState } from './modal.types'

const initialState: IModalState = {
    activeWarning: false,
    activeCart: false,
}

const modalSlice = createSlice({
    name: 'modal',
    initialState,
    reducers: {
        setActiveCart: (state) => {
            state.activeCart = !state.activeCart
        },
        setActiveWarning: (state) => {
            state.activeWarning = !state.activeWarning
        },
    }
})

export const { setActiveCart, setActiveWarning } = modalSlice.actions

export default modalSlice.reducer
