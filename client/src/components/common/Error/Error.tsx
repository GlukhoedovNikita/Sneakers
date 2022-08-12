import { FC } from 'react'
import cn from 'classnames'

import { Emoji, Text } from '@components/ui'

import { ErrorProps } from './Error.types'

import styles from './Error.module.scss'

const Error: FC<ErrorProps> = ({ className, ...props }) => {
    return (
        <div
            className={cn(className, styles.Container)}
            {...props}
        >
            <Emoji emoji="😰" size="big" />
            <Text text="Sorry there was some error" size="h2" color="red" />
        </div>
    )
}

export default Error
