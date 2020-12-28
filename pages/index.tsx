import Head from 'next/head'

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
                <Tag> #Feminismo </Tag>
                {/* <div /> */}
              </CardGruop>

              <CardGruop>
                <Card />
                <Card />
              </CardGruop>

              <CardGruop>
                <Card />
                <Card />
              </CardGruop>
              {/*
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
