import { DetailedHTMLProps, HTMLAttributes } from 'react'

export interface EmojiProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    className?: string,
    emoji: string,
    size?: 'small' | 'medium' | 'big',
}
