import { FC, memo } from 'react'
import cn from 'classnames'

import { LogoProps } from './Logo.types'

import styles from './Logo.module.scss'

import { logoImg } from '@assets/index'

const Logo: FC<LogoProps> = ({ className, ...props }) => {
    return (
        <img
            className={cn(className, styles.Container)}
            width={60}
            height={60}
            src={logoImg}
            alt="Logo Icon"
            {...props}
        />
    )
}

export default memo(Logo)
