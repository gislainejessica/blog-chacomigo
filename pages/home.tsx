import Head from 'next/head'

// import styles from '../styles/Home.module.css'

import Nav from '../components/Header'
import Footer from '../components/Footer'

import { Container, MaxWidth, Main, Title, Text, Content, Tags, Tag, Imagem, TagText, ImageText } from '../styles/pages/Principal'

export default function Article() {
  return (
    <>
      <Head>
        <title>Aprendendo Nextjs</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Nav />

      <Container>
        <MaxWidth>
          <Main>
            <Tags>
              <Tag>
                <TagText> Feminismo </TagText>
              </Tag>
              <Tag>
                <TagText> Movimento Feminista </TagText>
              </Tag>
            </Tags>

            <Content>
              <Imagem
                alt="Picture of the blog"
                unsized
                src='/feminismo.jpg'
              />

            </Content>

            <Title>Feminismo - O que significa? </Title>

            <h4> por Gislaine Jéssica há 3 dias </h4>
            <div>
              <h4> 2min de leitura </h4>
            </div>

            <Text>
              A figura do gestor de marketing e vendas é bastante conhecida e presente nas empresas, mas o que muita gente não sabe é o que faz um gestor de marketing e vendas. Muitas vezes, nem mesmo a diretoria entende direito qual é a função deste profissional, o que acaba gerando obstáculos na hora de contratar alguém para administrar essas duas equipes.

              E isso pode se tornar um grande problema, já que a gestão de marketing e vendas é uma das funções mais estratégicas em um negócio. Por isso, é também uma posição que exige muita confiança, já que o profissional é um dos pilares do sucesso da empresa.

              Acompanhe!
            </Text>
            <Text>
              A figura do gestor de marketing e vendas é bastante conhecida e presente nas empresas, mas o que muita gente não sabe é o que faz um gestor de marketing e vendas. Muitas vezes, nem mesmo a diretoria entende direito qual é a função deste profissional, o que acaba gerando obstáculos na hora de contratar alguém para administrar essas duas equipes.

              E isso pode se tornar um grande problema, já que a gestão de marketing e vendas é uma das funções mais estratégicas em um negócio. Por isso, é também uma posição que exige muita confiança, já que o profissional é um dos pilares do sucesso da empresa.

              Acompanhe!
            </Text>
            <Text>
              A figura do gestor de marketing e vendas é bastante conhecida e presente nas empresas, mas o que muita gente não sabe é o que faz um gestor de marketing e vendas. Muitas vezes, nem mesmo a diretoria entende direito qual é a função deste profissional, o que acaba gerando obstáculos na hora de contratar alguém para administrar essas duas equipes.

              E isso pode se tornar um grande problema, já que a gestão de marketing e vendas é uma das funções mais estratégicas em um negócio. Por isso, é também uma posição que exige muita confiança, já que o profissional é um dos pilares do sucesso da empresa.

              Acompanhe!
            </Text>

          </Main>
        </MaxWidth>
      </Container>

      <Footer />
    </>
  )
}
