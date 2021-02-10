import Head from 'next/head'

import Menu from '../components/Header'
import Footer from '../components/Footer'

import { Container, MaxWidth } from '../styles/pages/Article'
import { useRouter } from 'next/router'

export default function About() {
  const router = useRouter()
  return (
    <>
      <Head>
        <title>Sobre</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Menu />

      <Container>
        <MaxWidth>
          <h2> Sobre </h2>
          <p>

            A ChaComigo nasceu do desejo de concientizar as pessoas sobre violência de genero.
            Somos uma comunidade de mulheres, homens e diversos outros gêneros,
            pessoas que acreditam na necessidade de difundir ações através dos diversos
            setores da sociedade com o objetivo de enfrentar a violência de gênero.
            <br />
            <br />
            Queremos fazer parte da mudança e contribuir para uma sociedade mais consciente.

            Não fique fora dessa, você também pode fazer a diferença!

          </p>
        </MaxWidth>
      </Container>

      <Footer />
    </>
  )
}
