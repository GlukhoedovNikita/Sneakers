import { FC } from 'react'

import useRedirect from '@hooks/useRedirect'

import AuthButton from '@components/ui/AuthButton/AuthButton'
import Button from '@components/ui/Button/Button'
import Input from '@components/ui/Input/Input'
import Text from '@components/ui/Text/Text'
import HeaderIcon from '@components/ui/HeaderIcon/HeaderIcon'

import styles from './SingUpForm.module.scss'

import close from '@assets/img/close.svg'

const SingUpForm: FC = () => {
    const redirectSingIn = useRedirect('/singin')
    const redirectHome = useRedirect('/')

    return (
        <div className={styles.Container}>
            <div className={styles.BlockBtnClose}>
                <HeaderIcon onClick={redirectHome} alt="Close Icon" image={close} />
            </div>
            <div className={styles.Content}>
                <div className={styles.BlockNav}>
                    <AuthButton onClick={redirectSingIn} text="SingIn" color="black" />
                    <AuthButton text="SingUp" color="blue" />
                </div>
                <div className={styles.BlockInput}>
                    <Text text="Enter your email and password to registration." size="h4" />
                    <Input placeholder="email" />
                    <Input placeholder="password" type="password" />
                    <Input placeholder="confirm password" type="password" />
                </div>
                <div className={styles.BlockBtn}>
                    <Button color="blue" text="SingUp" size="big" square />
                </div>
            </div>
        </div>
    )
}

export default SingUpForm
