import { DetailedHTMLProps, HTMLAttributes, ReactNode } from 'react'

export interface MainLayoutProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    className?: string,
    children: ReactNode,
}
