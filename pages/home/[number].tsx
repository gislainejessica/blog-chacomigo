import Head from 'next/head'
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa';
import { FcLike, FcBookmark, FcShare, FcCollaboration, FcHighPriority } from 'react-icons/fc';

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
  Author,
  PostContent,
  Comment
} from '../../styles/pages/Principal'

import { useRouter } from 'next/router'

export default function Home() {

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
        content: "O que é feminismo?, o 12.º número da colecção “Cadernos de Ciências Sociais” (direcção de Carlos Serra), \
        convida os/as leitores/as a partilharem “a construção teórica do feminismo” (p. 11) através da leitura dos textos de \
        Patrícia  Gomes (Guiné-Bissau), Debora Diniz (Brasil), Maria Helena Santos (Portugal) e Rosália Diogo (Brasil), \
        cada um dos quais abordando a problemática da igualdade de género a partir de diferentes realidades socioculturais e políticas. \
        Às autoras foi colocado o desafio de reflectirem sobre o feminismo (ou os feminismos) tendo em conta que este não é um movimento uno\
         mas múltiplo na sua génese e nos seus objectivos.\
        Esta é a crítica que perpassa os quatro artigos: há outros feminismos além daquele que surgiu no mundo ocidental no século XVIII, \
        que trilharam um outro caminho apesar de terem o mesmo fim – a promoção da igualdade de direitos entre homens e mulheres.O que é feminismo?, o 12.º número da colecção “Cadernos de Ciências Sociais” (direcção de Carlos Serra), \
        convida os/as leitores/as a partilharem “a construção teórica do feminismo” (p. 11) através da leitura dos textos de \
        Patrícia  Gomes (Guiné-Bissau), Debora Diniz (Brasil), Maria Helena Santos (Portugal) e Rosália Diogo (Brasil), \
        cada um dos quais abordando a problemática da igualdade de género a partir de diferentes realidades socioculturais e políticas. \
        Às autoras foi colocado o desafio de reflectirem sobre o feminismo (ou os feminismos) tendo em conta que este não é um movimento uno\
         mas múltiplo na sua génese e nos seus objectivos.\
        Esta é a crítica que perpassa os quatro artigos: há outros feminismos além daquele que surgiu no mundo ocidental no século XVIII, \
        que trilharam um outro caminho apesar de terem o mesmo fim – a promoção da igualdade de direitos entre homens e mulheres.O que é feminismo?, o 12.º número da colecção “Cadernos de Ciências Sociais” (direcção de Carlos Serra), \
        convida os/as leitores/as a partilharem “a construção teórica do feminismo” (p. 11) através da leitura dos textos de \
        Patrícia  Gomes (Guiné-Bissau), Debora Diniz (Brasil), Maria Helena Santos (Portugal) e Rosália Diogo (Brasil), \
        cada um dos quais abordando a problemática da igualdade de género a partir de diferentes realidades socioculturais e políticas. \
        Às autoras foi colocado o desafio de reflectirem sobre o feminismo (ou os feminismos) tendo em conta que este não é um movimento uno\
         mas múltiplo na sua génese e nos seus objectivos.\
        Esta é a crítica que perpassa os quatro artigos: há outros feminismos além daquele que surgiu no mundo ocidental no século XVIII, \
        que trilharam um outro caminho apesar de terem o mesmo fim – a promoção da igualdade de direitos entre homens e mulheres.",
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

  const myCard = data.cards.find(card => card.id == number) || {
    id: '2',
    author: "Jéssica Almeida",
    title: "Como saber que o limite já passou?",
    content: "O que é feminismo?, o 12.º número da colecção “Cadernos de Ciências Sociais” (direcção de Carlos Serra), \
    convida os/as leitores/as a partilharem “a construção teórica do feminismo” (p. 11) através da leitura dos textos de \
    Patrícia  Gomes (Guiné-Bissau), Debora Diniz (Brasil), Maria Helena Santos (Portugal) e Rosália Diogo (Brasil), \
    cada um dos quais abordando a problemática da igualdade de género a partir de diferentes realidades socioculturais e políticas. \
    Às autoras foi colocado o desafio de reflectirem sobre o feminismo (ou os feminismos) tendo em conta que este não é um movimento uno\
     mas múltiplo na sua génese e nos seus objectivos.\
    Esta é a crítica que perpassa os quatro artigos: há outros feminismos além daquele que surgiu no mundo ocidental no século XVIII, \
    que trilharam um outro caminho apesar de terem o mesmo fim – a promoção da igualdade de direitos entre homens e mulheres.",
    tags: [{
      content: "Power",
      color: "#ff5474"
    },
    {
      content: "Feminismo",
      color: "#7d47d4"
    }]
  }

  return (
    <>
      <Head>
        <title>Aprendendo Nextjs</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Nav />

      <Container>
        <Comment>
          {/* <p> Curtir </p> */}
          <div>
            <FcLike size={24} />
            <span> 3 </span>
          </div>
          {/* <p> Comentar </p> */}
          {/* <div>
            <FcCollaboration size={24} />
            <span> 1 </span>
          </div> */}
          {/* <p> Compartilhar </p> */}
          <div>
            <FcShare size={24} />
            <span> 0 </span>
          </div>
          {/* <p> Arquivar </p> */}
          <div>
            <FcBookmark size={24} />
            <span> 13 </span>
          </div>
          {/* <p> Denunciar </p> */}
          {/* <div>
            <FcHighPriority size={24} />
            <span> 0 </span>
          </div> */}
        </Comment>

        <MaxWidth>

          <Main>

            <Tags>
              {myCard.tags.map(tag => (
                <Tag key={tag.content} color={tag.color}>
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

            <PostContent>
              <Title> {myCard.title} </Title>

              <Author> por {myCard.author} há 3 dias </Author>

              <TimeText> 2min de leitura </TimeText>

              <Text>
                {myCard.content}
              </Text>

            </PostContent>
          </Main>
        </MaxWidth>
      </Container>

      <Footer />
    </>
  )
}
