import { FC, useCallback } from 'react'

import {
    useInput,
    useRedirect,
    useTypedDispatch,
    useTypedSelector
} from '@hooks/index'
import authSelector from '@store/slices/auth/auth.selector'
import { authLogin } from '@store/slices/auth/auth.actions'

import {
    AuthButton,
    Button,
    HeaderIcon,
    Input,
    Text
} from '@components/ui'

import { IUserLogin } from '@store/slices/auth/auth.types'

import styles from './SingInForm.module.scss'

import { closeImg } from '@assets/index'

const SingInForm: FC = () => {
    const dispatch = useTypedDispatch()
    const { error } = useTypedSelector(authSelector)
    const email = useInput('', { isEmpty: true, isEmail: true })
    const password = useInput('', { isEmpty: true, minLength: 3 })

    const redirectSingUp = useRedirect('/singup')
    const redirectHome = useRedirect('/')

    const singInHandler = useCallback(() => {
        const user: IUserLogin = {
            email: email.value,
            password: password.value,
        }
        dispatch(authLogin(user))
    }, [email.value, password.value])

    return (
        <div className={styles.Container}>
            <div className={styles.BlockBtnClose}>
                <HeaderIcon onClick={redirectHome} alt="Close Icon" image={closeImg} />
            </div>
            <div className={styles.Content}>
                <div className={styles.BlockNav}>
                    <AuthButton text="SingIn" color="blue" />
                    <AuthButton onClick={redirectSingUp} text="SingUp" color="black" />
                </div>
                <div className={styles.BlockInput}>
                    <Text text="Enter your email and password to login." size="h4" />
                    {email.isDirty && email.isEmpty &&
                        <Text text="The field cannot be empty" size="h4" color="red" />}
                    {email.isDirty && email.isEmail &&
                        <Text text="Incorrect email" size="h4" color="red" />}
                    <Input
                        placeholder="email"
                        value={email.value}
                        onChange={(e) => email.onChange(e)}
                        onBlur={email.onBlur}
                    />
                    {password.isDirty && password.isEmpty &&
                        <Text text="The field cannot be empty" size="h4" color="red" />}
                    {password.isDirty && password.minLengthError &&
                        <Text text="The minimum field length is 3" size="h4" color="red" />}
                    <Input
                        placeholder="password"
                        type="password"
                        value={password.value}
                        onChange={(e) => password.onChange(e)}
                        onBlur={password.onBlur}
                    />
                </div>
                <div className={styles.BlockBtn}>
                    {error?.includes('Error Auth Login')
                        && <Text text="Incorrect password or email" size="h4" color="red" />}
                    <Button
                        onClick={singInHandler}
                        disabled={!email.isValidInput || !password.isValidInput}
                        size="big"
                        text="SingIn"
                        color="blue"
                        square
                    />
                </div>
            </div>
        </div>
    )
}

export default SingInForm
