import styled from 'styled-components';

export const Container = styled.div`
  min-height: 220px;
  background:#fff;
  display: grid;
  grid-template-columns: 1fr 1fr;
  border: 2px solid #fff;
  border-radius: 4px;

  margin-right: 1rem;
  margin-left: 4.4rem;

  color: #4f4f4f;

  box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.04), 0px 4px 20px rgba(0, 0, 0, 0.08), 0px 20px 40px rgba(212, 217, 232, 0.15);
  
  :hover {
    border: 2px solid #1900FF;
    border-image-source: linear-gradient(to right, #1900FF, #C86DD7);
    border-image-slice: 1;
    border-radius: 4px;
    box-shadow: 0 0 29px 0 rgba(73, 73, 73, 0.5);
  }


  @media(max-width: 1280px) {
    margin-bottom: 0.6rem;
    margin-top: 0.6rem;
    width: 80%;
    width: 100%;
    margin-left: 1rem;
  }

  @media(max-width: 580px) {
   display: flex;
  }
`;

export const Wrapper = styled.div`
  background:#fff;
  /* width: 15rem; */
  border-radius: 4px;

  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  padding: .4rem;
  

  /* background: #ddf; */
`;

export const Text = styled.p`
  font-family: 'Courier New', Courier, monospace;
  font-size: 1rem;
  font-weight: normal;
  text-align: left;

  margin-left: .8rem;
  margin-right: .8rem;
`;

export const Continue = styled.div`
  font-family: 'Inter', sans-serif;
  font-size: .8rem;
  font-weight: normal;
  text-align: left;

  align-self: center;

  margin-left: .8rem;
  margin-right: .8rem;
  /* text-align: right; */
`;

export const Content = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
 
`;

export const Title = styled.h1`
  font-size: 1.2rem;
  font-weight: bold;
  text-align: center;

  color: #330f1a;

  margin-bottom: .8rem;
  font-family: 'Courier New', Courier, monospace;

  font-weight: 600;
  background: linear-gradient(-297.95deg, #004FC5 10.56%, #00C472 89.01%);
  /* background: linear-gradient(-297.95deg, #1900FF 10.56%, #C86DD7 89.01%); */
  background: linear-gradient(-297.95deg, #004FC5 10.56%, #C86DD7 89.01%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  margin-bottom: 0;
  line-height: 50px;
`;

export const Tags = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const DivImage = styled.div`
  background-image: url(https://cdn.pixabay.com/photo/2016/11/29/05/45/astronomy-1867616_960_720.jpg);
  background-image: url(https://midias.agazeta.com.br/2020/10/13/710x388/a-uma-parcela-populacao-em-sua-maioria-preta-e-pobre-e-apenas-concedida-uma-cidadania-parcial-337879.jpg);
  width: 100%;
  filter: grayscale(100%);
  height: 'auto';
  /* border-radius: 4px 0px 0px 4px; */

  @media(max-width: 580px) {
    display: none;
  }

  :hover {
    border-radius: 0px 0px 0px 0px;
  }
`;