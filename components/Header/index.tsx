import React from 'react';
import Link from 'next/link'
import { FiMenu } from 'react-icons/fi'
import { Container, MaxWidth, Logo, SocialMedia, Links, MenuButton } from './styles';

import Menu from '../Menu'

const Header: React.FC = () => {
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

        <MenuButton>
          <FiMenu size={24} color="#fff" />
          {/* <Menu /> */}
        </MenuButton>
      </MaxWidth>
    </Container>
  );
};

export default Header;
