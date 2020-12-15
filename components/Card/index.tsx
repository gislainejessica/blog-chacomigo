import React from 'react'
import { Container, Text, Tag, Image } from './styles'

const Card: React.FC = () => {
  return (
    <Container >
      <Image />
      <div>
        <Tag>
          Feminismo
        </Tag>
        <Text>
          Titulo do card
        </Text>
        <Text>
          Conteudo inicial mostrada para
          chamar atenção para a pessoa
          clicar para continuar lendo
        </Text>
        <Text>
          Continuar Lendo ==x
        </Text>
      </div>
    </Container>
  );
};

export default Card;
