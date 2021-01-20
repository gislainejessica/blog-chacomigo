import React from 'react';

import { Container, Tag } from './styles';

interface PropsTag {
  color?: string;
  size?: number;
  children: React.ReactNode;
  category: string | string[];
}

const TagFind: React.FC<PropsTag> = ({ category, color, size, children }) => {
  return (
    <Container href={`/info/${category}`}>
      <Tag >
        <p>{children}</p>
      </Tag>
    </Container>
  );
};

export default TagFind;
