import { FC, useEffect } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'

import useTypedSelector from '@hooks/useTypedSelector'
import useTypedDispatch from '@hooks/useTypedDispatch'
import { authRefresh } from '@store/slices/auth/auth.actions'
import authSelector from '@store/slices/auth/auth.selector'

import {
    NotFoundPage,
    MainPage,
    SingInPage,
    SingUpPage,
    FavouritePage,
    OrderPage
} from '@pages/index'

import '@styles/global.scss'
import useRedirect from '@hooks/useRedirect'

const App: FC = () => {
    const dispatch = useTypedDispatch()
    const { isAuth } = useTypedSelector(authSelector)

    useEffect(() => {
        dispatch(authRefresh())
    }, [])

    const location = useLocation()
    const redirectHome = useRedirect('/')

    useEffect(() => {
        isAuth && (location.pathname === '/singup' || location.pathname === '/singin') && redirectHome()
    }, [isAuth])

    return (
        <Routes>
            <Route path="*" element={<NotFoundPage />} />
            <Route path="/" element={<MainPage />} />
            {
                isAuth
                    ?
                    <>
                        <Route path="/favourite" element={<FavouritePage />} />
                        <Route path="/order" element={<OrderPage />} />

                    </>
                    :
                    <>
                        <Route path="/singin" element={<SingInPage />} />
                        <Route path="/singup" element={<SingUpPage />} />
                    </>
            }
        </Routes>
    )
}

export default App
