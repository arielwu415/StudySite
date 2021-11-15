import React, { useState } from "react"
import styles from '../../styles/components/cards/Modal.module.scss'
export default function ModalBox({ showModal, setShowModal, setTime, time }) {

    const [numError, setNumError] = useState(null)
    const [negativeError, setNegativeError] = useState(null)

    const getTimeInput = async (e) => {
        setShowModal(false)
        return ({ time })
    }

    const handleInput = (e) => {
        const value = e.target.value
        setTime(value * 60000)

        // Error handling
        setNumError(isNaN(value) ? "Input is not a number" : null)
        setNegativeError(value < 0 ? "Input is negative" : null)
    }



    return (
        <>
            {
                showModal &&
                <div className={styles.modal} >
                    <div className={styles.animated_div}>
                        <div className={styles.modal_container}>
                            <div className={styles.title}>
                                <span>How long do you want to be focused for?</span>
                            </div>
                            <div className={styles.input_area}>
                                <div className={styles.input_bar}>
                                    <input type="text" className={styles.input} onChange={handleInput}></input>
                                    <span>minutes</span>
                                </div>
                                <div className={styles.input_error}>
                                    <span>{numError}{negativeError}</span>
                                </div>

                            </div>
                            <button onClick={getTimeInput} disabled={ numError || negativeError}>OK</button>

                        </div>
                    </div>
                    <div className={styles.background} onClick={() => numError || negativeError ? null : setShowModal(false)}></div>
                </div>
            }

        </>
    )
}