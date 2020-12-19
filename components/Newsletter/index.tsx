import React from 'react'
import { Container, Text, Title, Press, Input } from './styles'

const Newsletter: React.FC = () => {
  return (
    <Container >
      <Title>
        Novidades
      </Title>
      <Text>
        Quer saber mais sobre
        o assunto e receber
        as atualizações em primeira mão
        cadastre seu email aqui
      </Text>
      <Input />
      <Press>
        <p>
          Quero receber
        </p>
      </Press>
    </Container>
  );
};

export default Newsletter;
