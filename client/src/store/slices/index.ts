import productSlice from './product/product.slice'
import authSlice from './auth/auth.slice'
import productUserSlice from './productUser/product.user.slice'
import modalSlice from './modal/modal.slice'

const rootReducer = {
    product: productSlice,
    auth: authSlice,
    productUser: productUserSlice,
    modal: modalSlice,
}

export default rootReducer
