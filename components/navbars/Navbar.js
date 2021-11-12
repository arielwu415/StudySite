import React, { useCallback, useRef } from 'react'
import styles from '../../styles/components/navbars/Navbar.module.scss'
import { ToggleSlider } from "react-toggle-slider"

export default function Navbar({ onNightToggle, transitionEffect }) {

    const handleToggle = useCallback(e => {
        onNightToggle(e)
    }, [onNightToggle])
    

    return (
        <header className={styles.header}>
            <nav className={styles.nav_elements}>
                <div className={styles.left_elements}>
                    <span>StudySite</span>
                </div>
                <div className={styles.right_elements}>
                    <ToggleSlider
                        barBackgroundColorActive="#2A3C46"
                        onToggle={handleToggle}
                    />
                </div>
            </nav>
        </header>
    )
}