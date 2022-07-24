import { FC } from 'react'
import { Routes, Route } from 'react-router-dom'

import {
    NotFoundPage,
    MainPage,
    SingInPage,
    SingUpPage,
    FavouritePage,
    OrderPage
} from '@pages/index'

import '@styles/global.scss'

const App: FC = () => {
    return (
        <Routes>
            <Route path="*" element={<NotFoundPage />} />
            <Route path="/" element={<MainPage />} />
            <Route path="/singin" element={<SingInPage />} />
            <Route path="/singup" element={<SingUpPage />} />
            <Route path="/favourite" element={<FavouritePage />} />
            <Route path="/order" element={<OrderPage />} />
        </Routes>
    )
}

export default App
