import {
    FC,
    useRef,
    useState
} from 'react'

import useOnClickOutside from '@hooks/useOnClickOutside'
import useRedirect from '@hooks/useRedirect'

import HeaderIcon from '@components/ui/HeaderIcon/HeaderIcon'
import Logo from '@components/ui/Logo/Logo'
import Text from '@components/ui/Text/Text'
import ToggleList from '../ToggleList/ToggleList'
// import Button from '@components/ui/Button/Button'

import styles from './Header.module.scss'

import cart from '@assets/img/cart.svg'
import favourite from '@assets/img/favourite.svg'
import profile from '@assets/img/profile.svg'
import CartModal from '../Modal/CartModal/CartModal'

const Header: FC = () => {
    const redirectHome = useRedirect('/')
    const redirectFavourite = useRedirect('/favourite')
    // const redirectSingIn = useRedirect('/singin')
    // const redirectSingUp = useRedirect('/singup')

    const refToggleList = useRef(null)
    const [activeToggleList, setActiveToggleList] = useState<boolean>(false)
    const activeToggleListHandler = () => setActiveToggleList(!activeToggleList)
    useOnClickOutside(refToggleList, () => setActiveToggleList(false))

    const [activeModal, setActiveModal] = useState<boolean>(false)
    const activeModalHandler = () => setActiveModal(!activeModal)

    return (
        <div className={styles.Container}>
            <div className={styles.BlockLogo}>
                <Logo onClick={redirectHome} className={styles.Logo} />
                <Text size="h1" text="Sneakers Shop" />
                <Text size="h4" color="gray" text="Best sneaker store" />
            </div>
            <div className={styles.BlockBtn}>
                {/* <Button onClick={redirectSingIn} size="small" color="white" text="Sing in" />
                <Button onClick={redirectSingUp} size="small" text="Sing up" /> */}
                <HeaderIcon onClick={activeModalHandler} image={cart} alt="Cart Icon" />
                <HeaderIcon onClick={redirectFavourite} image={favourite} alt="Favourite Icon" />
                <div ref={refToggleList}>
                    <HeaderIcon onClick={activeToggleListHandler} image={profile} alt="Profile Icon" />
                    <ToggleList
                        active={activeToggleList}
                        values={['Home', 'Favourites', 'Order', 'Logout']}
                        valuesLink={['/', '/favourite', '/order']}
                    />
                </div>
                <CartModal active={activeModal} setActive={setActiveModal} />
            </div>
        </div>
    )
}

export default Header
