import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex: 1;
  justify-content: center;
  align-self: center;

  min-height: 100vh;
  width: 100%;
  min-width: 28rem;

  background: #fff7f9;
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
  padding: .1rem;
  width: 40%;

  font-weight: bold;
  font-size: 1.2rem;

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

export const MaxWidth = styled.div`
  display: flex;
  align-items: flex-start;

  padding: 8rem 8rem 4rem 2rem;
  max-width: 1280px;
    
  @media(max-width: 1280px) {
    padding: 6rem 0.8rem 4rem 0.8rem;
  }
`;


export const Picker = styled.div`
  display: none;
  flex-direction: row;
  background:  #d444;
  align-items: flex-start;

  padding-bottom: 3.2rem ;
  padding-bottom: 2.0rem ;
  
  width: 100%;
  height: 1.7rem;
  border: 2px solid #d355 ;

  margin-left: 1rem;

  @media(max-width: 1280px) {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    flex: 1;

    padding-bottom: 0;
    padding: 0.4rem;
    /* margin: .5rem; */
  }
`;

export const CategoryPicker = styled.div`
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


export const TagGroup = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;

  /* padding-bottom: 3.2rem ; */
  padding-bottom: 2.0rem ;

  /* @media(max-width: 1280px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    
    padding-bottom: 0;
    padding: 0;
  } */
`;

export const Main = styled.main`
  display: grid;
  grid-template-columns: 1fr 4fr;
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
  font-family: 'Inter', sans-serif;
`;

export const Sidebar = styled.div`
  display: none;

  @media(min-width: 1280px) {
    display: flex;
    flex-direction: column;
    font-family: 'Inter', sans-serif;
    max-width: 22rem;
  }
`;
