import styled from 'styled-components';

interface PropsTag {
  color: string
}

export const Container = styled.div<PropsTag>`
  border-radius: .8rem;
  background: ${props => props.color};
  margin: .8rem;
  margin-left: .4rem;
  margin-right: .4rem;
  padding: .4rem;
  padding: .4rem .8rem;

  min-width: 2.4rem;

  h1 { 
    font-size: .7rem;
    text-align: center;
    color: #ffff;
  }
`;
