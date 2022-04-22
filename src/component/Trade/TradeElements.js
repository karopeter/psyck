import styled from 'styled-components';

export const TradeContainer = styled.div`
  justify-content: center;
  align-items: center;
  top: 10;
  z-index: 1;
`;

export const TradeH1 = styled.h1`
  color: #fff;
  font-size: 1.2rem;
  margin-top: 12rem;
  text-align: center;
  font-weight: 400;
  line-height: 16px;

  @media screen and (max-width: 768px) {
      font-size: 1rem;
  }

  @media screen and (max-width: 480px) {
      font-size: 1.5rem;
  }
`;

export const ImgWrap = styled.div`
  height: 50%
`;

export const Img = styled.img`
 width: 30%
 height: 30%;
 margin-top: 4rem;
 margin-left: 45rem;

 @media screen and (max-width: 768px) {
   width: 15%;
   height: 15%;

   margin-left: 15rem;
 }

 @media screen and (max-width: 480px) {
    width: 15%;
    height: 15%;
    margin-left: 15rem;
 }
`;

export const BtnWrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  white-space: nowrap;
  outline: none;
  padding: ${({big}) => (big ? '10px 28px' : '12px 30px' )};
  border: none;
  cursor: pointer;
  transition: all 0.2s ease-in-out; 
`;

export const Button = styled.button`
  background: #B89F1B;
  font-size: 1rem;
  margin: 1rem;
  color: #fff;
  width: 10%;
  height: 10%;
  opacity: 0.1;
  padding: 0.25em 1em;
  border-radius: 3px;
`;


export const SellButton = styled(Button)`
  color: #fff;
  background: #191919;
  border: 1px solid #ffffff;
  box-sizing: border-box;
`;