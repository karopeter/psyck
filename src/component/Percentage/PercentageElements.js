import styled from 'styled-components';

export const Wrapper = styled.div`
  background: #151515;
  border-radius: 8px;
  width: 700px;
  height: 518px;
  position: absolute;
  z-index: 0;
  left: 40rem;
  overflow: hidden;
  align-items: center;
  margin-top: 35rem;

  @media screen and (max-width: 768px) {
    left: 0;
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
