import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  min-height: 100vh;

  display: flex;
  flex: 1;
  justify-content: center;
  background: #f5f5f5;
`;

export const MaxWidth = styled.div`
  max-width: 1280px;
  flex-direction: column;
  background: #ddd;

  padding: 8rem 2rem 4rem 2rem;
  display: flex;
  flex: 1;
  align-items: flex-start;
`;
