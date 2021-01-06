import Head from 'next/head'
import Link from 'next/link'

import Menu from '../components/Header'
import Footer from '../components/Footer'

import Categories from '../components/Categories'
import Newsletter from '../components/Newsletter'
import About from '../components/About'
import Card from '../components/Card'

import {
  Container,
  Tag,
  MaxWidth,
  Main,
  Content,
  Sidebar,
  CardGruop
} from '../styles/pages/Home'

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
              <CardGruop>
                <Link href="/article">
                  <Tag> #Feminismo </Tag>
                </Link>
                {/* <div /> */}
              </CardGruop>
              <Link href="/home">
                <CardGruop>
                  <Card />
                  {/* <Card /> */}
                </CardGruop>
              </Link>
              <CardGruop>
                <Card />
                {/* <Card /> */}
              </CardGruop>

              <CardGruop>
                <Card />
                {/* <Card /> */}
              </CardGruop>

              <CardGruop>
                <Card />
                {/* <Card /> */}
              </CardGruop>
              {/*
              <CardGruop>
                <Card />
                <Card />
              </CardGruop>

              <CardGruop>
                <Card />
                <Card />
              </CardGruop>

              <CardGruop>
                <Card />
                <Card />
              </CardGruop> */}

            </Content>
          </Main>
        </MaxWidth>
      </Container>

      <Footer />
    </>
  )
}
