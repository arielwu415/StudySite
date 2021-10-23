import React from 'react'
import Head from 'next/head'
import styles from '../styles/style.module.css'
import Layout from '../components/layouts/Layout'
import Navbar from '../components/navbars/Navbar'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar/>
      <main id={styles.main}>
        <h1 className={styles.title}>
          Welcome to <a id={styles.a} href="https://nextjs.org">JavaScript Capstone Project!</a>
        </h1>

        <p id={styles.p} className={styles.description}>
          Get started by editing <code id={styles.code}>pages/index.js</code>
        </p>

        <div className={styles.grid}>
          <a id={styles.a} href="https://nextjs.org/docs" className={styles.card}>
            <h3 id={styles.h3}>Documentation &rarr;</h3>
            <p id={styles.p}>Find in-depth information about Next.js features and API.</p>
          </a>

          <a id={styles.a} href="https://nextjs.org/learn" className={styles.card}>
            <h3 id={styles.h3}>Learn &rarr;</h3>
            <p id={styles.p}>Learn about Next.js in an interactive course with quizzes!</p>
          </a>

          <a
            id={styles.a}
            href="https://github.com/vercel/next.js/tree/master/examples"
            className={styles.card}
          >
            <h3 id={styles.h3}>Examples &rarr;</h3>
            <p id={styles.p}>Discover and deploy boilerplate example Next.js projects.</p>
          </a>

          <a
            id={styles.a}
            href="https://vercel.com/import?filter=next.js&utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            className={styles.card}
          >
            <h3 id={styles.h3}>Deploy &rarr;</h3>
            <p id={styles.p}>
              Instantly deploy your Next.js site to a public URL with Vercel.
            </p>
          </a>
        </div>
      </main>

      <footer id={styles.footer}>
        <a
          id={styles.a}
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <img src="/vercel.svg" alt="Vercel" className={styles.logo} />
        </a>
      </footer>
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