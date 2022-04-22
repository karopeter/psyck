import React, {useState} from 'react';
import TradeSection from '../component/Trade';
import AccountInfo from '../component/Account';
import PercentageSection from '../component/Percentage';
import Navbar from '../component/Navbar';
import Sidebar from '../component/Sidebar';
import FooterSection from '../component/Footer';
import { AccountObjOne } from '../component/Account/Data';
import { PercentageObjOne } from '../component/Percentage/data';
import { FooterObjOne } from '../component/Footer/data';

const Home = () => {
   const [isOpen, setIsOpen ] = useState(false);

   const toggle = () => {
       setIsOpen(!isOpen);
   }
    
    return (
    <>
    <Sidebar isOpen={isOpen} toggle={toggle} />
    <Navbar toggle={toggle} />
    <TradeSection />
    <AccountInfo {...AccountObjOne}/>
    <PercentageSection {...PercentageObjOne}/>
    <FooterSection {...FooterObjOne} />
    </>
    );
};

export default Home;