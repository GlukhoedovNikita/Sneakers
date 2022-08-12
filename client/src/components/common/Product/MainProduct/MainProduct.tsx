import {
    FC,
    memo,
    useCallback,
    useEffect,
    useState
} from 'react'
import cn from 'classnames'

import { useTypedDispatch, useTypedSelector } from '@hooks/index'
import { setActiveWarning } from '@store/slices/modal/modal.slice'
import authSelector from '@store/slices/auth/auth.selector'
import productSelector from '@store/slices/product/product.selector'
import productUserSelector from '@store/slices/productUser/product.user.selector'
import {
    updateAddCart,
    updateAddFavourite,
    updateDeleteCart,
    updateDeleteFavourite
} from '@store/slices/productUser/product.user.actions'

import { Like, Plus, Text } from '@components/ui'

import { MainProductProps } from './MainProduct.types'
import imageLoad from '@utils/imageLoad'

import styles from './MainProduct.module.scss'

const MainProduct: FC<MainProductProps> = ({
    className,
    image,
    name,
    price,
    id,
    ...props
}) => {
    const dispatch = useTypedDispatch()
    const { isAuth } = useTypedSelector(authSelector)
    const { products } = useTypedSelector(productSelector)
    const { favourite, cart } = useTypedSelector(productUserSelector)

    const [activeFavourite, setActiveFavourite] = useState<boolean>(false)
    const [activeCart, setActiveCart] = useState<boolean>(false)

    useEffect(() => {
        if (!!favourite.find((product) => product._id === id) && isAuth) setActiveFavourite(true)
        else setActiveFavourite(false)
    }, [isAuth, favourite])

    useEffect(() => {
        if (!!cart.find((product) => product._id === id) && isAuth) setActiveCart(true)
        else setActiveCart(false)
    }, [isAuth, cart])

    const favouriteHandler = useCallback(() => {
        isAuth ? setActiveFavourite(!activeFavourite) : dispatch(setActiveWarning())
        activeFavourite
            ? dispatch(updateDeleteFavourite({ productId: id, favourite }))
            : dispatch(updateAddFavourite({ productId: id, products, favourite }))
    }, [isAuth, activeFavourite, id, favourite, products])

    const cartHandler = useCallback(() => {
        isAuth ? setActiveCart(!activeCart) : dispatch(setActiveWarning())
        activeCart
            ? dispatch(updateDeleteCart({ productId: id, cart }))
            : dispatch(updateAddCart({ productId: id, products, cart }))
    }, [isAuth, activeCart, id, cart, products])

    return (
        <div
            className={cn(className, styles.Container)}
            {...props}
        >
            <div className={styles.BlockImage}>
                <Like active={activeFavourite} onClick={favouriteHandler} />
                <img
                    src={imageLoad(image)}
                    alt="Sneaker"
                />
                <Text text={`Mens Snakers ${name}`} size="h4" />
            </div>
            <div className={styles.BlockPrice}>
                <Text text="Price:" size="h4" color="gray" />
                <Text text={`${price} rub.`} size="h4" bold={600} />
                <Plus
                    active={activeCart}
                    onClick={cartHandler}
                    className={styles.Icon}
                />
            </div>
        </div>
    )
}

export default memo(MainProduct)
