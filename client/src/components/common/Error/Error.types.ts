import { DetailedHTMLProps, HTMLAttributes } from 'react'

export interface ErrorProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    className?: string,
}
