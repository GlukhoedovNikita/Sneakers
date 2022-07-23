import { FC } from 'react'

import MainLayout from '@components/layouts/MainLayout/MainLayout'
import MainTitle from '@components/containers/Main/MainTitle/MainTitle'

const MainPage: FC = () => {
    return (
        <MainLayout>
            <MainTitle />
        </MainLayout>
    )
}

export default MainPage
