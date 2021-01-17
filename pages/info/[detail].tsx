import Head from 'next/head'

import Menu from '../../components/Header'
import Footer from '../../components/Footer'

import { Container, MaxWidth } from '../../styles/pages/Article'
import { useRouter } from 'next/router'

export default function Articles() {
  const router = useRouter()
  const { category } = router.query

  return (
    <>
      <Head>
        <title>Artigos</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Menu />

      <Container>
        <MaxWidth>
          <h2> Glossário: Descontrução{category} </h2>
          <p>
            Ação de desconstruir, de desfazer a construção de alguma coisa: a desconstrução de um templo budista.
            [Por Extensão] Ato ou efeito de causar danos em algo intocável: desconstrução da boa imagem do ator.
            [Figurado] Desfazer o que está construído: desconstrução do machismo na sociedade contemporânea.
            [Filosofia] Teoria que se pauta no estudo e na interpretação de uma obra partindo da premissa de que toda linguagem é metafórica,
            sendo impossível determinar o sentido real do discurso; desconstrucionismo.
        </p>

        </MaxWidth>
      </Container>

      <Footer />
    </>
  )
}
