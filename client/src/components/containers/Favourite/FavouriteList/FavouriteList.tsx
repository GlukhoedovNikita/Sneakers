/* eslint-disable react/no-array-index-key */

import { FC, useEffect } from 'react'

import useRedirect from '@hooks/useRedirect'
import useTypedDispatch from '@hooks/useTypedDispatch'
import useTypedSelector from '@hooks/useTypedSelector'
import { fetchFavourite } from '@store/slices/productUser/product.user.actions'
import productUserSelector from '@store/slices/productUser/product.user.selector'

import MainProduct from '@components/common/Product/MainProduct/MainProduct'
import Text from '@components/ui/Text/Text'
import Button from '@components/ui/Button/Button'
import Emoji from '@components/ui/Emoji/Emoji'
import Error from '@components/common/Error/Error'
import MainProductSkeleton from '@components/common/Product/MainProductSkeleton/MainProductSkeleton'

import styles from './FavouriteList.module.scss'

const FavouriteList: FC = () => {
    const dispatch = useTypedDispatch()
    const { loading, error, favourite } = useTypedSelector(productUserSelector)

    useEffect(() => {
        !favourite?.length && dispatch(fetchFavourite())
    }, [])

    const redirectHome = useRedirect('/')
    return (
        <div className={styles.Container}>
            <Text text="Favourites Sneakers" size="h1" />
            <div className={styles.BlockProducts}>
                {
                    !!favourite?.length && favourite.map((product) => <MainProduct
                        key={product._id}
                        id={product._id}
                        name={product.name}
                        price={product.price}
                        image={product.image}
                    />)
                }
                {
                    loading
                    && Array(5).fill(0).map((_, i) => <MainProductSkeleton key={i} />)
                }
            </div>
            {
                !favourite?.length && !error && !loading &&
                <div className={styles.BlockEmpty}>
                    <Emoji emoji="🥺" size="big" />
                    <Text text="Favourites is empty" size="h2" />
                    <Text text="You have not added anything to favorites" size="h4" color="gray" />
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

export default FavouriteList
