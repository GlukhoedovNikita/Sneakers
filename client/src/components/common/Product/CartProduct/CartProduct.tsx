import { FC } from 'react'
import cn from 'classnames'

import { CartProductProps } from './CartProduct.types'

import styles from './CartProduct.module.scss'

import product from '@assets/img/product.jpg'
import Delete from '@components/ui/Delete/Delete'
import Text from '@components/ui/Text/Text'

const CartProduct: FC<CartProductProps> = ({
    className,
    ...props
}) => {
    return (
        <div
            className={cn(className, styles.Container)}
            {...props}
        >
            <img
                className={styles.Image}
                width={110}
                height={110}
                src={product}
                alt="Sneaker"
            />
            <div className={styles.BlockText}>
                <Text text="Mens Snakers Nike Blazer Mid Suede" size="h4" />
                <Text text="12 999 rub." size="h4" bold={600} />
            </div>
            <Delete className={styles.BtnDelete} />
        </div>
    )
}

export default CartProduct
