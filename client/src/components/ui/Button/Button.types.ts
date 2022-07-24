import { DetailedHTMLProps, HTMLAttributes } from 'react'

export interface ButtonProps extends DetailedHTMLProps<HTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
    className?: string,
    color?: 'green' | 'white' | 'blue',
    size: 'big' | 'medium' | 'small',
    square?: boolean,
    text: string,
}
