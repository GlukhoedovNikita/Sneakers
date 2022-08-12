/* eslint-disable react/no-array-index-key */

import { FC, useEffect } from 'react'

import { useTypedSelector, useTypedDispatch } from '@hooks/index'
import productSelector from '@store/slices/product/product.selector'
import { fetchProduct } from '@store/slices/product/product.actions'
import { fetchCart, fetchFavourite, fetchOrder } from '@store/slices/productUser/product.user.actions'

import { Text } from '@components/ui'
import {
    Error,
    MainProduct,
    MainProductSkeleton,
    WarningModal
} from '@components/common'

import styles from './MainProductList.module.scss'

const MainProductList: FC = () => {
    const dispatch = useTypedDispatch()
    const { loading, error, products } = useTypedSelector(productSelector)

    useEffect(() => {
        dispatch(fetchProduct())
        dispatch(fetchFavourite())
        dispatch(fetchCart())
        dispatch(fetchOrder())
    }, [])

    return (
        <div className={styles.Container}>
            <Text text="All Sneakers" size="h1" />
            <div className={styles.BlockProducts}>
                {
                    loading &&
                    Array(15).fill(0).map((_, i) => <MainProductSkeleton key={i} />)
                }
                {
                    error &&
                    <div className={styles.BlockError}><Error /></div>
                }
                {
                    !!products?.length && products.map((product) => <MainProduct
                        key={product._id}
                        id={product._id}
                        name={product.name}
                        price={product.price}
                        image={product.image}
                    />)
                }
            </div>
            <WarningModal />
        </div>
    )
}

export default MainProductList
