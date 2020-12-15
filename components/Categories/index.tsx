import React from 'react'
import { Container, Header, Text, TextColor, Content } from './styles'

const Categories: React.FC = () => {
  return (
    <Container >
      <Header>
        <h3>Categorias</h3>
      </Header>
      <Content>
        <TextColor>
          Feminismo
        </TextColor>
        <Text>
          Desconstrução
        </Text>
        <Text>
          Violência
        </Text>
        <Text>
          Machismo
        </Text>
        <Text>
          Revolução
        </Text>
        <Text>
          Leis e Políticas Públicas
        </Text>
        <Text>
          Psicologia
        </Text>
        <Text>
          Mullher
        </Text>
        <Text>
          Auto-Estima
        </Text>
      </Content>
    </Container>
  );
};

export default Categories;
