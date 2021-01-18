import React from 'react';
import Link from 'next/link'
import { FiMenu } from 'react-icons/fi'
import { Container, MaxWidth, Logo, SocialMedia, Links, MenuButton } from './styles';

const Header: React.FC = () => {
  return (
    <Container>
      <MaxWidth>
        <Link href="/blog/desconstrucao">
          <Logo>ChaComigo Blog</Logo>
        </Link>

        <Links>
          <SocialMedia>
            Youtube
        </SocialMedia>
          <SocialMedia>
            Facebook
        </SocialMedia>
          <SocialMedia>
            Twitter
        </SocialMedia>
          <SocialMedia>
            Instagram
        </SocialMedia>
        </Links>

        <MenuButton>
          <FiMenu size={24} color="#fff" />
        </MenuButton>
      </MaxWidth>
    </Container>
  );
};

export default Header;
