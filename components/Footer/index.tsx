import React from 'react';
// import styles from '../../styles/Home.module.css'
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa';

import { Container, Text, Links, Link, Redes, Line } from './styles'

const Footer: React.FC = () => {
  return (
    <Container>
      <Redes>
        <Links>
          <Link>
            Home
        </Link>
          <Link>
            Código de Conduta
        </Link>
          <Link>
            Politíca de privacidade
        </Link>
          <Link>
            Termos de uso
        </Link>
          <Link>
            Contato
        </Link>
          <Link>
            FAQ
        </Link>
          <Link>
            Sobre
        </Link>
        </Links>
      </Redes>

      <Redes>
        <a href="https://www.instagram.com/chacomigobr/">
          <FaFacebook size={20} />
        </a>
        <a href="https://www.instagram.com/chacomigobr/">
          <FaInstagram size={20} />
        </a>
        <a href="https://twitter.com/chacomigobr">
          <FaTwitter size={20} />
        </a>
        <a href="https://twitter.com/chacomigobr">
          <FaYoutube size={20} />
        </a>
      </Redes>

      <Line />

      <Text>
        ChaComigo Blog –
        Uma rede social construtiva e inclusiva.
        Com você em cada etapa de sua jornada rumo a um universo mais consciente.
      </Text>

      <br />
      {/* Feito e Publicado usando Next.  */}
      <Text>
        ChaComigo © 2020 - 2021.
      </Text>

    </Container>
  );
};

export default Footer;
