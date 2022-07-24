import { FC } from 'react'

import OrderList from '@components/containers/Order/OrderList/OrderList'
import MainLayout from '@components/layouts/MainLayout/MainLayout'

const OrderPage: FC = () => {
    return (
        <MainLayout>
            <OrderList />
        </MainLayout>
    )
}

export default OrderPage
