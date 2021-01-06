import styled from 'styled-components';
import Image from 'next/image'

interface PropsImagem {
  alt: string
  unsized: boolean
  src: string
}

export const Container = styled.div`
  width: 100%;
  min-height: 100vh;
  /* background: #f6f8fa; */
  background: #fff7f9;
  /* background: #333322; */


  display: flex;
  justify-content: center;
  align-self: center;
`;

export const MaxWidth = styled.div`
  max-width: 1280px;
  width: 50%;
  padding: 4rem 2rem 4rem 2rem;
  display: flex;
  align-items: flex-start;
  background: #fff;
  margin-top: 8rem;
  border-radius: .8rem;


  @media (max-width: 1280px){
    width: 70%;
  }
  @media (max-width: 580px){
    width: 100%;
  }
`;

export const Main = styled.main`
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;

  border-radius: .6rem;
  font-family: 'Courier New', Courier, monospace;
`;

export const Text = styled.p`
  color: #354148;
  line-height: 1.8rem;
  font-size: 1.2rem;
`;

export const Author = styled.h3`
  color: #b7aeae;
  line-height: 1.8rem;
  font-size: 1.0rem;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  align-self: center;

  text-align: left;
  margin-bottom: 1.2rem;
`;

export const Imagem = styled(Image) <PropsImagem>`
  background: linear-gradient(45deg, #FFA842,  #F0722B);;
  height: 17rem;
  width: 100%;
  border-radius: .8rem;
`;

export const TimeText = styled.h2`
  color: #b7aeae;
  line-height: 1.8rem;
  font-size: 1.0rem;
  margin-bottom: 1.6rem;
`;

export const Tags = styled.div` 
  display: flex;
  flex-direction: row;
  margin: 1rem 0rem;
`;

export const Tag = styled.div`
  background: #484848;
  border-radius: 5rem;
  padding: 0.4rem 1.6rem;
  margin-right: .8rem;
  border: 1px solid #84BBE3;
`;

export const TagText = styled.p` 
  font-size: 14px;
  color: #e5e5e5;
  font-weight: bold;
  letter-spacing: 1.8px;
`;

export const Title = styled.h1`
  color: #354148;
  padding: .6rem 0;
  text-align: center;
`;