import React from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'

import { Container, Header, Text, Content } from './styles'

const Categories: React.FC = () => {
  const router = useRouter()
  const { category } = router.query


  const [selected, setSelected] = React.useState(false)
  console.log(category.includes("desconstrucao"))
  return (
    <Container >
      <Header>
        <h3>Categorias </h3>
      </Header>
      <Content>
        <Link href="/blog/desconstrucao">
          <Text selected={category.includes("desconstrucao") ? true : false}>
            #Desconstrução
          </Text>
        </Link>
        <Link href="/blog/violencia">
          <Text selected={category.includes("violencia") ? true : false}>
            #Violência
          </Text>
        </Link>
        <Link href="/blog/machismo">
          <Text selected={category.includes("machismo") ? true : false} >
            #Machismo
          </Text>
        </Link>
        <Link href="/blog/revolucao">
          <Text selected={category.includes("revolucao") ? true : false}>
            #Revolução
          </Text>
        </Link>
        <Link href="/blog/politicas_publicas">
          <Text selected={category.includes("politicas_publicas") ? true : false}>
            #Políticas Públicas
          </Text>
        </Link>
        <Link href="/blog/psicologia">
          <Text selected={category.includes("psicologia") ? true : false}>
            #Psicologia
          </Text>
        </Link>
        <Link href="/blog/mulher">
          <Text selected={category.includes("mulher") ? true : false}>
            #Mulher
          </Text>
        </Link>
        <Link href="/blog/feminismo">
          <Text selected={category.includes("feminismo") ? true : false}>
            #Feminismo
          </Text>
        </Link>
        <Link href="/blog/auto_estima">
          <Text selected={category.includes("auto_estima") ? true : false}>
            #Auto-Estima
          </Text>
        </Link>
      </Content>
    </Container>
  );
};

export default Categories;
