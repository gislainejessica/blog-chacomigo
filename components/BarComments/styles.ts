import styled from 'styled-components';

export const Container = styled.div``;

export const Comment = styled.div`
  /* width: 5rem; */
  min-width: 100vh;

  top: 8rem;
  left: 0;

  display: block;
  justify-content: center;
  position: relative;
  align-items: flex-start;

  div { 
    margin: 1rem 0;
    width: 60px;
    padding: .5rem;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    :hover {
      background: rgb(226, 104, 114, .15);
      border-radius: 30px;
    }
  }

  br { 
    margin: 2rem;
  }

  @media (max-width: 758px){
    display: none;
  }
`;
