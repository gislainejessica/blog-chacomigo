import React from 'react';

import { Container } from './styles';

interface PropsTag {
  color: string;
  size: number;
  children: React.ReactNode
}

const Tag: React.FC<PropsTag> = ({ color, size, children }) => {
  return (
    <Container color={color}>
      <h1>{children}</h1>
    </Container>
  );
};

export default Tag;
