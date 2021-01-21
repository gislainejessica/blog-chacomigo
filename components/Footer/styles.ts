import styled from 'styled-components';
import Link from 'next/link'

export const Container = styled.div`
  width: 100%;
  min-height: 250px;
  min-width: 28rem;
  
  display: block;
  flex: 1;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  
  border-top: 1px solid #fff;
  border-top: 1px solid #C86DD7;

  background: linear-gradient(45deg, #F0722B,  #FFA842);
  background: linear-gradient(to right, #1900FF, #C86DD7);
  background: linear-gradient(145deg, #1900FF, #C86DD7);

  background: linear-gradient(145deg, #813F80, #E26872);


  /* background: #d2d6db; */
  padding: 4.8rem;
  /* padding-bottom: 6rem; */

  /* background: #fff; */

  @media(max-width: 580px) {
    padding: 2rem;
    /* background: linear-gradient(145deg, #1900FF, #C86DD7); */
  }
`;

export const Text = styled.p`
  color: #fff;
  /* color: #7d2440; */
  /* color: #C86DD7; */
  /* color: #202428; */
  font-size: 1.0rem;
  text-align: center;
  /* margin-top: 1.6rem; */
  /* margin: 8px ; */
  line-height: 1.4rem;

  @media(max-width: 580px) {
    font-size: .8rem;
  }
`;

export const Linke = styled(Link)`
  color: #202428;
  color: #fff;

  @media(max-width: 580px) {
    margin: 1.2rem;
    font-size: 1.0rem;
    text-align: center;
  }
`;

export const Links = styled.div`
  display: flex;
  
  @media(max-width: 858px) {
    display: block;
    text-align: center;
  }

  > div {
    font-size: 1.2rem;

    text-align: center;
    margin: 1.6rem;
  }
`;

export const Redes = styled.div`
  display: flex;
  /* flex: 1; */
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin-bottom: 1.6rem;
  /* background: #ddd; */

  a {
    margin: 0px .8rem ;
    color: #202428;
    color: #ffff;
    :hover {
      color: #333;
    }
  }
`;

export const Line = styled.hr`
  height: 1px;
  width: 20%;
  background: #d2d6db;
  margin-top: 2.6rem;
  margin-bottom: 2.6rem;
  border: 1px solid #fff;
`;