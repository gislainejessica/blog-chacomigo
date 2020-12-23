import Head from 'next/head'

import Menu from '../components/Header'
import Footer from '../components/Footer'

import { Container, MaxWidth } from '../styles/pages/Article'

export default function Articles() {
  return (
    <>
      <Head>
        <title>Artigos</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Menu />

      <Container>
        <MaxWidth>
          <h1> Artigos aqui</h1>
          <h1> Artigos aqui</h1>
          <h1> Artigos aqui</h1>
          <h1> Artigos aqui</h1>
          <h1> Artigos aqui</h1>

        </MaxWidth>
      </Container>

      <Footer />
    </>
  )
}
