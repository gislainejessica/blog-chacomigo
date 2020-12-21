import React from 'react';
// import styles from '../../styles/Home.module.css'

import { Container, Text } from './styles'

const Footer: React.FC = () => {
  return (
    <Container>
      <Text>
        ChaComigo Blog
        </Text>
      <Text>
        © 2020 Blog da ChaComigo. Feito com  Published with Next.
      </Text>
    </Container>
  );
};

export default Footer;
