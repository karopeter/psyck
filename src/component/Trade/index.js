import React from 'react';
import Vector from '../../assets/images/vector1.png';
import { TradeContainer, TradeH1, ImgWrap, Img, BtnWrap, Button, SellButton } from './TradeElements';

const TradeSection = () => {
   return (
    <TradeContainer id="home">
      <TradeH1>
         Trade smart with our step loose or take profit calculator margin
         <br className="hidden-xs"/>
         which helps appromiate your losses and gains
      </TradeH1>
      <ImgWrap>
        <Img src={Vector} alt="" />
      </ImgWrap>
      <BtnWrap>
         <Button to="home">Buy</Button>
         <SellButton>Sell</SellButton>
      </BtnWrap>
    </TradeContainer>
   );
};

export default TradeSection;