import { FC } from 'react'
import cn from 'classnames'

import { TextProps } from './Text.types'

import styles from './Text.module.scss'

const Text: FC<TextProps> = ({
    className,
    text,
    size,
    color = 'black',
    ...props
}) => {
    return (
        <div
            className={cn(styles.Container, className, {
                [styles.Black]: color === 'black',
                [styles.Gray]: color === 'gray',
                [styles.Green]: color === 'green',
                [styles.H1]: size === 'h1',
                [styles.H2]: size === 'h2',
                [styles.H3]: size === 'h3',
                [styles.H4]: size === 'h4',
            })}
            {...props}
        >
            {text}
        </div>
    )
}

export default Text
