import styled from 'styled-components';

export const Wrapper = styled.div`
   position: absolute;
   width: 700px;
   height: 518px;
   z-index: 0;
   left: 40rem;
   margin-top: 3rem;
   overflow: hidden;
   background: #F7F7F7;
   align-items: center;
   border-radius: 8px;

   @media screen and (max-width: 768px) {
     left: 0;
   }
`;

export const Section = styled.div`
   justify-content: center;
    font-family: 'Inter';
    font-weight: 600;
    display: flex;
    align-items: center;
`;

export const AccountH2 = styled.h2`
  font-size: 1.5rem;
  color: #B89F1B;
  text-align: center;
  margin-top: 2rem;
`;  

export const Dropdown = styled.div`
  width: 400px;
  margin: 0 auto;
  position: relative;
`;

export const DropdownBtn = styled.button`
   padding: 10px 15px ;
   background: #F7F7F7;
   color: #B89F1B;
   font-weight: 500;
   margin-left: 8rem;
   margin-top: 1rem;
   align-items: center;
   justify-content: center;
`;

export const DropdownContent = styled.div`
    position: absolute;
    padding: 10px;
    background: #F7F7F7;
    font-weight: 500;
    width: 50%;
`;

export const Img = styled.img`
  width: 10%;
  height: 10%;
`;


export const Input = styled.input`
   margin-top: 2rem;
   margin-left: 4rem;
   background: #C4C4C4;
   border-radius: 8px;
   color: #151515;
   text-align: center;
   width: 60%;
   height: 60%;
`;

export const RadioCheck = styled.div`
   margin-left: 4rem;
   justify-content: center;
   font-size: 1rem;
   margin-bottom: 1rem;
`;


export const Button = styled.button`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 13px 126px;
    width: 400px;
    height: 58px;
    margin-left: 10rem;
    margin-top: 3rem;
    background: #B89F1B;
    color: #fff;
    font-size: 1.5rem;
    border-radius: 8px;
`;