import { FC } from 'react'
import { Routes, Route } from 'react-router-dom'

import MainPage from '../pages/Main/Main'

import '@styles/global.scss'

const App: FC = () => {
    return (
        <Routes>
            <Route path="/" element={<MainPage />} />
        </Routes>
    )
}

export default App
