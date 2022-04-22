import styled from 'styled-components';

export const FooterContainer = styled.div` 
   justify-content: center;
   align-items: center;
   top: 10;
   z-index: 1;
`;

export const HeroH1 = styled.h1`
   margin-top: 70rem;
   color: #B89F1B;
   line-height: 24px;
   font-size: 1.5rem;
   font-weight: 700;
   text-align: center;
`;

export const ImgWrap = styled.div`
  height: 50%;
`;

export const Img = styled.img`
   width: 15%;
   height: 15%;
   margin-top: 1rem;
   margin-left: 37rem;
   position: sticky;

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

   @media screen and (max-width: 768px) {
       width: 30%;
       height: 30%;
   }
 `;


 export const ProfitH2 = styled.h2`
   color: #FFFFFF;
   margin-top: 4rem;
   line-height: 24px;
   font-size: 1.5rem;
   font-weight: 700;
   text-align: center;
 `;

 export const LossParagraph = styled.p`
   margin-top: 2rem;
   color: #FFFFFF;
   font-size: 1rem;
   text-align: center;
   font-weight: 400;
   line-height: 16px;
 `;

 export const ProfitParagraph = styled.p`
   margin-top: 2rem;
   color: #B89F18;
   text-align: center;
   font-weight: 400;
   line-height: 24px;
   font-size: 1rem;
 `;

 export const ContractParagraph = styled.p`
    color: #FFFFFF;
    font-size: 1rem;
    margin-top: 1rem;
    font-weight: 400;
    text-align: center;
 `;
