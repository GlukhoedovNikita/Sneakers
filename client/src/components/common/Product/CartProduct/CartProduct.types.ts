import { DetailedHTMLProps, HTMLAttributes } from 'react'

export interface CartProductProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    className?: string,
    id: string,
    image: string,
    name: string,
    price: string,
}
