import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 4rem;
  /* background: #84BBE3; */
   background: #F0722B;
   background: linear-gradient(45deg, #F0722B,  #FFA842);
  padding: 0 5rem;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  position: fixed;
`;

export const Logo = styled.h1`
  color: #fff;
`

export const Links = styled.div`
  display: flex;
  flex-direction: row;
`;

export const SocialMedia = styled.button`
  color: #fff;
  margin: 0 0.5rem;
  background: none;
  border: none;
`;


