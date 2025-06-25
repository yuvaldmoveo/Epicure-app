import { renderIcons } from "../utils/renderIcons"
import type { Media } from "../hooks/useMedia"
import styles from "../assets/styles/cmps/HeaderIcons.module.scss"

interface HeaderIconsProps {
    media: Media
}

export const HeaderIcons = ({ media }: HeaderIconsProps) => {
    return renderIcons({
        icon: ['Search', 'User', 'Bag'],
        media,
        iconBoxClass: styles[`header-icons--${media}`],
        iconClass: styles[`header-icon--${media}`],
    })
}