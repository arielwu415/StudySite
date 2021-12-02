import React, { useState, useCallback, useEffect } from "react";
import styles from '../../styles/components/timer/Timer.module.scss'
import ModalBox from "../cards/ModalBox";

export default function Timer() {
    const [time, setTime] = useState(0)
    const [timerOn, setTimerOn] = useState(false)
    const [showModal, setShowModal] = useState(false)

    const handleShowModal = useCallback(e => {
        setShowModal(e.target)
    }, [setShowModal])

    useEffect(() => {
        let interval = null;
        if (timerOn && time > 0) {
            interval = setInterval(() => {
                setTime(prevTime => prevTime - 10)
            }, 10)
        }
        else {
            clearInterval(interval)
        }

        return () => clearInterval(interval)
    }, [timerOn])

    
    // handle display timer
    var hour, minute, second
    var isOverOneHour = time >= 3600000
    var isNegative = time < 0
    var isNumber = !isNaN(time)
    

    if (isNumber && !isNegative) {
        hour = ("0" + Math.floor((time / 3600000) % 60)).slice(-2)
        minute = ("0" + Math.floor((time / 60000) % 60)).slice(-2)
        second = ("0" + Math.floor((time / 1000) % 60)).slice(-2)
    }
    else {
        hour = "00"
        minute = "00"
        second = "00"
    }


    return (
        <>
            <div className={styles.timer}>
                <div className={styles.digit_container}>
                    {isOverOneHour && <span id="countdown">{hour}:</span>}
                    <span id="countdown">{minute}:</span>
                    <span id="countdown">{second}</span>
                </div>

                <div className={styles.timer_button_container}>
                    {(!timerOn && time <= 0 || !isNumber) && (
                        <button className={styles.timer_button} onClick={handleShowModal}>Set Time</button>
                    )}
                    {(!timerOn && time <= 0 || !isNumber) && (
                        <button className={styles.timer_button} id={styles.inactive}>Reset</button>
                    )}
                    {timerOn && (
                        <button className={styles.timer_button} onClick={() => setTimerOn(false)}>Stop</button>
                    )}
                    {timerOn && (
                        <button className={styles.timer_button} id={styles.inactive}>Reset</button>
                    )}
                    {(!timerOn && time > 0) && (
                        <button className={styles.timer_button} onClick={() => setTimerOn(true)}>Start</button>
                    )}
                    {(!timerOn && time > 0) && (
                        <button className={styles.timer_button} id={styles.reset} onClick={() => setTime(0)}>Reset</button>
                    )}
                    {(timerOn && time <= 0) && (
                        setTimerOn(false)
                    )}
                </div>
            </div>
            <ModalBox showModal={showModal} setShowModal={setShowModal} time={time} setTime={setTime} />
        </>
    )
}

