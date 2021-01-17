// import Link from 'next/link';
// import Image from 'next/image'
import React from 'react'
import { FaSeedling } from 'react-icons/fa'
import { Container, Text, Title, DivImage, Tags, Wrapper, Continue, Content } from './styles'

import MyTag from '../../components/Tag'

type tag = {
  content: string,
  color: string
}

interface PropsCard {
  title: string;
  content: string;
  tags?: {
    content: string,
    color: string
  }[];
  showImage?: boolean
}

const Card: React.FC<PropsCard> = ({
  title = "TITULO",
  content = "CONTEUDO DO ARTIGO...CONTEUDO DO ARTIGO...",
  tags = [], showImage }) => {
  return (
    <Container>
      {!showImage && (<DivImage />)}
      <Wrapper>
        <Tags>
          {tags.map(tag => (
            <MyTag key={tag.content} color={tag.color} size={1}>
              {tag.content}
            </MyTag>
          ))}

        </Tags>
        <Title>
          {title}
        </Title>
        <Content>
          <Text>
            {content}
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
