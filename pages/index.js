import Head from 'next/head'
import Main from '../components/main/Main'
import Intro from '../components/intro/Intro'
import Layout from '../components/layouts/Layout'
import styles from '../styles/style.module.scss'
import Navbar from '../components/navbars/Navbar'
import GlobalStlye from '../components/pageStyles/GlobalStyle'
import PageStyle from '../components/pageStyles/PageStyle'

import { useState } from 'react'


export default function Home() {
  const [night, setNight] = useState(false)
  const [start, setStart] = useState(false)
  const [animationOn, setAnimationOn] = useState(false)
  
  return (
    <div className={styles.container}>
      <GlobalStlye />
      <PageStyle />
      <Head>
        <title>StudySite</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Intro />
      <Navbar onNightToggle={setNight} setAnimationOn={setAnimationOn}/>
      <Main start={start} night={night} animationOn={animationOn} setStart={setStart}/>
    </div>
  )
}

Home.getLayout = page => <Layout>{page}</Layout>