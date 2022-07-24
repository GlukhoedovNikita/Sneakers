import { FC } from 'react'
import cn from 'classnames'

import { CenterLayoutProps } from './CenterLayout.types'

import styles from './CenterLayout.module.scss'

const CenterLayout: FC<CenterLayoutProps> = ({ className, children, ...props }) => {
    return (
        <div
            className={cn(className, styles.Container)}
            {...props}
        >
            {children}
        </div>
    )
}

export default CenterLayout
