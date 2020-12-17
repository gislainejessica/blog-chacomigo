import React from 'react'
import { Container, Text, Title, Image, Tags } from './styles'

import MyTag from '../../components/Tag'

const Card: React.FC = () => {
  return (
    <Container >
      <Image />
      <div>
        <Tags>
          <MyTag color="#ff7474" size={1}>
            Violência
          </MyTag>
          <MyTag color="#90aa22" size={1}>
            Feminismo
          </MyTag>
          <MyTag color="#3d3d3d" size={1}>
            Machismo
          </MyTag>
        </Tags>
        <Title>
          Titulo do card
        </Title>
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
