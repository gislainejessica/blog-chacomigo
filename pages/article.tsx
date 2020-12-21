import Head from 'next/head'

import Menu from '../components/Header'
import Footer from '../components/Footer'

import styles from '../styles/Article.module.css'

export default function Articles() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Artigos</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Menu />

      <main className={styles.main}>
        <h1> Artigos aqui</h1>
        <h1> Artigos aqui</h1>
        <h1> Artigos aqui</h1>
        <h1> Artigos aqui</h1>
        <h1> Artigos aqui</h1>
        <h1> Artigos aqui</h1>
      </main>

      <Footer />
    </div>
  )
}
