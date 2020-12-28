import styled from 'styled-components';

export const Container = styled.div`
  height: 'auto';
  background:#E2E7E9;
  margin-bottom: 4rem;
`;

export const Content = styled.div`
  padding: 1.4rem;
`;

export const Header = styled.div`
  width: 'auto';
  height: 4rem;
  background:#D0D9DC;
  text-align: center;
  
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Text = styled.p`
  font-size: 1.0rem;
  font-weight: normal;
  padding: .4rem;

  :hover {
    color: #F0722B;
  }
`;

export const TextColor = styled.p`
  font-size: 1.0rem;
  font-weight: normal;
  /* color: #739CDA; */
  color: #F0722B;
  padding: .4rem;
`;