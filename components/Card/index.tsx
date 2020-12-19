import Image from 'next/image'
import React from 'react'
import { Container, Text, Title, DivImage, Tags, Wrapper } from './styles'

import MyTag from '../../components/Tag'

const Card: React.FC = () => {
  return (
    <Container >
      <DivImage>
        {/* <Image
          className={"styles.image"}
          alt="Picture of the blog"
          width={250}
          height={200}
          src='/animal.jpg'
        // border='2px solid gray'
        /> */}
      </DivImage>
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
        <Text>
          Conteudo inicial mostrada para
          chamar atenção para a pessoa
        </Text>
        <Text>
          Continuar Lendo ==x
        </Text>
      </Wrapper>
    </Container>
  );
};

export default Card;
