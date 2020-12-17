import styled from 'styled-components';

interface PropsTag {
  color: string
}

export const Container = styled.div<PropsTag>`
  border-radius: .8rem;
  background: ${props => props.color};
  
  margin-left: .8rem;
  margin-top: .8rem;
  padding-left: .8rem;
  padding-right: .8rem;

  width: 'auto';
  /* height: 20; */

  h1 { 
    font-size: .8rem;
    font-weight: bold;
    text-align: center;
    color: #ffff;
    /* padding: .4rem 1rem; */
  }
`;
