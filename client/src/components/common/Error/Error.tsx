import { FC } from 'react'
import cn from 'classnames'

import { ErrorProps } from './Error.types'

import styles from './Error.module.scss'
import Text from '@components/ui/Text/Text'
import Emoji from '@components/ui/Emoji/Emoji'

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
