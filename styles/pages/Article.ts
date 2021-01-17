import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  min-height: 50vh;
  min-width: 28rem;

  display: flex;
  flex: 1;
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

  padding: 8rem 2rem 4rem 2rem;
  display: flex;
  /* flex: 1; */
  align-items: flex-start;
  background: #fff;
  width: 60%;

  p {
    font-size: 1.2rem;
    color: #666;
    line-height: 1.8rem;
    font-family: 'Inter', sans-serif;
  }
  h2 {
    font-size: 1.4rem;
    color: #444;
    padding-bottom: 1rem;
    font-family: 'Inter', sans-serif;
  }
`;
