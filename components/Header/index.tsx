import React from 'react';
import Link from 'next/link'
import { FiMenu } from 'react-icons/fi'
import { Container, MaxWidth, Logo, SocialMedia, Links, MenuButton, MobileMenu } from './styles';
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa';

// import Menu from '../Menu'

const Header: React.FC = () => {
  const [opened, setOpened] = React.useState(false)

  const openMenu = () => {
    setOpened(!opened)
    console.log(opened)
  }

  return (
    <Container>
      <MaxWidth>
        <Link href="/blog/feminismo">
          <Logo>ChaComigo Blog</Logo>
        </Link>

        <Links>
          <SocialMedia>
            <a href="https://www.youtube.com/channel/UCZn_QEPoxB0yQHuSGIE87NQ/featured">
              Youtube
            </a>
          </SocialMedia>
          <SocialMedia>
            <a href="https://www.facebook.com/ChaComigo-103978595029145">
              Facebook
            </a>
          </SocialMedia>
          <SocialMedia>
            <a href="https://twitter.com/chacomigobr">
              Twitter
            </a>
          </SocialMedia>
          <SocialMedia>
            <a href="https://www.instagram.com/chacomigobr/">
              Instagram
            </a>
          </SocialMedia>
        </Links>

        <MenuButton onClick={openMenu}>
          <FiMenu size={24} color="#fff" />
        </MenuButton>

        {opened && (
          <MobileMenu style={{
            backgroundColor: 'white',
            // display: 'none',
            position: 'fixed',
            width: '100%',
            height: '100%',
            left: '0px',
            top: '4rem',
            color: 'black',
            display: 'flex',
            flex: 1,
            justifyContent: 'space-between',
            padding: '1rem',
          }}>
            <div >

              <div>
                <Link href="/blog/feminismo">
                  Home
                </Link>
              </div>
              <div>
                <Link href="/code-of-conduct">
                  Código de Conduta
                </Link>
              </div>
              <div>
                <Link href="/privacy">
                  Politíca de privacidade
                </Link>
              </div>
              <div>
                <Link href="/terms">
                  Termos de uso
                </Link>
              </div>
              <div>
                <Link href="/contact">
                  Contato
                </Link>
              </div>
              <div>
                <Link href="/faq">
                  FAQ
                </Link>
              </div>
              <div>
                <Link href="/about">
                  Sobre
              </Link>
              </div>
              <h2> Receba notificações</h2>

              <a href="https://www.facebook.com/ChaComigo-103978595029145">
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


            </div>

            <MenuButton onClick={openMenu} style={{ width: 20, height: 20 }}>
              <p style={{ fontSize: 20 }}> x </p>
            </MenuButton>

          </MobileMenu>
        )}

      </MaxWidth>
    </Container >
  );
};

export default Header;
