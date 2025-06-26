import { DesktopHeader } from "./DesktopHeader";
import { MobileHeader } from "./MobileHeader";
import { HeaderIcons } from "./HeaderIcons";
import type { Media } from "../hooks/useMedia";
import styles from '../assets/styles/cmps/Header.module.scss'

interface HeaderProps {
    media: Media
}

export const Header = ({ media }: HeaderProps) => {
    return (
        <header className={styles[`header--${media}`]}>
            <div className={styles[`header-left--${media}`]}>
                {media === 'mobile' ? <MobileHeader /> : <DesktopHeader />}
            </div>
            <div className={styles[`header-right--${media}`]}>
                <HeaderIcons media={media} />
            </div>
        </header>
    )
}