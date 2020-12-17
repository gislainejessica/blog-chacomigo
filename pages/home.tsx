import Head from 'next/head'

import Menu from '../components/Header'
import Footer from '../components/Footer'

import { Container, Tag, MaxWidth, Main, Content, Sidebar } from '../styles/pages/Home'
import Categories from '../components/Categories'
import Newsletter from '../components/Newsletter'
import Card from '../components/Card'
import About from '../components/About'
import Link from 'next/link'

export default function Home() {
  return (
    <>
      <Head>
        <title>Chá Comigo</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Menu />
      <Container>
        <MaxWidth>
          <Main>
            <Sidebar>
              <Categories />
              <About />
              <Newsletter />
            </Sidebar>

            <Content>
              <Tag> Feminismo </Tag>
              <div />
              <Link href="article">
                <Card />
              </Link>

              <Card />
              <Card />
              <Card />
              <Card />

            </Content>
          </Main>
        </MaxWidth>
      </Container>


      <Footer />
    </>
  )
}
