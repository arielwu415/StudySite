import React, { useState, useRef, useEffect } from 'react'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/style.module.scss'
import Layout from '../components/layouts/Layout'
import Navbar from '../components/navbars/Navbar'
import gsap from "gsap";

export default function Home() {
  
  function playRain() {
    var myMusic = document.getElementById("rain");
    //myMusic.volume = 0.2;
    myMusic.loop = true;
    return myMusic.paused ? myMusic.play() : myMusic.pause();
  };

  function playForest() {
    var myMusic = document.getElementById("forest")
    myMusic.loop = true;
    return myMusic.paused ? myMusic.play() : myMusic.pause()
  }

  const [night, setNight] = useState(false)
  const [start, setStart] = useState(false)


  // Landing Slider Animation
  const tl = gsap.timeline({ defaults: { ease: "power1.out" } });
  let firstLine = useRef(null)
  let secondtLine = useRef(null)
  let thirdLine = useRef(null)
  let slider1 = useRef(null)
  let slider2 = useRef(null)
  let intro = useRef(null)

  useEffect(() => {
    tl.add('start')
      .to(firstLine, { y: "0%", duration: 1, delay: 0.25 }, 'start')
      .to(secondtLine, { y: "0%", duration: 1, delay: 0.5 }, 'start')
      .to(thirdLine, { y: "0%", duration: 1, delay: 0.75 }, 'start')
      .to(slider1, { y: "-100%", duration: 2.3, delay: 2.75 }, 'start')
      .to(slider2, { y: "-100%", duration: 2.2, delay: 2.75 }, 'start')
      .to(intro, { y: "-100%", duration: 1.25, delay: 3.25 }, 'start')
  })

  return (
    <div className={styles.container}>
      <Head>
        <title>StudySite</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar onNightToggle={setNight} />
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
            <div className={styles.timer}>
              <span className={styles.digits}>0:00</span>
            </div>
            <div className={styles.timer_button_container}>
              <button className={styles.timer_button}>Start</button>
              <button className={styles.timer_button}>Reset</button>
            </div>
            <div className={styles.sound_button_container}>
              <button className={styles.sound_button}>Rain</button>
              <button className={styles.sound_button}>Music</button>
            </div>
          </div> }


        {/*<p id={styles.p} className={styles.description}>*/}
        {/*  Get started by editing <code id={styles.code}>pages/index.js</code>*/}
        {/*</p>*/}

        {/*<div id = "image">*/}
        {/*  <img src="/rain.ico" id= {styles.rain} alt="Rain" onClick = {playRain} type="button"/>*/}
        {/*  <img src="/forest.ico" id = {styles.forest} alt="Forest" onClick = {playForest} type="button"/>*/}
        {/*</div>*/}
        {/*<audio id = "rain" src = "/weather.mp3" ></audio>*/}

        
        {/*<audio id = "forest" src = "/forest.mp3" ></audio>*/}

        {/*<div className={styles.grid}>*/}
        {/*  <a id={styles.a} href="https://nextjs.org/docs" className={styles.card}>*/}
        {/*    <h3 id={styles.h3}>Documentation &rarr;</h3>*/}
        {/*    <p id={styles.p}>Find in-depth information about Next.js features and API.</p>*/}
        {/*  </a>*/}

        {/*  <a id={styles.a} href="https://nextjs.org/learn" className={styles.card}>*/}
        {/*    <h3 id={styles.h3}>Learn &rarr;</h3>*/}
        {/*    <p id={styles.p}>Learn about Next.js in an interactive course with quizzes!</p>*/}
        {/*  </a>*/}

        {/*  <a*/}
        {/*    id={styles.a}*/}
        {/*    href="https://github.com/vercel/next.js/tree/master/examples"*/}
        {/*    className={styles.card}*/}
        {/*  >*/}
        {/*    <h3 id={styles.h3}>Examples &rarr;</h3>*/}
        {/*    <p id={styles.p}>Discover and deploy boilerplate example Next.js projects.</p>*/}
        {/*  </a>*/}

        {/*  <a*/}
        {/*    id={styles.a}*/}
        {/*    href="https://vercel.com/import?filter=next.js&utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"*/}
        {/*    className={styles.card}*/}
        {/*  >*/}
        {/*    <h3 id={styles.h3}>Deploy &rarr;</h3>*/}
        {/*    <p id={styles.p}>*/}
        {/*      Instantly deploy your Next.js site to a public URL with Vercel.*/}
        {/*    </p>*/}
        {/*  </a>*/}
        {/*</div>*/}
        <div className={styles.background_container}>
          {/* If not night, display sunset bcakground*/
            !night &&
            <video autoPlay loop muted className={styles.background}>
              <source src="/sunset.mp4" type="video/mp4" />
            </video>
          }
          {/* If night, display night bcakground*/
            night &&
            <video autoPlay loop muted className={styles.background}>
              <source src="/night.mp4" type="video/mp4" />
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

      {/*Landing Slider*/}
      <div className={styles.intro} ref={el => intro = el}>
        <div className={styles.intro_text}  >
          <h1 className={styles.hide}>
            <span className={styles.text} ref={el => firstLine = el}>Stay Organized.</span>
          </h1>
          <h1 className={styles.hide}>
            <span className={styles.text} ref={el => secondtLine = el}>Stay Motivated.</span>
          </h1>
          <h1 className={styles.hide}>
            <span className={styles.text} ref={el => thirdLine = el}>Stay Focused.</span>
          </h1>
        </div>
      </div>
      <div className={styles.slider1} ref={el => slider1 = el}></div>
      <div className={styles.slider2} ref={el => slider2 = el}></div>

      {/*<footer id={styles.footer}>
        <a
          id={styles.a}
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <img src="/vercel.svg" alt="Vercel" className={styles.logo} />
        </a>
      </footer>*/}

      <style jsx global>{`
        html,
        body {
            font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
                    Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
                    sans-serif;
            }
        
        * {
            padding: 0;
            margin: 0;
            box-sizing: border-box;
        }
      `}</style>
    </div>
  
  )
}

Home.getLayout = page => <Layout>{page}</Layout>