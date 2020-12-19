import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 'auto';
  background:#354148;
  /* margin: 1rem ; */
  padding: 1.6rem;
  margin-bottom: 4rem;
`;

export const Title = styled.h1`
  font-size: 2rem;
  font-weight: Bold;
  color: #fff;
  text-align: left;
  margin-bottom: .8rem;
`;

export const Text = styled.p`
  font-size: 1.2rem;
  font-weight: normal;
  color: #fff;
  text-align: left;
`;

export const Press = styled.button`
  font-size: 1.2rem;
  font-weight: normal;

  color: #3C96CA;
  background:#fff;
  background: linear-gradient(90deg, #ffff,  #f3f2ef);

  text-align: center;
  border: none;
  border-radius: .8rem;

  width: 100%;
  margin: 1rem ;
  padding: .8rem;

`;


export const Input = styled.input`
  background: #384953;
  border: 2px solid #3C96CA;
  border-radius: .8rem;
  height: 2.5rem;
  width: 100%;
  margin: 1rem ;
`;
