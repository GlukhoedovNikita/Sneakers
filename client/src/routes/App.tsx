import { FC, lazy, useEffect } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'

import { useRedirect, useTypedDispatch, useTypedSelector } from '@hooks/index'
import { authRefresh } from '@store/slices/auth/auth.actions'
import authSelector from '@store/slices/auth/auth.selector'

import { MainPage } from '@pages/index'

import '@styles/global.scss'

const FavouritePage = lazy(() => import('@pages/Favourite/Favourite'))
const NotFoundPage = lazy(() => import('@pages/NotFound/NotFound'))
const OrderPage = lazy(() => import('@pages/Order/Order'))
const SingUpPage = lazy(() => import('@pages/SingUp/SingUp'))
const SingInPage = lazy(() => import('@pages/SingIn/SingIn'))

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
            <Route path="/" element={<MainPage />} />
            <Route path="*" element={<NotFoundPage />} />

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
