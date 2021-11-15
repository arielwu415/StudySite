import {useRef, useEffect } from 'react'
import gsap from "gsap";
import styles from '../../styles/style.module.scss'

export default function Intro() {
  // Landing Slider Animation
  const tl = gsap.timeline({ defaults: { ease: "power1.out" } });
  let firstLine = useRef(null)
  let secondLine = useRef(null)
  let thirdLine = useRef(null)
  let slider1 = useRef(null)
  let slider2 = useRef(null)
  let intro = useRef(null)

  useEffect(() => {
    tl.add('start')
      .to(firstLine, { y: "0%", duration: 1, delay: 0.25 }, 'start')
      .to(secondLine, { y: "0%", duration: 1, delay: 0.5 }, 'start')
      .to(thirdLine, { y: "0%", duration: 1, delay: 0.75 }, 'start')
      .to(slider1, { y: "-100%", duration: 2.3, delay: 2.75 }, 'start')
      .to(slider2, { y: "-100%", duration: 2.2, delay: 2.75 }, 'start')
      .to(intro, { y: "-100%", duration: 1.25, delay: 3.25 }, 'start')
  })
    return (
     <>
      <div className={styles.intro} ref={el => intro = el}>
      <div className={styles.intro_text}  >
        <h1 className={styles.hide}>
          <span className={styles.text} ref={el => firstLine = el}>Stay Organized.</span>
        </h1>
        <h1 className={styles.hide}>
          <span className={styles.text} ref={el => secondLine = el}>Stay Motivated.</span>
        </h1>
        <h1 className={styles.hide}>
          <span className={styles.text} ref={el => thirdLine = el}>Stay Focused.</span>
         </h1>
        </div>
        </div>
        <div className={styles.slider1} ref={el => slider1 = el}></div>
        <div className={styles.slider2} ref={el => slider2 = el}></div>
    </>

    )
}