import { FC } from 'react'

import MainLayout from '@components/layouts/MainLayout/MainLayout'
import MainTitle from '@components/containers/Main/MainTitle/MainTitle'
import MainProductList from '@components/containers/Main/MainProductList/MainProductList'

const MainPage: FC = () => {
    return (
        <MainLayout>
            <MainTitle />
            <MainProductList />
        </MainLayout>
    )
}

export default MainPage
