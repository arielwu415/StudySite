import React, { useRef, useEffect } from "react";
import styles from '../../styles/style.module.scss'
import Music from '../music/Music'
import Timer from '../timer/Timer'
import gsap from 'gsap'

export default function Main({ start, night, animationOn, setStart, setShowModal }) {

  const animation = gsap.timeline({ defaults: { ease: "power1.out" } });
  let dayVideo = useRef(null)

  useEffect(() => {

    if (animationOn) {
      animation.fromTo(dayVideo, { opacity: night ? "100%" : "0%" }, { opacity: night ? "0%" : "100", duration: 1.2 })
      console.log(animation)
    }
    
  })

  return (
    <main id={styles.main}>
      {
        !start &&
        <div className={styles.welcome}>
          <div className={styles.welcome_msg}>
            <h3><span>Welcome to</span></h3>
            <h1><span>the StudySite</span></h1>
          </div>
          <button className={styles.main_button} onClick={() => setStart(true)}><span>Get Started</span></button>

        </div>
      }
      {
        start &&
        <div className={styles.main_container}>
          <Timer onModalToggle={setShowModal} />
          <div className={styles.sound_button_container}>
            <Music id="rain" imgsrc="/rain.ico" src="/weather.mp3" volume={0.2} />
            <Music id="music" imgsrc="/music.ico" src="/lofi.mp3" alt="Music" volume={0.4} />
          </div>
        </div>}

      <div className={styles.background_container}>
        {/* If night, display night bcakground*/
          // night &&
          <video autoPlay loop muted className={styles.background} id={styles.night}>
            <source src="/night.mp4" type="video/mp4" />
          </video>
        }
        {/* If not night, display sunset bcakground*/
          // !night &&
          <video autoPlay loop muted className={styles.background} id={styles.sunset} ref={el => dayVideo = el}>
            <source src="/sunset.mp4" type="video/mp4" />
          </video>
        }

      </div>

      <div style={{
        position: "absolute",
        backgroundColor: "#3c515e",
        zIndex: "-2",
        width: "100%",
        height: "100%"
      }}>
      </div>
    </main>
  )
}