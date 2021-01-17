import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  min-height: 100vh;
  min-width: 28rem;

  display: flex;
  /* flex: 1; */
  justify-content: center;
  /* background: #f5f5f5; */
  background: #fff7f9;
`;

export const MaxWidth = styled.div`
  max-width: 1280px;
  flex-direction: column;
  margin-top: 6rem;
  margin-bottom: 4rem;
  box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.04), 0px 4px 20px rgba(0, 0, 0, 0.08), 0px 20px 40px rgba(212, 217, 232, 0.15);
  border-radius: 10px;

  padding: 4rem 2rem 4rem 2rem;
  display: flex;
  align-items: flex-start;
  background: #fff;
  width: 50%;

  p {
    font-size: 1.2rem;
    color: #666;
    line-height: 1.8rem;
    font-family: 'Inter', sans-serif;
    
  }
  h2 {
    font-size: 2rem;
    color: #444;
    padding-bottom: 1rem;
    font-family: 'Inter', sans-serif;

    /* font-size: 44px; */
    font-weight: 600;
    /* background: linear-gradient(-297.95deg, #004FC5 10.56%, #00C472 89.01%); */
    background: linear-gradient(-297.95deg, #1900FF 10.56%, #C86DD7 89.01%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    margin-bottom: 0;
    line-height: 50px;
  }
`;
