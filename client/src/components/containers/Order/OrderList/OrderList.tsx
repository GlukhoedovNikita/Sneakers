import { FC } from 'react'

// import useRedirect from '@hooks/useRedirect'

import MainProduct from '@components/common/Product/MainProduct/MainProduct'
import Text from '@components/ui/Text/Text'
// import Button from '@components/ui/Button/Button'
// import Emoji from '@components/ui/Emoji/Emoji'

import styles from './OrderList.module.scss'

const OrderList: FC = () => {
    // const redirectHome = useRedirect('/')

    return (
        <div className={styles.Container}>
            <Text text="My orders" size="h1" />
            <div className={styles.BlockProducts}>
                {
                    Array(15).fill(0).map((_, i) => <MainProduct key={i} />)
                }
            </div>
            {/* <div className={styles.BlockEmpty}>
                <Emoji emoji="🙄" size="big" />
                <Text text="You have no orders" size="h2" />
                <Text text="You didn't order more than one shoe" size="h4" color="gray" />
                <Button onClick={redirectHome} text="Go back" size="medium" />
            </div> */}
        </div>
    )
}

export default OrderList
