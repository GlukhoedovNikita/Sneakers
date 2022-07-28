import { createSelector } from '@reduxjs/toolkit'
import { RootState } from '@store/index'

const productUserState = (state: RootState) => state.productUser

const productUserSelector = createSelector(productUserState, (state) => state)

export default productUserSelector
