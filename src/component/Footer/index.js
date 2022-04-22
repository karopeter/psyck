import React from 'react';
import Vector from '../../assets/images/vector1.png';
import {FooterContainer, HeroH1, ImgWrap, Img, BtnWrap, Button, ProfitH2, LossParagraph, ProfitParagraph, ContractParagraph } from './FooterElements';

const FooterSection = ({ id, summary, description, profit, point, account, financial, synthetic}) => {
    return (
    <FooterContainer id={id}>
      <HeroH1>
      Would you like to get notified when your asset goes above or 
      <br className="hidden-xs"/>
      below your target price?
      </HeroH1>
      <ImgWrap>
        <Img src={Vector} alt="#" />
      </ImgWrap>
      <BtnWrap>
          <Button>{summary}</Button>
      </BtnWrap>
      <ProfitH2>{description}</ProfitH2>
       <ImgWrap>
        <Img src={Vector} alt="#" />
      </ImgWrap>
      <LossParagraph>
      The stop loss and/or take profit level and pip value when buying a contract on Deriv MT5 
      <br className="hidden-xs"/>
      (DMT5) is calculated based on the formula:
      </LossParagraph>
      <ProfitParagraph>{profit}</ProfitParagraph>
      <ProfitParagraph>{point}</ProfitParagraph>
      <ContractParagraph>{account}</ContractParagraph>
      <ContractParagraph>{financial}</ContractParagraph>
      <ContractParagraph>{synthetic}</ContractParagraph>
    </FooterContainer>
    );
};

export default FooterSection;