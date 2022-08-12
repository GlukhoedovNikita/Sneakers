import { FC, memo } from 'react'
import cn from 'classnames'

import { InputProps } from './Input.types'

import styles from './Input.module.scss'

const Input: FC<InputProps> = ({
    className,
    type = 'text',
    placeholder,
    value,
    onChange,
    ...props
}) => {
    return (
        <input
            className={cn(styles.Container, className)}
            type={type}
            placeholder={placeholder}
            value={value}
            onChange={onChange}
            {...props}
        />
    )
}

export default memo(Input)
