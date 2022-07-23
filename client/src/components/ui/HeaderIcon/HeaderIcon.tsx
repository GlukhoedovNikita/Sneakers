import { FC } from 'react'
import cn from 'classnames'

import { HeaderIconProps } from './HeaderIcon.types'

import styles from './HeaderIcon.module.scss'

const HeaderIcon: FC<HeaderIconProps> = ({
    className,
    image,
    alt,
    ...props
}) => {
    return (
        <img
            className={cn(styles.Container, className)}
            width={30}
            height={30}
            src={image}
            alt={alt}
            {...props}
        />
    )
}

export default HeaderIcon
