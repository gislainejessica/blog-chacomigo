import styled from 'styled-components';
import Link from 'next/link'

interface PropsTag {
  color: string
}

export const Container = styled(Link)`

`;

export const Tag = styled.button`
  background: #fff;
  
  border: 2px solid #F0722B;
  border-image-source: linear-gradient(145deg, #813F80, #E26872);


  border-image-slice: 1;
  text-transform: uppercase;
  
  color: #813F80;

  align-self: center;

  margin-left: 4.4rem;
  padding: .3rem;
  width: 40%;

  font-weight: bold;
  font-size: 1.2rem;
  text-align: center;
  font-family: 'Inter', sans-serif;

  :hover {
    background: linear-gradient(145deg, #813F80, #E26872);
    color: #fff;
  }

  @media(max-width: 1280px) {
    width: 100%;
    font-size: 1.2rem;
    margin-left: 0rem;
    padding: 0rem;
    margin-bottom: .8rem;
  }
`;
