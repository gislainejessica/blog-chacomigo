import Head from 'next/head'

import Menu from '../components/Header'
import Footer from '../components/Footer'

import styles from '../styles/Article.module.css'

import { Container } from '../styles/pages/Home'
import Categories from '../components/Categories'
import Newsletter from '../components/Newsletter'
import Card from '../components/Card'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Chá Comigo</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Menu />
      <Container />
      <main className={styles.main}>
        <div className={styles.sidebar}>
          <Categories />

          <h1> About us </h1>
          <h2>
            A ChaComigo nasceu
            de uma ideia na Faculdade
            de modo a contribuir
            na redução no numero
            de vitimas de violência
            de genero
          </h2>
          <Newsletter />

        </div>

        <div className={styles.content}>
          {/* <button> Femenismo </button> */}
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
      </main>

      <Footer />
    </div>
  )
}
