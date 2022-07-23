import { DetailedHTMLProps, HTMLAttributes } from 'react'

export interface TextProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    className?: string,
    text: string,
    size: 'h1' | 'h2' | 'h3' | 'h4',
    color?: 'black' | 'gray' | 'green',
}
