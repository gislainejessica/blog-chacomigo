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

`;

export const MaxWidth = styled.div`
  max-width: 1280px;

  padding-top: 8rem ;
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
  background: #f6f8fa;
`;

export const Content = styled.div`
  padding: .8rem 0;

  background: #f6f8fa;
  display: grid;
  grid-template-columns: 2fr 2fr;
  align-items: center;

  min-width: 70rem;
`;

export const Sidebar = styled.div`
  background: #f6f8fa;
  display: flex;
  flex-direction: column;
  padding: 0 1.6rem;
`;