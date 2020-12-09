import React from 'react';
import { Container, Logo, SocialMedia, Links } from './styles';

const Header: React.FC = () => {
  return (
    <Container>
      <Logo>ChaComigo Blog</Logo>

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
