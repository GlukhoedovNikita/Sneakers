import { DetailedHTMLProps, HTMLAttributes } from 'react'

export interface HeaderIconProps extends DetailedHTMLProps<HTMLAttributes<HTMLImageElement>, HTMLImageElement> {
    className?: string,
    image: string,
    alt: string,
}
