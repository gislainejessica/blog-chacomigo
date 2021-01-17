import Head from 'next/head'

import Nav from '../../components/Header'
import Footer from '../../components/Footer'

import {
  Container,
  MaxWidth,
  Main,
  Title,
  Text,
  Content,
  Tags,
  Tag,
  Imagem,
  TagText,
  TimeText,
  Author
} from '../../styles/pages/Principal'

import bigTag from '../../components/Tag'

import { useRouter } from 'next/router'

export default function Article() {

  const data = {
    cards: [
      {
        id: '0',
        author: "Gislaine Almeida",
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
        author: "Gislaine Tiburcio",
        title: "O que o Feminismo afinal?",
        content: "Conteudo inicial mostrada para chamar atenção para a pessoa Conteudo inicial mostrada para chamar atenção para a pessoa  No documento, ela criticava a Declaração da Revolução, pois era somente aplicada aos homens. Além disso, alertava para a autoridade masculina e a importância das mulheres e da igualdade de direitos...",
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
        author: "Jéssica Almeida",
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
        author: "Gislaine Jéssica",
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
  const { number } = router.query
  // const cards = data.cards
  // const myCard = data.cards.find(card => {
  //   const { number } = router.query
  //   return card.id == number
  // })

  const myCard = data.cards.find(card => card.id == number) || {
    id: '2',
    author: "Jéssica Almeida",
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
  }
  // console.log(data.cards.find(card => card.id === 1))

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
              {myCard.tags.map(tag => (
                <Tag color={tag.color}>
                  <TagText>{tag.content}</TagText>
                </Tag>
              ))}
            </Tags>

            <Content>
              <Imagem
                alt="Picture of the blog"
                unsized
                src='/feminismo.jpg'
              />
            </Content>

            <Title> {myCard.title} </Title>

            <Author> por Gislaine Jéssica há 3 dias </Author>

            <TimeText> 2min de leitura </TimeText>


            <Text>
              {myCard.content}
            </Text>

            {/* <Text>
              Na Revolução Francesa (1789) a “Declaração dos Direitos do Homem e do Cidadão”, escrito no ano da Revolução,
              foi combatida pela “Declaração dos Direitos da Mulher e da Cidadã”, escrito pela feminista
              francesa Olympe de Gouges (1748-1793) em 1791.
            </Text> */}

            {/* <br />
            <Text>
              No documento, ela criticava a Declaração da Revolução, pois era somente aplicada aos homens. Além disso,
              alertava para a autoridade masculina e a importância das mulheres e da igualdade de direitos.
            </Text>
            <br />
            <Text>
              Por esse motivo, a revolucionária foi executada em Paris, dia 3 de novembro de 1793.
              No entanto, sua morte, considerada um marco do feminismo no mundo, fez surgir diversos movimentos feministas posteriores.
            </Text>
            <br />
            <Text>
              Entretanto, foi a partir da Revolução Industrial no século XIX, que esse panorama muda de maneira substancial.
              As mulheres já começam a trabalhar nas fábricas, fazendo parte da força econômica do país.
            </Text>
            <br />
            <Text>
              Assim, aos poucos, os movimentos feministas espalhados pelo mundo foram tomando corpo e cada vez mais lutando
              e conquistando diversos direitos reivindicados pelas mulheres (direito à educação, voto, contrato, propriedade,
              divórcio, igualdade de salários, aborto, etc.).
            </Text>
            <br />
            <Text>
              Nas culturas ocidentais, o movimento feminista passou a adquirir maior visibilidade a partir do século XX.
            </Text>
            <br />
            <Text>
              Em épocas mais distantes seria impensável ter uma presidente mulher governando o país, ou mesmo,
              figuras femininas atuando e se consagrando em diversos campos: culturas, artes, economia, política, etc.
            </Text> */}

          </Main>
        </MaxWidth>
      </Container>

      <Footer />
    </>
  )
}
