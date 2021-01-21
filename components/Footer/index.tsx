import React from 'react';
// import styles from '../../styles/Home.module.css'
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa';

import { Container, Text, Links, Linke, Redes, Line } from './styles'

const Footer: React.FC = () => {
  return (
    <Container>
      <Redes>
        <Links>
          <div>
            <Linke href="/blog/feminismo">
              Home
          </Linke>
          </div>
          <div>
            <Linke href="/code-of-conduct">
              Código de Conduta
            </Linke>
          </div>
          <div>
            <Linke href="/privacy">
              Politíca de privacidade
              </Linke>
          </div>
          <div>
            <Linke href="/terms">
              Termos de uso
              </Linke>
          </div>
          <div>
            <Linke href="/contact">
              Contato
              </Linke>
          </div>
          <div>
            <Linke href="/faq">
              FAQ
              </Linke>
          </div>
          <div>
            <Linke href="/about">
              Sobre
              </Linke>
          </div>
        </Links>
      </Redes>

      <Redes>
        <a href="https://www.instagram.com/chacomigobr/">
          <FaFacebook size={24} />
        </a>
        <a href="https://www.instagram.com/chacomigobr/">
          <FaInstagram size={24} />
        </a>
        <a href="https://twitter.com/chacomigobr">
          <FaTwitter size={24} />
        </a>
        <a href="https://www.youtube.com/channel/UCZn_QEPoxB0yQHuSGIE87NQ/featured">
          <FaYoutube size={24} />
        </a>
      </Redes>

      <Line />

      <Text>
        ChaComigo Blog –
        Uma rede social construtiva e inclusiva.
        Com você em cada etapa de sua jornada rumo a um universo mais consciente.
      </Text>

      <br />
      <Text>
        ChaComigo © 2020 - 2021.
      </Text>

    </Container>
  );
};

export default Footer;
