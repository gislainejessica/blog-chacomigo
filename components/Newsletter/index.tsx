import React from 'react'
import { Container, Text, Title, Press, Input } from './styles'

const Newsletter: React.FC = () => {
  return (
    <Container >
      <Title>
        NewsLetter
      </Title>
      <Text>
        Se você quiser receber
        as atualizações
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
