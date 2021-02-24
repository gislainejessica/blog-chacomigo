import styled from 'styled-components';
import Image from 'next/image'

interface PropsImagem {
  alt: string
  unsized: boolean
  src: string
}

interface Props {
  color: string;
}

export const Container = styled.div`
  width: 100%;
  min-height: 100vh;
  min-width: 28rem;

  background: #fff7f9;

  display: flex;
  justify-content: center;
  align-items: flex-start;
`;

export const Comment = styled.div`
  width: 5rem;
  min-height: 80vh;

  /* min-width: 28rem; */

  /* background: #2233f9; */
  top: 8rem;
  left: 0;

  display: block;
  justify-content: center;
  position: relative;
  align-items: flex-start;

  h1 { 
    color: black;
  }
`;

export const PostContent = styled.div``;

export const MaxWidth = styled.div`
  max-width: 1280px;
  width: 60%;
  padding: 3.2rem 3.2rem 3.2rem 3.2rem;

  display: flex;
  align-items: flex-start;
  background: #fff;
  /* background: #444; */
  margin-top: 6.4rem;
  margin-bottom: 3.2rem;
  border-radius: .8rem;

  @media (max-width: 1280px){
    width: 80%;
  }

  @media (max-width: 758px){
    width: 100%;
    padding: 2rem 1.6rem 2rem 1.6rem;
    margin-top: 2rem;
    margin-bottom: 0rem;
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
  font-family: 'Inter', sans-serif;

  @media(max-width: 580px) {
    font-size: 1.1rem;
  }
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
  background: linear-gradient(to right, #1900FF, #C86DD7);
  background: linear-gradient(145deg, #813F80, #E26872);
  
  height: 17rem;
  width: 100%;
  border-radius: .8rem;
`;

export const TimeText = styled.h2`
  color: #b7aeae;
  line-height: 1.8rem;
  font-size: 1.0rem;
  margin-bottom: 1.6rem;
  font-family: 'Inter', sans-serif;
`;

export const Tags = styled.div` 
  display: flex;
  flex-direction: row;
  margin: 1rem 0rem;

  @media (max-width: 580px){
    display: flex;
    flex-direction: row;
    align-self: center;
  }
`;

export const Tag = styled.div<Props>`
  background: #008115;
  background: ${props => props.color};
  border-radius: 5rem;
  padding: 0.4rem 1.6rem;
  margin-right: .8rem;
  border: 1px solid #84BBE3;

  display: flex;
  justify-content: center;
  align-items: center;
`;

export const TagText = styled.p` 
  font-family: 'Inter', sans-serif;

  font-size: 14px;
  color: #e5e5e5;
  font-weight: bold;
  letter-spacing: 1.8px;
  text-align: center;
`;

export const Title = styled.h1`
  font-family: 'Inter', sans-serif;
  font-size: 2rem;

  color: #354148;
  padding: .6rem 0;
  text-align: center;

  font-weight: 600;
  background: linear-gradient(-297.95deg, #813F80 10.56%, #E26872 89.01%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  margin-bottom: 0;
  line-height: 50px;
`;