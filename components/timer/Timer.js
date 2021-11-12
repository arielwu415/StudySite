import React, { useState, useCallback } from "react";
import styles from '../../styles/components/timer/Timer.module.scss'

export default function Timer({ onModalToggle }) {

    const handleShowModal = useCallback(e => {
        onModalToggle(e.target)
    }, [onModalToggle])

    // const startingMinutes = 10;
    // let time = startingMinutes * 60;

    // const countdownEl = document.getElementById('countdown');

    // setInterval(updateCountdown, 1000);

    // function updateCountdown()
    // {

    //     const minutes = Math.floor(time/60);
    //     let seconds = time % 60;

    //     seconds = seconds < 10 ? '0' + seconds : seconds;

    //     countdownEl.innerHTML = '${minutes}: ${seconds}';
    //     time--;
    // }


    return (
        <div className={styles.timer}>
            <div className={styles.digit_container}>
                <span id="countdown">0:00</span>
            </div>
            <div className={styles.timer_button_container}>
                <button className={styles.timer_button} onClick={handleShowModal}>Set Time</button>
                <button className={styles.timer_button}>Reset</button>
            </div>
        </div>
    )
}

