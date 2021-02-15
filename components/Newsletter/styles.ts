import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  height: 'auto';
  background:#354148;
  padding: 2.0rem;
  margin-bottom: 4rem;
`;

export const Title = styled.h1`
  font-size: 1.8rem;
  font-weight: Bold;
  color: #fff;
  text-align: left;
  margin-bottom: .8rem;
`;

export const Text = styled.p`
  font-size: 1.0rem;
  font-weight: normal;
  color: #fff;
  text-align: left;
`;

export const Press = styled.button`
  font-size: 1.0rem;
  font-weight: normal;

  color: #813F80;
  color: #384950;
  background:#fff;
  background: linear-gradient(90deg, #ffff,  #f3f2ef);

  text-align: center;
  border: none;
  border-radius: .8rem;

  width: 100%;
  margin: 1rem ;
  padding: .8rem;

  :focus {
    border: 2px solid #3C96CA;
    border-radius: .8rem;
  }
`;


export const Input = styled.input`
  /* background: #384953; */
  background: #384950;
  /* background: #E08388; */
  border: 1px solid #fff;
  border-radius: .4rem;
  height: 2.5rem;
  width: 100%;
  margin: 1rem ;

  :focus {
    border: 2px solid #fff;
    border-radius: .8rem;
  }
`;
