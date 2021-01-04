import styled from 'styled-components';

export const Container = styled.div`
  /* width: 70%; */
  min-height: 220px;
  background:#fff;
  display: grid;
  grid-template-columns: 1fr 1fr;

  /* border: 1px solid rgba(255, 168, 66, .5); */
  border: 2px solid #c5c5c5;

  border-radius: 4px;
    /* border-radius: 3px; */

  /* :hover {
    box-shadow: 1px 4px 10px 1px rgba(255, 168, 66, .5);
    border: none;
  } */


  :hover {
    border: 2px solid #1900FF;
    border-image-source: linear-gradient(to right, #1900FF, #C86DD7);
    border-image-slice: 1;
    border-radius: 12px;
    border-radius: 3px;
    box-shadow: 0 0 29px 0 rgba(73, 73, 73, 0.5);
  }

  margin-right: 1rem;
  margin-left: 4.4rem;

  @media(max-width: 1280px) {
    margin-bottom: 1.6rem;
    margin-top: 1.6rem;
    width: 80%;
  }

  @media(max-width: 580px) {
   display: flex;
  }
`;

export const Wrapper = styled.div`
  background:#fff;
  /* width: 15rem; */
  border-radius: 4px;

  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
`;

export const Text = styled.p`
  font-family: 'Courier New', Courier, monospace;
  font-size: 1rem;
  font-weight: normal;
  text-align: left;

  margin-left: .8rem;
  margin-right: .8rem;
`;

export const Title = styled.h1`
  font-size: 1.2rem;
  font-weight: bold;
  text-align: center;

  margin-bottom: .8rem;
  font-family: 'Courier New', Courier, monospace;
`;

export const Tags = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const DivImage = styled.div`
  background-image: url(https://cdn.pixabay.com/photo/2016/11/29/05/45/astronomy-1867616_960_720.jpg);
  width: 100%;
  height: 'auto';
  /* border-radius: 4px 0px 0px 4px; */

  @media(max-width: 580px) {
    display: none;
  }

  :hover {
    border-radius: 0px 0px 0px 0px;
  }
`;