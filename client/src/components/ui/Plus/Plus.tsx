import { FC, memo, useState } from 'react'
import cn from 'classnames'

import { PlusProps } from './Plus.types'

import styles from './Plus.module.scss'

import { plusImg, plusActiveImg } from '@assets/index'

const Plus: FC<PlusProps> = ({ className, active, ...props }) => {
    const [hover, setHover] = useState<boolean>(false)

    const hoverTrueHandler = () => setHover(true)
    const hoverFalseHandler = () => setHover(false)
    return (
        <button
            className={cn(className, styles.Container, {
                [styles.Active]: active,
            })}
            onMouseOver={hoverTrueHandler}
            onMouseOut={hoverFalseHandler}
            {...props}
        >
            <img
                width={20}
                height={20}
                src={active || hover ? plusActiveImg : plusImg}
                alt="Plus Icon"
            />
        </button>
    )
}

export default memo(Plus)
