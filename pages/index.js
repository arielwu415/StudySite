import React from 'react'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/style.module.scss'
import Layout from '../components/layouts/Layout'
import Navbar from '../components/navbars/Navbar'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar />
      <main id={styles.main}>
          <div className={styles.main_container}>
            <div className={styles.timer}>
              <span className={styles.digits}>1:45</span>
            </div>
            <div className={styles.timer_button_container}>
              <button className={styles.timer_button}><span>Start</span></button>
              <button className={styles.timer_button}><span>Reset</span></button>
            </div>
            <div className={styles.sound_button_container}>
              <button className={styles.sound_button}>Rain</button>
              <button className={styles.sound_button}>Music</button>
            </div>
            
            
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