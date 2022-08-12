import { FC } from 'react'

import { Button, TextColorful } from '@components/ui'

import styles from './MainTitle.module.scss'

const MainTitle: FC = () => {
    return (
        <div className={styles.Container}>
            <TextColorful colorOne="green" textColorOne="Stan Smit h," textColorTwo="Forever!" />
            <Button className={styles.Btn} size="big" text="Buy" />
        </div>
    )
}

export default MainTitle
