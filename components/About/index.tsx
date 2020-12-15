import React from 'react'
import { Container, Title, Picture, Text, Header, Content } from './styles'

const About: React.FC = () => {
  return (
    <Container >
      <Header />
      <Picture />
      <Content>
        <Title>
          Sobre Nós
      </Title>
        <Text>
          A chaComigo nasceu
          de uma ideia na Faculdade
          de modo a contribuir
          na redução no numero
          de vitimas de violência
          de genero
      </Text>
      </Content>

    </Container>
  );
};

export default About;
