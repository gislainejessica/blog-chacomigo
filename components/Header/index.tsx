import React from 'react';
import Link from 'next/link'
import { Container, Logo, SocialMedia, Links } from './styles';

const Header: React.FC = () => {
  return (
    <Container>
      <Link href="/article">
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
    </Container>
  );
};

export default Header;
