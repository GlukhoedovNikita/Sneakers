import { FC, useState } from 'react'

import MainProduct from '@components/common/Product/MainProduct/MainProduct'
import Text from '@components/ui/Text/Text'
import WarningModal from '@components/common/Modal/WarningModal/WarningModal'

import styles from './MainProductList.module.scss'

const MainProductList: FC = () => {
    const [activeModal, setActiveModal] = useState<boolean>(false)

    return (
        <div className={styles.Container}>
            <Text text="All Sneakers" size="h1" />
            <div className={styles.BlockProducts}>
                {
                    Array(15).fill(0).map((_, i) => <MainProduct key={i} />)
                }
            </div>
            <WarningModal active={activeModal} setActive={setActiveModal} />
        </div>
    )
}

export default MainProductList
