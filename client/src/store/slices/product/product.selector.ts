import { createSelector } from '@reduxjs/toolkit'
import { RootState } from '@store/index'

const productState = (state: RootState) => state.product

const productSelector = createSelector(productState, (state) => state)

export default productSelector
