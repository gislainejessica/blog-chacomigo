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
  width: 90%;
  border-radius: .8rem;
  margin-left: .8rem ;
  align-self: center;
`;

export const MaxWidth = styled.div`
  max-width: 1280px;

  padding-top: 8rem ;
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
  grid-template-columns: 2fr 3fr;
  background: #f6f8fa;
`;

export const Content = styled.div`
  /* padding: .8rem 0; */

  background: #f6f8fa;
  /* display: grid; */
  /* grid-template-columns: 1fr 1fr; */
  display: flex;
  flex: 1;
  flex-direction: column;
  /* align-items: flex-start;
  justify-content: space-evenly;
  width: 150rem;
  max-width: 90rem;
  min-height: 50rem;  */
`;

export const Sidebar = styled.div`
  background: #f6f8fa;
  display: flex;
  flex-direction: column;
  /* padding: 0 1.6rem; */
  font-family: 'Courier New', Courier, monospace;
  max-width: 22rem;
`;