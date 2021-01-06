import styled from 'styled-components';
import Image from 'next/image';

export const Header = styled.div`
  width: 100%;
  height: 5.7rem;
  background: linear-gradient(-180deg,  #fff, 60%, #f5a578);
  
  background: linear-gradient(127deg,  #eee, 70%, #ddd);

`;

export const Picture = styled(Image)`
  width: 100px;
  height: 100px;
  background: #C4C4C4; 
  border-radius: 50%;
  /* border:  1px dashed #F0722B; */
  border:  .5px dashed #FFA842;
  border:  .5px dashed #ddd  ;

  display: flex;
  justify-content: center;
  align-items: center;
  align-self: center;
  margin: -50px auto 2px;
  position: relative;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  /* background: #f9f9f9; */
  background: #fff;
  margin-bottom: 4rem;
  text-align: left;
  /* border:  1px solid #ddd; */
  box-shadow: 0px 0px 2px 1px rgba(0, 51, 116, 0.2);
`;

export const Content = styled.div`
  padding: 0 1.6rem 1.6rem 1.6rem;
  margin: -40px auto 2px;
`;

export const Title = styled.h1`
  font-size: 1.3rem;
  font-weight: Bold;
  color: #354148;
  text-align: center;
  /* margin: -5px auto 2px; */
`;

export const Text = styled.p`
  font-size: 1.0rem;
  font-weight: normal;
  color: #354148;
  margin-top: .6rem;
  line-height: 1.3;
  text-align: center;
`;