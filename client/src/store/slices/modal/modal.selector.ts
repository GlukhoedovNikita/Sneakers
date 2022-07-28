import { createSelector } from '@reduxjs/toolkit'
import { RootState } from '@store/index'

const modalState = (state: RootState) => state.modal

const modalSelector = createSelector(modalState, (state) => state)

export default modalSelector
