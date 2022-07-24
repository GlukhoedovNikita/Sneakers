import { DetailedHTMLProps, HTMLAttributes } from 'react'

export interface TextColorfulProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    className?: string,
    colorOne: 'green' | 'black',
    colorTwo?: 'green' | 'black',
    textColorOne: string,
    textColorTwo: string,
}
