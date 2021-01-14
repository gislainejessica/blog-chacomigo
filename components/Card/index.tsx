import Image from 'next/image'
import React from 'react'
import { FaSeedling } from 'react-icons/fa'
import { Container, Text, Title, DivImage, Tags, Wrapper, Continue, Content } from './styles'

import MyTag from '../../components/Tag'
import Link from 'next/link';

const Card: React.FC = () => {
  return (
    <Container>
      <DivImage />
      <Wrapper>
        <Tags>
          <MyTag color="#ff7474" size={1}>
            #Violência
          </MyTag>
          {/* <MyTag color="#90aa22" size={1}>
            #Feminismo
          </MyTag> */}
          <MyTag color="#3d3d3d" size={1}>
            #Machismo
          </MyTag>
        </Tags>
        <Title>
          Existe vida após a violência
        </Title>
        <Content>
          <Text>
            Conteudo inicial mostrada para
            chamar atenção para a pessoa
            Conteudo inicial mostrada para
            chamar atenção para a pessoa...
          </Text>
          <Continue>
            Continuar Lendo
            <FaSeedling size={20} color="#90aa22" />
          </Continue>
        </Content>
      </Wrapper>
    </Container>
  );
};

export default Card;
