import {
    FC,
    MouseEvent,
    useEffect,
    useState,
} from 'react'
import cn from 'classnames'

import { useTypedSelector, useTypedDispatch } from '@hooks/index'
import { setActiveCart } from '@store/slices/modal/modal.slice'
import { fetchCart, updateOrder } from '@store/slices/productUser/product.user.actions'
import modalSelector from '@store/slices/modal/modal.selector'
import productUserSelector from '@store/slices/productUser/product.user.selector'

import { Button, HeaderIcon, Text } from '@components/ui'
import { Error, CartProduct } from '@components/common'

import { CartModalProps } from './CartModal.types'
import calcPriceCart from '@utils/calcPriceCart'

import styles from './CartModal.module.scss'

import { cartEmpty, orderSuccess, closeImg } from '@assets/index'

const CartModal: FC<CartModalProps> = ({
    className,
    ...props
}) => {
    const dispatch = useTypedDispatch()
    const { activeCart } = useTypedSelector(modalSelector)
    const { cart, error, loading } = useTypedSelector(productUserSelector)

    const [isOrder, setIsOrder] = useState<boolean>(false)
    const [price, setPrice] = useState<number>(0)
    const [tax, setTax] = useState<number>(0)

    useEffect(() => {
        document.body.style.overflow = activeCart ? 'hidden' : 'auto'
    }, [activeCart])

    useEffect(() => {
        !cart?.length && dispatch(fetchCart())
    }, [])

    useEffect(() => {
        setPrice(calcPriceCart(cart).price)
        setTax(calcPriceCart(cart).tax)
    }, [cart])

    const activeHandler = (e: MouseEvent<HTMLDivElement>) => {
        if (e.target === e.currentTarget) dispatch(setActiveCart())
    }

    const closeHandler = () => dispatch(setActiveCart())
    const orderHandler = () => {
        setIsOrder(true)
        dispatch(updateOrder(cart))
    }

    return (
        <div
            className={cn(styles.Container, className, {
                [styles.Active]: activeCart,
            })}
            onClick={(e) => activeHandler(e)}
            {...props}
        >
            <div className={styles.Content}>
                <div className={styles.BlockTitle}>
                    <Text text="Cart" size="h2" />
                </div>
                <HeaderIcon
                    onClick={(e) => activeHandler(e)}
                    className={styles.BtnClose}
                    image={closeImg}
                    alt="Close Icon"
                />
                {
                    !!cart?.length &&
                    <div className={styles.BlockContent}>
                        <div className={styles.BlockProducts}>
                            {
                                cart.map((product) => <CartProduct
                                    key={product._id}
                                    id={product._id}
                                    name={product.name}
                                    image={product.image}
                                    price={product.price}
                                />)
                            }
                        </div>
                        <div className={styles.BlockPrice}>
                            <Text text="Total:" size="h4" />
                            <Text text={`${price} rub`} size="h4" bold={600} />
                            <Text text="Tax 5%:" size="h4" />
                            <Text className={styles.PriceTax} text={`${tax} rub`} size="h4" bold={600} />
                        </div>
                        <div className={styles.BlockBtn}>
                            <Button onClick={orderHandler} text="Place an order" size="medium" />
                        </div>
                    </div>
                }
                {
                    !cart?.length && isOrder && !error &&
                    <div className={styles.BlockSuccess}>
                        <img src={orderSuccess} alt="Cart Empty" />
                        <Text text="Order is processed" size="h2" />
                        <Text text="Your order will be delivered by courier soon" size="h4" color="gray" />
                        <Button onClick={closeHandler} text="Go back" size="medium" />
                    </div>
                }
                {
                    !cart?.length && !error && !loading && !isOrder &&
                    <div className={styles.BlockEmpty}>
                        <img src={cartEmpty} alt="Cart Empty" />
                        <Text text="Cart is empty" size="h2" />
                        <Text text="Add at least one pair of sneakers to make an order." size="h4" color="gray" />
                        <Button onClick={closeHandler} text="Go back" size="medium" />
                    </div>
                }
                {
                    error &&
                    <div className={styles.BlockError}><Error /></div>
                }
            </div>
        </div>
    )
}

export default CartModal
