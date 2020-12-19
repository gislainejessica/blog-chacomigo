import styled from 'styled-components';

export const Container = styled.div`
  width: 50%;
  /* height: 'auto'; */
  height: 200px;
  background:#fff;
  margin: 0 .0rem;
  display: flex;
  border: 1px solid rgba(255, 168, 66, .5);

  :hover {
    box-shadow: 1px 4px 10px 1px rgba(255, 168, 66, .5);
    border: none;
  }
  margin-right: 1.2rem;
  margin-left: 2.4rem;

`;

export const Wrapper = styled.div`
  /* height: 'auto'; */
  background:#fff;

  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  flex: 1;
  /* border: 1px solid #f5f5f5f5; */
`;

export const Text = styled.p`
  font-size: 1rem;
  font-weight: normal;
  text-align: left;
  margin-left: .8rem;
  margin-right: .8rem;
  font-family: 'Courier New', Courier, monospace;
  /* max-width: 40rem; */
`;

export const Title = styled.h1`
  font-size: 1.2rem;
  font-weight: bold;
  text-align: center;
  margin-bottom: .8rem;
`;

export const Image = styled.div`
  width: 100px;
  height: 100px;
  background:#ddd;
`;

export const Tags = styled.div`
  display: flex;
`;

export const DivImage = styled.div`
  /* background-image: url('/animal.jpg'); */
  background-image: url(https://cdn.pixabay.com/photo/2016/11/29/05/45/astronomy-1867616_960_720.jpg);
  width: 10rem  ;
  height: 'auto';
`