import { FC } from 'react'
import cn from 'classnames'

import { EmojiProps } from './Emoji.types'

import styles from './Emoji.module.scss'

const Emoji: FC<EmojiProps> = ({
    className,
    size,
    emoji,
    ...props
}) => {
    return (
        <div
            className={cn(className, styles.Container, {
                [styles.Big]: size === 'big',
                [styles.Medium]: size === 'medium',
                [styles.Small]: size === 'small',
            })}
            {...props}
        >
            {emoji}
        </div>
    )
}

export default Emoji
