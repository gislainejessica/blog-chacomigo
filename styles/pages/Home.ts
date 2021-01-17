import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex: 1;
  justify-content: center;
  align-self: center;

  min-height: 100vh;
  width: 100%;
  min-width: 28rem;

  /* background: #f6f8fa; */
  background: #fff7f9;
`;

export const Tag = styled.button`
  /* background: linear-gradient(-90deg, #F0722B,  #FFA842); */
  background: #fff;
  
  border: 2px solid #F0722B;
  border-image-source: linear-gradient(to right, #F0722B, #FFA842);
  border-image-source: linear-gradient(to right, #1900FF, #C86DD7);

  border-image-slice: 1;
  text-transform: uppercase;
  
  color: #fff;
  color: #1900FF;
  /* border: 2px dashed #fff; */
  /* border-radius: .8rem; */
  
  align-self: center;

  margin-left: 4.4rem;
  /* padding: .8rem; */
  padding: .1rem;
  width: 40%;

  font-weight: bold;
  /* font-size: 1.6rem; */
  font-size: 1.2rem;

  :hover {
    background: linear-gradient(to right, #1900FF, #C86DD7);
    color: #fff;
  }

  @media(max-width: 1280px) {
    width: 100%;
    /* margin-left: 2.8rem; */
    font-size: 1.2rem;
    margin-left: 0rem;
    padding: 0rem;
    margin-bottom: .8rem;
  }
`;

export const MaxWidth = styled.div`
  display: flex;
  align-items: flex-start;

  padding: 8rem 8rem 4rem 2rem;
  max-width: 1280px;
  
  /* min-width: 28rem; */
  
  @media(max-width: 1280px) {
    /* align-self: center; */
    /* justify-content: center; */
    padding: 6rem 0.8rem 4rem 0.8rem;
  }
`;

export const CardGruop = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;

  padding-bottom: 3.2rem ;
  padding-bottom: 2.0rem ;

  @media(max-width: 1280px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    
    padding-bottom: 0;
    padding: 0;
  }
`;

export const Main = styled.main`
  display: grid;
  grid-template-columns: 1fr 4fr;
  /* font-family: 'Courier New', Courier, monospace; */
  font-family: 'Inter', sans-serif;


  @media(max-width: 1280px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 0;
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  /* font-family: 'Courier New', Courier, monospace; */
  font-family: 'Inter', sans-serif;
`;

export const Sidebar = styled.div`
  display: none;

  @media(min-width: 1280px) {
    display: flex;
    flex-direction: column;
    /* font-family: 'Courier New', Courier, monospace; */
    font-family: 'Inter', sans-serif;

    max-width: 22rem;
  }
`;
