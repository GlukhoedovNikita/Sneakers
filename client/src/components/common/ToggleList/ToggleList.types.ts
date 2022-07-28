import { DetailedHTMLProps, HTMLAttributes } from 'react'

export interface ToggleListProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    className?: string,
    values: ['Home', 'Favourite', 'Order', 'Logout'],
    valuesLink: ['/', '/favourite', '/order'],
    active: boolean,
}
