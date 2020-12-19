import styled from 'styled-components';
import Image from 'next/image';

export const Header = styled.div`
  /* width: 'auto'; */
  width: 100%;
  height: 7.7rem;
  /* background: linear-gradient(45deg,  #626E73, 60%, #F0722B); */
  background: linear-gradient(-45deg,  #c9c9c9, 60%, #f5a578);
  /* position: 'absolute'; */
`;

export const Picture = styled(Image)`
  width: 120px;
  height: 120px;
  background:#C4C4C4; 
  border-radius: 50%;
  border:  1px dashed #F0722B;
  display: flex;
  justify-content: center;
  align-items: center;
  align-self: center;
  margin: -60px auto 2px;
`;


export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  background:#f9f9f9;
  margin-bottom: 4rem;
  text-align: left;
  border:  1px solid #ccc;
`;

export const Content = styled.div`
  padding: 0 1.6rem 1.6rem 1.6rem;
  margin: -40px auto 2px;
`;

export const Title = styled.h1`
  font-size: 1.4rem;
  font-weight: Bold;
  color: #222;
  text-align: center;
`;

export const Text = styled.p`
  font-size: 1.2rem;
  font-weight: normal;
  color: #444;
  margin-top: .8rem;
  line-height: 1.3;
`;