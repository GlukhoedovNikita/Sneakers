import { FC, useState } from 'react'
import cn from 'classnames'

import { PlusProps } from './Plus.types'

import styles from './Plus.module.scss'

import plus from '@assets/img/plus.svg'
import plusActive from '@assets/img/plus-active.svg'

const Plus: FC<PlusProps> = ({ className, initialActive = false, ...props }) => {
    const [active, setActive] = useState<boolean>(initialActive)
    const [hover, setHover] = useState<boolean>(false)

    const activeHandler = () => setActive(!active)
    const hoverTrueHandler = () => setHover(true)
    const hoverFalseHandler = () => setHover(false)
    return (
        <button
            className={cn(className, styles.Container, {
                [styles.Active]: active,
            })}
            onClick={activeHandler}
            onMouseOver={hoverTrueHandler}
            onMouseOut={hoverFalseHandler}
            {...props}
        >
            <img
                width={20}
                height={20}
                src={active || hover ? plusActive : plus}
                alt="Plus Icon"
            />
        </button>
    )
}

export default Plus
