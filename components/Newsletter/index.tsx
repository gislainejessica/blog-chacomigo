import React from 'react'
import { Container, Text } from './styles'

const Newsletter: React.FC = () => {
  return (
    <Container >
      <Text>
        NewsLetter
      </Text>
      <Text>
        Se você quiser receber
        as atualizações
        cadastre seu email aqui
      </Text>
      <input />
      <button>
        Quero receber
      </button>
    </Container>
  );
};

export default Newsletter;
