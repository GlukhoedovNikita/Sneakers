import { DetailedHTMLProps, HTMLAttributes } from 'react'

export interface MainProductProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    className?: string,
    id: string,
    name: string,
    price: string,
    image: string,
}
