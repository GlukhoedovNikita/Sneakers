import { FC, memo } from 'react'
import cn from 'classnames'

import { AuthButtonProps } from './AuthButton.types'

import styles from './AuthButton.module.scss'

const AuthButton: FC<AuthButtonProps> = ({
    className,
    color,
    text,
    ...props
}) => {
    return (
        <button
            className={cn(className, styles.Container, {
                [styles.Black]: color === 'black',
                [styles.Blue]: color === 'blue',
            })}
            {...props}
        >
            {text}
        </button>
    )
}

export default memo(AuthButton)
