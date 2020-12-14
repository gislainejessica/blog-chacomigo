import React from 'react';
import styles from '../../styles/Home.module.css'

import { Container } from './styles';

const Footer: React.FC = () => {
  return (
    <Container>
      <footer className={styles.footer}>
        <p> ChaComigo Blog </p>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <img src="/vercel.svg" alt="Vercel Logo" className={styles.logo} />
        </a>
      </footer>
    </Container>
  );
};

export default Footer;
