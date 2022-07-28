/* eslint-disable react/no-array-index-key */

import { FC, useEffect } from 'react'

import useRedirect from '@hooks/useRedirect'
import useTypedSelector from '@hooks/useTypedSelector'
import useTypedDispatch from '@hooks/useTypedDispatch'
import { fetchOrder } from '@store/slices/productUser/product.user.actions'
import productUserSelector from '@store/slices/productUser/product.user.selector'

import MainProduct from '@components/common/Product/MainProduct/MainProduct'
import Text from '@components/ui/Text/Text'
import Button from '@components/ui/Button/Button'
import Emoji from '@components/ui/Emoji/Emoji'
import MainProductSkeleton from '@components/common/Product/MainProductSkeleton/MainProductSkeleton'

import styles from './OrderList.module.scss'
import Error from '@components/common/Error/Error'

const OrderList: FC = () => {
    const dispatch = useTypedDispatch()
    const { loading, error, order } = useTypedSelector(productUserSelector)
    const redirectHome = useRedirect('/')

    useEffect(() => {
        !order?.length && dispatch(fetchOrder())
    }, [])

    return (
        <div className={styles.Container}>
            <Text text="My orders" size="h1" />
            {
                !!order?.length &&
                <div className={styles.BlockProducts}>
                    {
                        order.map((product) => <MainProduct
                            key={product._id}
                            id={product._id}
                            name={product.name}
                            image={product.image}
                            price={product.price}
                        />)
                    }
                    {
                        loading
                        && Array(5).fill(0).map((_, i) => <MainProductSkeleton key={i} />)
                    }
                </div>
            }
            {
                !order?.length && !loading && !error &&
                <div className={styles.BlockEmpty}>
                    <Emoji emoji="🙄" size="big" />
                    <Text text="You have no orders" size="h2" />
                    <Text text="You didn't order more than one shoe" size="h4" color="gray" />
                    <Button onClick={redirectHome} text="Go back" size="medium" />
                </div>
            }
            {
                error &&
                <div className={styles.BlockError}><Error /></div>
            }
        </div>
    )
}

export default OrderList
