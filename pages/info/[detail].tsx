import Head from 'next/head'

import Menu from '../../components/Header'
import Footer from '../../components/Footer'
import Card from '../../components/Card'

import { Container, MaxWidth } from '../../styles/pages/Article'
import { useRouter } from 'next/router'

export default function Articles() {
  const router = useRouter()
  const { detail } = router.query
  const data = {
    info: [
      "Desconstrução Ação de desconstruir, de desfazer a construção de alguma coisa: a desconstrução de um templo budista. [Por Extensão] Ato ou efeito de causar danos em algo intocável: desconstrução da boa imagem do ator. [Figurado] Desfazer o que está construído: desconstrução do machismo na sociedade contemporânea. [Filosofia] Teoria que se pauta no estudo e na interpretação de uma obra partindo da premissa de que toda linguagem é metafórica,sendo impossível determinar o sentido real do discurso; desconstrucionismo.",
      "Feminismo, de desfazer a construção de alguma coisa: a desconstrução de um templo budista. [Por Extensão] Ato ou efeito de causar danos em algo intocável: desconstrução da boa imagem do ator. [Figurado] Desfazer o que está construído: desconstrução do machismo na sociedade contemporânea. [Filosofia] Teoria que se pauta no estudo e na interpretação de uma obra partindo da premissa de que toda linguagem é metafórica,sendo impossível determinar o sentido real do discurso; desconstrucionismo.",
      "Machismo, de desfazer a construção de alguma coisa: a desconstrução de um templo budista. [Por Extensão] Ato ou efeito de causar danos em algo intocável: desconstrução da boa imagem do ator. [Figurado] Desfazer o que está construído: desconstrução do machismo na sociedade contemporânea. [Filosofia] Teoria que se pauta no estudo e na interpretação de uma obra partindo da premissa de que toda linguagem é metafórica,sendo impossível determinar o sentido real do discurso; desconstrucionismo.",
      "Violência, de desfazer a construção de alguma coisa: a desconstrução de um templo budista. [Por Extensão] Ato ou efeito de causar danos em algo intocável: desconstrução da boa imagem do ator. [Figurado] Desfazer o que está construído: desconstrução do machismo na sociedade contemporânea. [Filosofia] Teoria que se pauta no estudo e na interpretação de uma obra partindo da premissa de que toda linguagem é metafórica,sendo impossível determinar o sentido real do discurso; desconstrucionismo.",
      "Revolução, de desfazer a construção de alguma coisa: a desconstrução de um templo budista. [Por Extensão] Ato ou efeito de causar danos em algo intocável: desconstrução da boa imagem do ator. [Figurado] Desfazer o que está construído: desconstrução do machismo na sociedade contemporânea. [Filosofia] Teoria que se pauta no estudo e na interpretação de uma obra partindo da premissa de que toda linguagem é metafórica,sendo impossível determinar o sentido real do discurso; desconstrucionismo.",
      "Policas Publicas, de desfazer a construção de alguma coisa: a desconstrução de um templo budista. [Por Extensão] Ato ou efeito de causar danos em algo intocável: desconstrução da boa imagem do ator. [Figurado] Desfazer o que está construído: desconstrução do machismo na sociedade contemporânea. [Filosofia] Teoria que se pauta no estudo e na interpretação de uma obra partindo da premissa de que toda linguagem é metafórica,sendo impossível determinar o sentido real do discurso; desconstrucionismo.",
      "Psicologia, de desfazer a construção de alguma coisa: a desconstrução de um templo budista. [Por Extensão] Ato ou efeito de causar danos em algo intocável: desconstrução da boa imagem do ator. [Figurado] Desfazer o que está construído: desconstrução do machismo na sociedade contemporânea. [Filosofia] Teoria que se pauta no estudo e na interpretação de uma obra partindo da premissa de que toda linguagem é metafórica,sendo impossível determinar o sentido real do discurso; desconstrucionismo.",
      "Mulher, de desfazer a construção de alguma coisa: a desconstrução de um templo budista. [Por Extensão] Ato ou efeito de causar danos em algo intocável: desconstrução da boa imagem do ator. [Figurado] Desfazer o que está construído: desconstrução do machismo na sociedade contemporânea. [Filosofia] Teoria que se pauta no estudo e na interpretação de uma obra partindo da premissa de que toda linguagem é metafórica,sendo impossível determinar o sentido real do discurso; desconstrucionismo.",
      "Auto-estima, de desfazer a construção de alguma coisa: a desconstrução de um templo budista. [Por Extensão] Ato ou efeito de causar danos em algo intocável: desconstrução da boa imagem do ator. [Figurado] Desfazer o que está construído: desconstrução do machismo na sociedade contemporânea. [Filosofia] Teoria que se pauta no estudo e na interpretação de uma obra partindo da premissa de que toda linguagem é metafórica,sendo impossível determinar o sentido real do discurso; desconstrucionismo.",
    ]
  }
  return (
    <>
      <Head>
        <title>Artigos</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Menu />

      <Container>
        <MaxWidth>
          <h2> Glossário: {detail} </h2>
          <p>
            {detail == "desconstrucao" && data.info[2]}
            {detail == "feminismo" && data.info[0]}
            {detail == "machismo" && data.info[1]}
            {detail == "violencia" && data.info[3]}
            {detail == "revolucao" && data.info[8]}
            {detail == "politicas_publicas" && data.info[4]}
            {detail == "psicologia" && data.info[5]}
            {detail == "mulher" && data.info[6]}
            {detail == "auto_estima" && data.info[7]}
          </p>
        </MaxWidth>
      </Container>

      <Footer />
    </>
  )
}
