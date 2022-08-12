import { FC, memo } from 'react'
import { Link } from 'react-router-dom'
import cn from 'classnames'

import { useTypedDispatch } from '@hooks/index'
import { authLogout } from '@store/slices/auth/auth.actions'

import { ToggleListProps } from './ToggleList.types'

import styles from './ToggleList.module.scss'

const ToggleList: FC<ToggleListProps> = ({
    className,
    values,
    valuesLink,
    active,
    ...props
}) => {
    const dispatch = useTypedDispatch()

    const logoutHandler = () => dispatch(authLogout())

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
            <button onClick={logoutHandler} className={styles.Link}>
                {values[values.length - 1]}
            </button>
        </div>
    )
}

export default memo(ToggleList)
