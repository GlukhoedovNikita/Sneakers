import { FC } from 'react'

import MainLayout from '@components/layouts/MainLayout/MainLayout'
import FavouriteList from '@components/containers/Favourite/FavouriteList/FavouriteList'

const FavouritePage: FC = () => {
    return (
        <MainLayout>
            <FavouriteList />
        </MainLayout>
    )
}

export default FavouritePage
