import { FC } from 'react'

import styles from './MainProductSkeleton.module.scss'

import { productMainLoading } from '@assets/index'

const MainProductSkeleton: FC = () => {
    return (
        <img
            className={styles.Container}
            width={300}
            height={300}
            src={productMainLoading}
            alt="Loading Product"
        />
    )
}

export default MainProductSkeleton
