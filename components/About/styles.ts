import styled from 'styled-components';


export const Header = styled.div`
  width: 'auto';
  height: 7.7rem;
  background:#626E73;
  position: 'absolute';
  /* margin: 1rem ; */
  /* padding: .8rem; */
`;

export const Picture = styled.div`
  width: 120px;
  height: 120px;
  background:#C4C4C4; 
  border-radius: 50%;
  position: 'relative';
  display: flex;
  align-self: center;
  margin: -60px auto 2px;
  /* margin: 1rem ; */
  /* padding: .8rem; */
`;


export const Container = styled.div`
  display: flex;
  flex-direction: column;
  /* width: 95%; */
  height: 'auto';
  background:#E2E7E9;
  margin: 1rem ; 
  /* padding: .8rem; */
`;

export const Content = styled.div`
  /* width: 95%; */
  /* height: 'auto';
  background:#E2E7E9;
  margin: 1rem ;  */
  padding: 1.6rem;
`;

export const Title = styled.h1`
  font-size: 1.6rem;
  font-weight: Bold;
`;

export const Text = styled.p`
  font-size: 1.2rem;
  font-weight: normal;
`;