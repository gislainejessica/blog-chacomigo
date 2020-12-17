import React from 'react';
import Link from 'next/link'
import { Container, MaxWidth, Logo, SocialMedia, Links } from './styles';

const Header: React.FC = () => {
  return (
    <Container>
      <MaxWidth>
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
      </MaxWidth>
    </Container>
  );
};

export default Header;
