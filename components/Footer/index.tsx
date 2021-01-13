import React from 'react';
// import styles from '../../styles/Home.module.css'
import { FaFacebook, FaGithub, FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa';

import { Container, Text, Link, Redes, Line } from './styles'

const Footer: React.FC = () => {
  return (
    <Container>
      <Redes>
        <div>
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
        </div>
      </Redes>

      <Redes>
        <h4>
          {/* Facebook */}
          <FaFacebook size={20} />
        </h4>
        <h4>
          {/* Instagram */}
          < FaInstagram size={20} />

        </h4>
        <h4>
          {/* Twitter */}
          <FaTwitter size={20} />
        </h4>
        <h4>
          {/* Youtube */}
          <FaYoutube size={20} />
        </h4>
      </Redes>

      <Line />

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
