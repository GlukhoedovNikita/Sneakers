import { FC } from 'react'
import cn from 'classnames'

import Like from '@components/ui/Like/Like'
import Plus from '@components/ui/Plus/Plus'

import { MainProductProps } from './MainProduct.types'

import styles from './MainProduct.module.scss'

import product from '@assets/img/product.jpg'
import Text from '@components/ui/Text/Text'

const MainProduct: FC<MainProductProps> = ({
    className,
    ...props
}) => {
    return (
        <div
            className={cn(className, styles.Container)}
            {...props}
        >
            <div className={styles.BlockImage}>
                <Like />
                <img
                    src={product}
                    alt="Sneaker"
                />
                <Text text="Mens Snakers Nike Blazer Mid Suede" size="h4" />
            </div>
            <div className={styles.BlockPrice}>
                <Text text="Price:" size="h4" color="gray" />
                <Text text="12 999 rub." size="h4" bold={600} />
                <Plus className={styles.Icon} />
            </div>
        </div>
    )
}

export default MainProduct
