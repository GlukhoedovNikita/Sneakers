import { FC } from 'react'
import cn from 'classnames'

import { ButtonProps } from './Button.types'

import styles from './Button.module.scss'

const Button: FC<ButtonProps> = ({
    className,
    text,
    color = 'green',
    size,
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
            })}
            {...props}
        >
            {text}
        </button>
    )
}

export default Button
