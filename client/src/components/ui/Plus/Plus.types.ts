import { DetailedHTMLProps, HTMLAttributes } from 'react'

export interface PlusProps extends DetailedHTMLProps<HTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
    className?: string,
    initialActive?: boolean,
}
