import { DetailedHTMLProps, HTMLAttributes } from 'react'

export interface LikeProps extends DetailedHTMLProps<HTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
    className?: string,
    initialActive?: boolean,
}
