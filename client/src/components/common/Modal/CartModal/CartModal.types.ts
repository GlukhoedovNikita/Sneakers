import {
    HTMLAttributes,
    DetailedHTMLProps,
    Dispatch,
    SetStateAction
} from 'react'

export interface CartModalProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    className?: string,
    active: boolean,
    setActive: Dispatch<SetStateAction<boolean>>,
}
