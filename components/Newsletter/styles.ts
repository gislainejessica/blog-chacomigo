import styled from 'styled-components';

export const Container = styled.div`
  /* width: 95%; */
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 'auto';
  background:#354148;
  margin: 1rem ;
  padding: .8rem;
`;
export const Title = styled.h1`
  font-size: 1.6rem;
  font-weight: Bold;
  color: #fff;
  text-align: center;
`;

export const Text = styled.p`
  font-size: 1.2rem;
  font-weight: normal;
  color: #fff;
  text-align: center;
`;

export const Press = styled.button`
  font-size: 1.2rem;
  font-weight: normal;
  color: #3C96CA;
  background:#fff;
  text-align: center;
  border: none;
  border-radius: .8rem;

  width: 80%;
  margin: 1rem ;
`;


export const Input = styled.input`

  background: #384953;
  border: 2px solid #3C96CA;
  border-radius: .8rem;
  height: 2.5rem;
  width: 80%;
  margin: 1rem ;
`;
