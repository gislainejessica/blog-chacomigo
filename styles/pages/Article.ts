import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  min-height: 100vh;

  display: flex;
  flex: 1;
  justify-content: center;
  align-self: center;

  background: #f5f5f5;
`;

export const Tag = styled.button`
  background: linear-gradient(-90deg, #F0722B,  #FFA842);

  color: #fff;
  border: 2px dashed #fff;
  padding: .8rem;
  font-weight: bold;
  font-size: 1.6rem;

  width: 40%;
  border-radius: .8rem;
  margin-left: 2.5rem ;
  align-self: center;
  margin-left: 4.4rem;
`;

export const MaxWidth = styled.div`
  max-width: 1280px;

  padding: 8rem 2rem 4rem 2rem;
  display: flex;
  flex: 1;
  align-items: flex-start;
`;

export const CardGruop = styled.div`
  padding-bottom: 3.2rem ;
  display: flex;
  flex: 1;
  align-items: flex-start;
`;

export const Main = styled.main`
  flex: 1;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start; 
  display: grid;
  grid-template-columns: 1fr 5fr;
  font-family: 'Courier New', Courier, monospace;
`;
