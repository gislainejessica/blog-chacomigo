import styled from 'styled-components';

export const Container = styled.div`
  background: linear-gradient(90deg, #F0722B, 50%,  #FFA842);
  background: linear-gradient(to right, #1900FF, 40%, #C86DD7);
 
  background: linear-gradient(145deg, #813F80, #E26872);

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
    padding: 0rem 2rem 0rem 2rem;

  }
`;

export const Logo = styled.h1`
  color: #fff;
`;

export const MenuButton = styled.button`
  background: none;
  display: none;

  @media (max-width: 1280px){
    display: block;
  }
`;

export const xButton = styled.button`
  background: none;
  width: 10rem;
  height: 10rem;
  top: 0;
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

export const MobileMenu = styled.div`
  background: '#fff';
  // display: 'none';
  position: 'fixed';
  width: '100%';
  height: '100%';
  left: '0px';
  top: '4rem';
  color: 'black';
  display: 'flex';
  flex: 1;
  justify-content: 'space-between';
  padding: '1rem';
`;