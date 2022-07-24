import { FC } from 'react'
import { Link } from 'react-router-dom'
import cn from 'classnames'

import { ToggleListProps } from './ToggleList.types'

import styles from './ToggleList.module.scss'

const ToggleList: FC<ToggleListProps> = ({
    className,
    values,
    valuesLink,
    active,
    ...props
}) => {
    return (
        <div
            className={cn(styles.Container, className, {
                [styles.Active]: active,
            })}
            {...props}
        >
            {
                values.slice(0, values.length - 1).map((v, i) => (
                    <Link
                        key={v}
                        className={styles.Link}
                        to={valuesLink[i]}
                    >
                        {v}
                    </Link>
                ))
            }
            <button className={styles.Link}>
                {values[values.length - 1]}
            </button>
        </div>
    )
}

export default ToggleList
