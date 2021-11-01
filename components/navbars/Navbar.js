import React from 'react'
import styles from '../../styles/components/navbars/Navbar.module.css'
import { ToggleSlider }  from "react-toggle-slider";

export default function Navbar() {
    return (
        <header className={styles.header}>
            <nav className = {styles.nav_elements}>
                <div className = {styles.left_elements}>
                    <span>StudySite</span>
                </div>
                <div className = {styles.right_elements}>
                    <ToggleSlider 
                        barBackgroundColorActive="#2A3C46"
                    />
                </div>
            </nav>
        </header>
    )
}