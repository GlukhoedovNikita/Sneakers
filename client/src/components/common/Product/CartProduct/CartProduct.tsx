import { FC } from 'react'
import cn from 'classnames'

import useTypedDispatch from '@hooks/useTypedDispatch'
import useTypedSelector from '@hooks/useTypedSelector'
import productUserSelector from '@store/slices/productUser/product.user.selector'
import { updateDeleteCart } from '@store/slices/productUser/product.user.actions'

import Delete from '@components/ui/Delete/Delete'
import Text from '@components/ui/Text/Text'

import { CartProductProps } from './CartProduct.types'
import imageLoad from '@utils/imageLoad'

import styles from './CartProduct.module.scss'

const CartProduct: FC<CartProductProps> = ({
    id,
    name,
    image,
    price,
    className,
    ...props
}) => {
    const dispatch = useTypedDispatch()
    const { cart } = useTypedSelector(productUserSelector)

    const deleteCartHanlder = () => dispatch(updateDeleteCart({ productId: id, cart }))
    return (
        <div
            className={cn(className, styles.Container)}
            {...props}
        >
            <img
                className={styles.Image}
                width={110}
                height={110}
                src={imageLoad(image)}
                alt="Sneaker"
            />
            <div className={styles.BlockText}>
                <Text text={`Mens Snakers ${name}`} size="h4" />
                <Text text={`${price} rub.`} size="h4" bold={600} />
            </div>
            <Delete onClick={deleteCartHanlder} className={styles.BtnDelete} />
        </div>
    )
}

export default CartProduct
