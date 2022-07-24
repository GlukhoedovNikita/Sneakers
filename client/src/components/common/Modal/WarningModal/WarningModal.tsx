import { FC, MouseEvent, useEffect } from 'react'
import cn from 'classnames'

import useRedirect from '@hooks/useRedirect'

import Emoji from '@components/ui/Emoji/Emoji'

import { WarningModalProps } from './WarningModal.types'

import styles from './WarningModal.module.scss'

const WarningModal: FC<WarningModalProps> = ({
    className,
    active,
    setActive,
    ...props
}) => {
    useEffect(() => {
        document.body.style.overflow = active ? 'hidden' : 'auto'
    }, [active])
    const activeHandler = (e: MouseEvent<HTMLDivElement>) => {
        if (e.target === e.currentTarget) setActive(!active)
    }

    const redirectSingIn = useRedirect('/singin')
    const redirectSingUp = useRedirect('/singup')

    return (
        <div
            className={cn(className, styles.Container, {
                [styles.Active]: active,
            })}
            onClick={(e) => activeHandler(e)}
            {...props}
        >
            <div className={styles.Content}>
                <Emoji emoji="🙁" size="big" />
                <div className={styles.Text}>
                    You must
                    <span className={styles.Link} onClick={redirectSingIn}> login </span>
                    or
                    <span className={styles.Link} onClick={redirectSingUp}> register </span>
                    to use this feature.
                </div>
            </div>
        </div>
    )
}

export default WarningModal
