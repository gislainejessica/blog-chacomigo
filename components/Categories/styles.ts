import styled from 'styled-components';

interface Props {
  selected?: boolean;
  onClick?: () => {}
}

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

export const Text = styled.p<Props>`
  font-size: 1.0rem;
  font-weight: normal;
  padding: .4rem;
  margin-bottom: .4rem;

  color: ${props => props.selected ? '#1900FF' : '#330f1a'};
  color: ${props => props.selected ? '#813F80' : '#330f1a'};
  background: ${props => props.selected ? '#fff' : 'none'};

  /* border: ${props => props.selected ? '2px solid #fff' : `2px solid transparent`}; */
  border: ${props => props.selected ? '2px solid #1900FF' : `2px solid transparent`};
  border: ${props => props.selected ? '2px solid #813F80' : `2px solid transparent`};

  border-radius: .4rem;
  
  :hover {
    color: #1900FF;
    color: #813F80;

    border-radius: .4rem;
    /* border: ${props => props.selected ? '2px solid #fff' : '2px solid #1900FF'}; */
    border: ${props => props.selected ? '2px solid #1900FF' : '2px solid #1900FF'};
    border: ${props => props.selected ? '2px solid #813F80' : '2px solid #813F80'};
    /* border: 2px solid #1900FF; */
  }
`;
