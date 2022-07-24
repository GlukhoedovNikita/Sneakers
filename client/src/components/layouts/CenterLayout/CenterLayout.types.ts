import { DetailedHTMLProps, HTMLAttributes, ReactNode } from 'react'

export interface CenterLayoutProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    className?: string,
    children: ReactNode,
}
