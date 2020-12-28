import Image from 'next/image';
import React from 'react'
import { Container, Title, Picture, Text, Header, Content } from './styles'

const About: React.FC = () => {
  return (
    <Container >
      <Header />
      <Picture
        className={"styles.image"}
        alt="Picture of the blog"
        width={100}
        height={100}
        src='/logo-cha.jpeg'
      />

      <Content>
        <Title>
          Sobre Nós
      </Title>
        <Text>
          A chaComigo nasceu
          do desejo de
          concientizar as pessoas sobre violência
          de genero
      </Text>
      </Content>

    </Container>
  );
};

export default About;
