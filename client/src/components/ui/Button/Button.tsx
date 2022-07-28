import { FC } from 'react'
import cn from 'classnames'

import { ButtonProps } from './Button.types'

import styles from './Button.module.scss'

const Button: FC<ButtonProps> = ({
    className,
    text,
    color = 'green',
    square = false,
    size,
    disabled = false,
    ...props
}) => {
    return (
        <button
            className={cn(className, styles.Container, {
                [styles.Big]: size === 'big',
                [styles.Medium]: size === 'medium',
                [styles.Small]: size === 'small',
                [styles.Green]: color === 'green',
                [styles.White]: color === 'white',
                [styles.Blue]: color === 'blue',
                [styles.Square]: square,
            })}
            disabled={disabled}
            {...props}
        >
            {text}
        </button>
    )
}

export default Button
