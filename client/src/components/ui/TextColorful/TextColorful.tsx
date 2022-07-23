import { FC } from 'react'
import cn from 'classnames'

import { TextColorfulProps } from './TextColorful.types'

import styles from './TextColorful.module.scss'

const TextColorful: FC<TextColorfulProps> = ({
    className,
    textColorOne,
    textColorTwo,
    colorOne,
    colorTwo = 'black',
    ...props
}) => {
    return (
        <div
            className={cn(styles.Container, className, {
                [styles.GreenOne]: colorOne === 'green',
                [styles.BlackOne]: colorOne === 'black',
                [styles.GreenTwo]: colorTwo === 'green',
                [styles.BlackTwo]: colorTwo === 'black',
            })}
            {...props}
        >
            {textColorOne}
            <br />
            <span>{textColorTwo}</span>
        </div>
    )
}

export default TextColorful
