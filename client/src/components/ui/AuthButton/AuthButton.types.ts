import { DetailedHTMLProps, HTMLAttributes } from 'react'

export interface AuthButtonProps extends DetailedHTMLProps<HTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
    className?: string,
    color: 'black' | 'blue',
    text: string,
}
