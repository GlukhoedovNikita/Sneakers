import { FC } from 'react'

import useRedirect from '@hooks/useRedirect'
import useInput from '@hooks/useInput'
import useTypedDispatch from '@hooks/useTypedDispatch'
import useTypedSelector from '@hooks/useTypedSelector'
import authSelector from '@store/slices/auth/auth.selector'
import { authRegistration } from '@store/slices/auth/auth.actions'

import AuthButton from '@components/ui/AuthButton/AuthButton'
import Button from '@components/ui/Button/Button'
import Input from '@components/ui/Input/Input'
import Text from '@components/ui/Text/Text'
import HeaderIcon from '@components/ui/HeaderIcon/HeaderIcon'

import { IUserRegistration } from '@store/slices/auth/auth.types'

import styles from './SingUpForm.module.scss'

import close from '@assets/img/close.svg'

const SingUpForm: FC = () => {
    const dispatch = useTypedDispatch()
    const { error } = useTypedSelector(authSelector)

    const email = useInput('', { isEmpty: true, isEmail: true })
    const password = useInput('', { isEmpty: true, minLength: 3 })
    const passwordConfirm = useInput('', { isEmpty: true, minLength: 3 })

    const redirectSingIn = useRedirect('/singin')
    const redirectHome = useRedirect('/')

    const singUpHandler = () => {
        const user: IUserRegistration = {
            email: email.value,
            password: password.value
        }
        dispatch(authRegistration(user))
    }

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
                    {passwordConfirm.isDirty && passwordConfirm.isEmpty &&
                        <Text text="The field cannot be empty" size="h4" color="red" />}
                    {passwordConfirm.isDirty && passwordConfirm.minLengthError &&
                        <Text text="The minimum field length is 3" size="h4" color="red" />}
                    <Input
                        placeholder="confirm password"
                        type="password"
                        value={passwordConfirm.value}
                        onChange={(e) => passwordConfirm.onChange(e)}
                        onBlur={passwordConfirm.onBlur}
                    />
                </div>
                <div className={styles.BlockBtn}>
                    {error?.includes('Error Auth Registration')
                        && <Text text="This user is already registered" size="h4" color="red" />}
                    <Button
                        onClick={singUpHandler}
                        disabled={!email.isValidInput || !password.isValidInput ||
                            !passwordConfirm.isValidInput || password.value !== passwordConfirm.value}
                        color="blue"
                        text="SingUp"
                        size="big"
                        square
                    />
                </div>
            </div>
        </div>
    )
}

export default SingUpForm
