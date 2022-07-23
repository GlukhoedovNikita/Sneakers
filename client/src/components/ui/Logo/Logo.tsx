import { FC } from 'react'
import cn from 'classnames'

import { LogoProps } from './Logo.types'

import styles from './Logo.module.scss'

import logo from '@assets/img/logo.svg'

const Logo: FC<LogoProps> = ({ className, ...props }) => {
    return (
        <img
            className={cn(className, styles.Container)}
            width={60}
            height={60}
            src={logo}
            alt="Logo Icon"
            {...props}
        />
    )
}

export default Logo
