import { FC } from 'react'
import cn from 'classnames'

import { InputProps } from './Input.types'

import styles from './Input.module.scss'

const Input: FC<InputProps> = ({
    className,
    type = 'text',
    placeholder,
    ...props
}) => {
    return (
        <input
            className={cn(styles.Container, className)}
            type={type}
            placeholder={placeholder}
            {...props}
        />
    )
}

export default Input
