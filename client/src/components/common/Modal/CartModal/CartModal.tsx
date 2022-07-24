import {
    FC,
    MouseEvent,
    useEffect,
} from 'react'
import cn from 'classnames'

import Text from '@components/ui/Text/Text'
import Button from '@components/ui/Button/Button'
import CartProduct from '@components/common/Product/CartProduct/CartProduct'

import { CartModalProps } from './CartModal.types'

import styles from './CartModal.module.scss'

// import cartEmpty from '@assets/img/cart-empty.jpg'
// import orderSuccess from '@assets/img/order-success.jpg'

const CartModal: FC<CartModalProps> = ({
    className,
    active,
    setActive,
    ...props
}) => {
    useEffect(() => {
        document.body.style.overflow = active ? 'hidden' : 'auto'
    }, [active])

    const activeHandler = (e: MouseEvent<HTMLDivElement>) => {
        if (e.target === e.currentTarget) setActive(!active)
    }
    // const closeHandler = () => setActive(false)

    return (
        <div
            className={cn(styles.Container, className, {
                [styles.Active]: active,
            })}
            onClick={(e) => activeHandler(e)}
            {...props}
        >
            <div className={styles.Content}>
                <div className={styles.BlockTitle}>
                    <Text text="Cart" size="h2" />
                </div>
                <div className={styles.BlockContent}>
                    <div className={styles.BlockProducts}>
                        {
                            Array(15).fill(0).map((_, i) => <CartProduct key={i} />)
                        }
                    </div>
                    <div className={styles.BlockPrice}>
                        <Text text="Total:" size="h4" />
                        <Text text="12000 rub" size="h4" bold={600} />
                        <Text text="Tax 5%:" size="h4" />
                        <Text className={styles.PriceTax} text="1200 rub" size="h4" bold={600} />
                    </div>
                    <div className={styles.BlockBtn}>
                        <Button text="Place an order" size="medium" />
                    </div>
                </div>
                {/* <div className={styles.BlockEmpty}>
                    <img src={cartEmpty} alt="Cart Empty" />
                    <Text text="Cart is empty" size="h2" />
                    <Text text="Add at least one pair of sneakers to make an order." size="h4" color="gray" />
                    <Button onClick={closeHandler} text="Go back" size="medium" />
                </div> */}
                {/* <div className={styles.BlockSuccess}>
                    <img src={orderSuccess} alt="Cart Empty" />
                    <Text text="Order is processed" size="h2" />
                    <Text text="Your order will be delivered by courier soon" size="h4" color="gray" />
                    <Button onClick={closeHandler} text="Go back" size="medium" />
                </div> */}
            </div>
        </div>
    )
}

export default CartModal
