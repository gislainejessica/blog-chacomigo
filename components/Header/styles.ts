import styled from 'styled-components';

export const Container = styled.div`
  background: linear-gradient(90deg, #F0722B, 50%,  #FFA842);
  font-family: 'Courier New', Courier, monospace;
  
  width: 100%;
  height: 4rem;

  display: flex;
  flex: 1;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  position: fixed;
  z-index: 3;
`;

export const MaxWidth = styled.div`
  max-width: 1280px;
  height: 4rem;
  padding: 0rem 2rem 0rem 2rem;

  display: flex;
  flex: 1;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 1280px){
  }
`;

export const Logo = styled.h1`
  color: #fff;
`;

export const Links = styled.div`
  display: flex;
  flex-direction: row;

  @media (max-width: 1280px){
    display: none;
  }
`;

export const SocialMedia = styled.button`
  color: #fff;
  margin: 0 0.5rem;
  background: none;
  border: none;
`;


