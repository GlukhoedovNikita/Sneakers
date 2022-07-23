import { FC } from 'react'

import Button from '@components/ui/Button/Button'
import TextColorful from '@components/ui/TextColorful/TextColorful'

import styles from './MainTitle.module.scss'

const MainTitle: FC = () => {
    return (
        <div className={styles.Container}>
            <TextColorful colorOne="green" textColorOne="Stan Smit h," textColorTwo="Forever!" />
            <Button size="big" text="Buy" />
        </div>
    )
}

export default MainTitle
