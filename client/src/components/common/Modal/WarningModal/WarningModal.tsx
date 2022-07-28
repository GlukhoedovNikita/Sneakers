import { FC, MouseEvent, useEffect } from 'react'
import cn from 'classnames'

import useRedirect from '@hooks/useRedirect'
import useTypedSelector from '@hooks/useTypedSelector'
import useTypedDispatch from '@hooks/useTypedDispatch'

import { setActiveWarning } from '@store/slices/modal/modal.slice'
import modalSelector from '@store/slices/modal/modal.selector'

import Emoji from '@components/ui/Emoji/Emoji'

import { WarningModalProps } from './WarningModal.types'

import styles from './WarningModal.module.scss'

const WarningModal: FC<WarningModalProps> = ({
    className,
    ...props
}) => {
    const dispatch = useTypedDispatch()
    const { activeWarning } = useTypedSelector(modalSelector)

    useEffect(() => {
        document.body.style.overflow = activeWarning ? 'hidden' : 'auto'
    }, [activeWarning])
    const activeHandler = (e: MouseEvent<HTMLDivElement>) => {
        if (e.target === e.currentTarget) dispatch(setActiveWarning())
    }

    const redirectSingIn = useRedirect('/singin')
    const redirectSingUp = useRedirect('/singup')

    const singInHandler = () => {
        dispatch(setActiveWarning())
        redirectSingIn()
    }
    const singUpHandler = () => {
        dispatch(setActiveWarning())
        redirectSingUp()
    }

    return (
        <div
            className={cn(className, styles.Container, {
                [styles.Active]: activeWarning,
            })}
            onClick={(e) => activeHandler(e)}
            {...props}
        >
            <div className={styles.Content}>
                <Emoji emoji="🙁" size="big" />
                <div className={styles.Text}>
                    You must
                    <span className={styles.Link} onClick={singInHandler}> login </span>
                    or
                    <span className={styles.Link} onClick={singUpHandler}> register </span>
                    to use this feature.
                </div>
            </div>
        </div>
    )
}

export default WarningModal
