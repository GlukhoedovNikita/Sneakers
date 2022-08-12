import {
    FC,
    useCallback,
    useRef,
    useState
} from 'react'
import {
    useTypedDispatch,
    useTypedSelector,
    useRedirect,
    useOnClickOutside
} from '@hooks/index'
import { setActiveCart } from '@store/slices/modal/modal.slice'
import authSelector from '@store/slices/auth/auth.selector'

import {
    Button,
    HeaderIcon,
    Logo,
    Text
} from '@components/ui'
import ToggleList from '../ToggleList/ToggleList'
import CartModal from '../Modal/CartModal/CartModal'

import styles from './Header.module.scss'

import { cartImg, favouriteImg, profileImg } from '@assets/index'

const Header: FC = () => {
    const dispatch = useTypedDispatch()
    const { isAuth } = useTypedSelector(authSelector)

    const redirectHome = useRedirect('/')
    const redirectFavourite = useRedirect('/favourite')
    const redirectSingIn = useRedirect('/singin')
    const redirectSingUp = useRedirect('/singup')

    const refToggleList = useRef(null)
    const [activeToggleList, setActiveToggleList] = useState<boolean>(false)
    const activeToggleListHandler = useCallback(() => setActiveToggleList(!activeToggleList), [activeToggleList])
    useOnClickOutside(refToggleList, () => setActiveToggleList(false))

    const activeModalHandler = useCallback(() => dispatch(setActiveCart()), [])

    return (
        <div className={styles.Container}>
            <div className={styles.BlockLogo}>
                <Logo onClick={redirectHome} className={styles.Logo} />
                <Text className={styles.Title} size="h1" text="Sneakers Shop" />
                <Text className={styles.Text} size="h4" color="gray" text="Best sneaker store" />
            </div>
            <div className={styles.BlockBtn}>
                {
                    isAuth
                        ?
                        <>
                            <HeaderIcon onClick={activeModalHandler} image={cartImg} alt="Cart Icon" />
                            <HeaderIcon onClick={redirectFavourite} image={favouriteImg} alt="Favourite Icon" />
                            <div ref={refToggleList}>
                                <HeaderIcon onClick={activeToggleListHandler} image={profileImg} alt="Profile Icon" />
                                <ToggleList
                                    active={activeToggleList}
                                    values={['Home', 'Favourite', 'Order', 'Logout']}
                                    valuesLink={['/', '/favourite', '/order']}
                                />
                            </div>
                            <CartModal />
                        </>
                        :
                        <>
                            <Button onClick={redirectSingIn} size="small" color="white" text="Sing in" />
                            <Button onClick={redirectSingUp} size="small" text="Sing up" />
                        </>
                }
            </div>
        </div>
    )
}

export default Header
