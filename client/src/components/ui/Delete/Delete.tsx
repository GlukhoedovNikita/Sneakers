import { FC, useState } from 'react'
import cn from 'classnames'

import { DeleteProps } from './Delete.types'

import styles from './Delete.module.scss'

import deleteIcon from '@assets/img/delete.svg'
import deleteActiveIcon from '@assets/img/delete-active.svg'

const Delete: FC<DeleteProps> = ({ className, ...props }) => {
    const [hover, setHover] = useState<boolean>(false)

    const hoverTrueHandler = () => setHover(true)
    const hoverFalseHandler = () => setHover(false)

    return (
        <button
            className={cn(className, styles.Container)}
            onMouseOver={hoverTrueHandler}
            onMouseOut={hoverFalseHandler}
            {...props}
        >
            <img
                width={20}
                height={20}
                src={hover ? deleteActiveIcon : deleteIcon}
                alt="Delete Icon"
            />
        </button>
    )
}

export default Delete
