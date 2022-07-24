import { FC } from 'react'

import useRedirect from '@hooks/useRedirect'

import AuthButton from '@components/ui/AuthButton/AuthButton'
import Button from '@components/ui/Button/Button'
import Input from '@components/ui/Input/Input'
import Text from '@components/ui/Text/Text'
import HeaderIcon from '@components/ui/HeaderIcon/HeaderIcon'

import styles from './SingInForm.module.scss'

import close from '@assets/img/close.svg'

const SingInForm: FC = () => {
    const redirectSingUp = useRedirect('/singup')
    const redirectHome = useRedirect('/')

    return (
        <div className={styles.Container}>
            <div className={styles.BlockBtnClose}>
                <HeaderIcon onClick={redirectHome} alt="Close Icon" image={close} />
            </div>
            <div className={styles.Content}>
                <div className={styles.BlockNav}>
                    <AuthButton text="SingIn" color="blue" />
                    <AuthButton onClick={redirectSingUp} text="SingUp" color="black" />
                </div>
                <div className={styles.BlockInput}>
                    <Text text="Enter your email and password to login." size="h4" />
                    <Input placeholder="email" />
                    <Input placeholder="password" type="password" />
                </div>
                <div className={styles.BlockBtn}>
                    <Button size="big" text="SingIn" color="blue" square />
                </div>
            </div>
        </div>
    )
}

export default SingInForm
