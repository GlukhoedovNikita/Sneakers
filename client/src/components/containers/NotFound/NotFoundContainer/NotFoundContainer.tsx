import { FC } from 'react'

import { useRedirect } from '@hooks/index'

import { Button, Emoji, Text } from '@components/ui'

import styles from './NotFoundContainer.module.scss'

const NotFoundContainer: FC = () => {
    const redirectHome = useRedirect('/')

    return (
        <div className={styles.Container}>
            <Emoji emoji="😱" size="big" />
            <Text text="This page does not exist." size="h1" />
            <Button onClick={redirectHome} text="Go back" size="medium" />
        </div>
    )
}

export default NotFoundContainer
