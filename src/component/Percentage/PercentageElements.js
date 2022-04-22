import styled from 'styled-components';

export const Wrapper = styled.div`
  background: #151515;
  border-radius: 8px;
  width: 700px;
  height: 518px;
  position: absolute;
  margin-left: 33rem;
  overflow: hidden;
  background-position: cover;
  margin-top: 36rem;

  @media screen and (max-width: 768px) {
    left: 0;
    transition: 0.8s all ease;
  }

  @media screen and (max-width: 408px) {
     left: 0;
     transition: 0.8s all ease;
  }
`;

export const Label = styled.label`
   color: #fff;
   text-align: center;
   display: flex;
   margin-top: 3rem;
   margin-left: 4rem;
   align-items: center;
   font-size: 1.3rem;
   font-family: 'Inter';
`;

export  const Input = styled.input`
   margin-left: 4rem;
   background: #C4C4C4;
   border-radius: 8px;
   text-align: right;
   color: #151515;
   width: 60%;
   height: 60%;
`;
