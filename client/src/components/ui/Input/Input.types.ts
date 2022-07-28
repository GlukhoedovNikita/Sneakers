import { ChangeEventHandler, DetailedHTMLProps, HTMLAttributes } from 'react'

export interface InputProps extends DetailedHTMLProps<HTMLAttributes<HTMLInputElement>, HTMLInputElement> {
    className?: string,
    type?: 'text' | 'password',
    placeholder: string,
    value: string,
    onChange: ChangeEventHandler<HTMLInputElement>
}
