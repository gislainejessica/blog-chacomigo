import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 100%;
  /* min-height: 100vh; */
  min-width: 28rem;

  display: flex;
  justify-content: center;
  background: #fff7f9;
`;

export const MaxWidth = styled.div`
  max-width: 1280px;
  min-width: 28rem;
  flex-direction: column;
  margin-top: 6rem;
  margin-bottom: 4rem;
  box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.04), 0px 4px 20px rgba(0, 0, 0, 0.08), 0px 20px 40px rgba(212, 217, 232, 0.15);
  border-radius: 10px;

  padding: 4rem 2rem 4rem 2rem;
  display: flex;
  align-items: center;
  justify-content: center;

  background: #fff;
  width: 70%;

  @media(max-width: 880px){
    padding: 2rem 1rem 2rem 1rem;
    width: 100%;
    margin-top: 4rem;
    margin-bottom: 0rem;
  }

  @media(min-width: 1280px){
    width: 50%;
  }

  h1 {
    font-size: 1.2rem;
    color: #666;
    line-height: 1.8rem;
    font-family: 'Inter', sans-serif;
  }

  p {
    font-size: 1.1rem;
    color: #666;
    line-height: 1.8rem;
    font-family: 'Inter', sans-serif;
    text-align: left;
    width:80%;
   
    @media(max-width: 880px){
      width: 90%;
    }

    span {
      color: #555;
      font-weight: bold;
    }
  }

  h3 {
    font-size: 1.2rem;
    color: #666;
    line-height: 1.8rem;
    font-family: 'Inter', sans-serif;
    text-align: center;
  }

  h2 {
    font-size: 2rem;
    color: #444;
    padding-bottom: 1rem;
    font-family: 'Inter', sans-serif;
    text-transform: capitalize;
    text-align: left;

    /* width: 80%; */
    font-weight: 600;
    background: linear-gradient(145deg, #813F80, #E26872);

    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    margin-bottom: 0;
    line-height: 50px;
  }
`;
