import React, { useState, useCallback } from "react";
import styles from '../../styles/components/timer/Timer.module.scss'

export default function Timer({onModalToggle}) {
    
    const handleShowModal = useCallback(e => {
        onModalToggle(e.target)
    }, [onModalToggle] )

    return (
        <div className={styles.timer}>
            <div className={styles.digit_container}>
                <span>0:00</span>
            </div>
            <div className={styles.timer_button_container}>
                <button className={styles.timer_button} onClick={handleShowModal}>Set Time</button>
                <button className={styles.timer_button}>Reset</button>
            </div>
        </div>
    )
}