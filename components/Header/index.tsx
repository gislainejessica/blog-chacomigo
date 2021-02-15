import React from 'react';
import Link from 'next/link'
import { FiMenu } from 'react-icons/fi'
import { Container, MaxWidth, Logo, SocialMedia, Links, MenuButton } from './styles';

// import Menu from '../Menu'

const Header: React.FC = () => {
  const [opened, setOpened] = React.useState(false)

  const openMenu = () => {
    setOpened(!opened)
    console.log(opened)
  }

  React.useEffect(() => {
    // setOpened(false)
    console.log(opened)

  }, [opened])

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
          <div style={{
            backgroundColor: 'white',
            // display: 'none',
            position: 'fixed',
            width: '100%',
            height: '100%',
            left: '10px',
            top: '70px',
            color: 'black'
          }}>

            <h3> Home</h3>
            <h3> Código de Conduta</h3>
            <h3> Politíca de privacidade</h3>
            <h3> Termos de uso</h3>
            <h3> Contato</h3>
            <h3> FAQ</h3>
            <h3> Sobre</h3>

            <p> Youtube </p>
            <p> Instagram </p>
            <p> Facebook </p>
            <p> Twitter </p>
          </div>
        )}

      </MaxWidth>
    </Container >
  );
};

export default Header;
