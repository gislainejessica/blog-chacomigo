import Head from 'next/head'

import Menu from '../components/Header'
import Footer from '../components/Footer'

import styles from '../styles/Article.module.css'

import { Container, Tag } from '../styles/pages/Home'
import Categories from '../components/Categories'
import Newsletter from '../components/Newsletter'
import Card from '../components/Card'
import About from '../components/About'
import Link from 'next/link'

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
          <About />
          <Newsletter />
        </div>

        <div className={styles.content}>
          <Tag> Feminismo </Tag>
          <div />
          <Link href="article">
            <Card />
          </Link>

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
