import { FC } from 'react'
import cn from 'classnames'

import { Header } from '@components/common'

import { MainLayoutProps } from './MainLayout.types'

import styles from './MainLayout.module.scss'

const MainLayout: FC<MainLayoutProps> = ({ className, children, ...props }) => {
    return (
        <div
            className={cn(styles.Container, className)}
            {...props}
        >
            <div className={styles.Content}>
                <Header />
                <div className={styles.Body}>
                    {children}
                </div>
            </div>
        </div>
    )
}

export default MainLayout
