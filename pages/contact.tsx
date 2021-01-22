import Head from 'next/head'

import Menu from '../components/Header'
import Footer from '../components/Footer'

import { Container, MaxWidth } from '../styles/pages/Article'

export default function Contact() {
  return (
    <>
      <Head>
        <title>Contato</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Menu />

      <Container>
        <MaxWidth>
          <h2> Contato </h2>
          <p>
            A comunidade ChaComigo gostaria de ouvir de você!
          </p>
          <br />
          <p>
            📬 <span>Email</span>: chacomigo.org@gmail.com
          </p>
          <br />
          <p>
            🐦<span>Twitter</span>: @chacomigobr
          </p>
          <br />
          <p>
            🐛<span> Reportar vulnerabilidade</span>: https://github.com/chacomigobr/site/issues/2
          </p>
          <br />
        </MaxWidth>
      </Container>

      <Footer />
    </>
  )
}
