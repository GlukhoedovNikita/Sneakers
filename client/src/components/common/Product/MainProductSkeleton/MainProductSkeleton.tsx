import { FC } from 'react'

import styles from './MainProductSkeleton.module.scss'

import productLoading from '@assets/img/product-main-loading.jpg'

const MainProductSkeleton: FC = () => {
    return (
        <img
            className={styles.Container}
            src={productLoading}
            alt="Loading Product"
        />
    )
}

export default MainProductSkeleton
