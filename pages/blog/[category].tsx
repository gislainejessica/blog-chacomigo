import Head from 'next/head'
import Link from 'next/link'

import Menu from '../../components/Header'
import Footer from '../../components/Footer'

import Card from '../../components/Card'
import About from '../../components/About'
import Categories from '../../components/Categories'
import Newsletter from '../../components/Newsletter'

import {
  Container,
  Tag,
  MaxWidth,
  Main,
  Content,
  Sidebar,
  CardGruop,
  Picker,
  TagGroup
} from '../../styles/pages/Home'

import NewTag from '../../components/TagFind'

import { useRouter } from 'next/router'


export default function Blog() {
  const tags = ["Machismo", "Feminismo", "Deconstrução", "Violência", "Revolução", "Políticas Públicas", "Psicologia", "Mulher", "Auto-Estima"]
  const data = {
    cards: [
      {
        id: '0',
        title: "Existe vida após a violência",
        content: "Conteudo inicial mostrada para chamar atenção para a pessoa Conteudo inicial mostrada para chamar atenção para a pessoa...",
        tags: [{
          content: "Machismo",
          color: "#429911"
        },
        {
          content: "Construção",
          color: "#3d3d3d"
        }]
      },
      {
        id: '1',
        title: "O que o Feminismo afinal?",
        content: "O que é feminismo?, o 12.º número da colecção “Cadernos de Ciências Sociais” (direcção de Carlos Serra), \
        convida os/as leitores/as a partilharem ...",
        tags: [{
          content: "Feminismo",
          color: "#7d47d4"
        },
        {
          content: "Contrução",
          color: "#3d3d3d"
        }]
      },
      {
        id: '2',
        title: "Como saber que o limite já passou?",
        content: "Conteudo inicial mostrada para chamar atenção para a pessoa Conteudo inicial mostrada para chamar atenção para a pessoa...",
        tags: [{
          content: "Power",
          color: "#ff5474"
        },
        {
          content: "Feminismo",
          color: "#7d47d4"
        }]
      },
      {
        id: '3',
        title: "Nada é para sempre, bom quanto dura",
        content: "Conteudo inicial mostrada para chamar atenção para a pessoa Conteudo inicial mostrada para chamar atenção para a pessoa...",
        tags: [
          {
            content: "Revolução",
            color: "#ff7474"
          },
          {
            content: "Psicologia",
            color: "#2a2a33"
          }
        ]
      },
    ],
  }
  const router = useRouter()
  const { category } = router.query

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
              <TagGroup>
                <NewTag category={category}>
                  #{category}
                </NewTag>
                <Picker>
                  <p> {category} </p>
                  <p>  </p>
                </Picker>

              </TagGroup>



              {data.cards.map(card => (
                <Link key={card.title} href={`/home/${card.id}`}>
                  <CardGruop>
                    <Card key={card.title} title={card.title} content={card.content} tags={card.tags} />
                  </CardGruop>
                </Link>
              ))}
            </Content>

          </Main>
        </MaxWidth>
      </Container>

      <Footer />
    </>
  )
}
