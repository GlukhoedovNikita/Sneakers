import { FC } from 'react'

// import useRedirect from '@hooks/useRedirect'

import MainProduct from '@components/common/Product/MainProduct/MainProduct'
import Text from '@components/ui/Text/Text'
// import Button from '@components/ui/Button/Button'
// import Emoji from '@components/ui/Emoji/Emoji'

import styles from './FavouriteList.module.scss'

const FavouriteList: FC = () => {
    // const redirectHome = useRedirect('/')

    return (
        <div className={styles.Container}>
            <Text text="Favourites Sneakers" size="h1" />
            <div className={styles.BlockProducts}>
                {
                    Array(15).fill(0).map((_, i) => <MainProduct key={i} />)
                }
            </div>
            {/* <div className={styles.BlockEmpty}>
                <Emoji emoji="🥺" size="big" />
                <Text text="Favourites is empty" size="h2" />
                <Text text="You have not added anything to favorites" size="h4" color="gray" />
                <Button onClick={redirectHome} text="Go back" size="medium" />
            </div> */}
        </div>
    )
}

export default FavouriteList
