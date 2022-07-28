import { createSelector } from '@reduxjs/toolkit'
import { RootState } from '@store/index'

const authState = (state: RootState) => state.auth

const authSelector = createSelector(authState, (state) => state)

export default authSelector
