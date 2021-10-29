import React from 'react'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/style.module.css'
import Layout from '../components/layouts/Layout'
import Navbar from '../components/navbars/Navbar'

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
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar />
      <main id={styles.main}>
          <div className={styles.main_container}>
            Working area
            <div className={styles.timer}></div>
          </div>
          <div className={styles.background_container}>
            <Image
              className={styles.background}
              src="/bg_sunset.jpg"
              alt="Sunset Mode"
              layout="fill"
              objectFit="cover"
              objectPosition="center"
            />
          </div>


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

      </main>

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
            padding: 0;
            margin: 0;
            font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
                    Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
                    sans-serif;
            }
        
        * {
            box-sizing: border-box;
        }
      `}</style>
    </div>
  
  )
}

Home.getLayout = page => <Layout>{page}</Layout>