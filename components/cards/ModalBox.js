import React from "react"
import styles from '../../styles/components/cards/Modal.module.scss'
export default function ModalBox({ showModal, setShowModal, setTime, time}) {
   
    const getTimeInput = async (e) => {
        setShowModal(false)
        return ({time})
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
                                <input type="text" className={styles.input} onChange={e => setTime(e.target.value * 60000)}></input>
                                <span>minutes</span>
                            </div>
                            <button onClick={getTimeInput}>OK</button>

                        </div>
                    </div>
                    <div className={styles.background} onClick={() => setShowModal(false)}></div>
                </div>
            }

        </>
    )
}