import React, { useState } from 'react';
import TradeSection from '../component/Trade';
import AccountInfo from '../component/Account';
import Navbar from '../component/Navbar';
import { AccountObjOne } from '../component/Account/Data';

const Home = () => {
   const [isOpen, setIsOpen ] = useState(false);

   const toggle = () => {
       setIsOpen(!isOpen);
   }
    
    return (
    <>
    <Navbar toggle={toggle} />
    <TradeSection />
    <AccountInfo {...AccountObjOne}/>
    </>
    );
};

export default Home;