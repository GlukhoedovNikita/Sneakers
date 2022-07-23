import { FC } from 'react'

// import HeaderIcon from '@components/ui/HeaderIcon/HeaderIcon'
import Logo from '@components/ui/Logo/Logo'
import Text from '@components/ui/Text/Text'

import styles from './Header.module.scss'

// import cart from '@assets/img/cart.svg'
// import favourite from '@assets/img/favourite.svg'
// import profile from '@assets/img/profile.svg'
import Button from '@components/ui/Button/Button'

const Header: FC = () => {
    return (
        <div className={styles.Container}>
            <div className={styles.BlockLogo}>
                <Logo className={styles.Logo} />
                <Text size="h1" text="Sneakers Shop" />
                <Text size="h4" color="gray" text="Best sneaker store" />
            </div>
            <div className={styles.BlockBtn}>
                <Button size="small" color="white" text="Sing in" />
                <Button size="small" text="Sing up" />
                {/* <HeaderIcon image={cart} alt="Cart Icon" />
                <HeaderIcon image={favourite} alt="Favourite Icon" />
                <HeaderIcon image={profile} alt="Profile Icon" /> */}
            </div>
        </div>
    )
}

export default Header
