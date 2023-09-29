import React from 'react';
import Brand from './Brand';
import Banner from '../Header/Banner';
import Services from './Services/Services';
import WhyChooseRedx from './WhyChooseRedx/WhyChooseRedx';
import CoverArea from './CoverArea';
import DelivaryCalculate from './DelivaryCalculate/DelivaryCalculate';
import Feedback from './Feedback';
import Faq from './Faq';
import Partnar from './Partnar';
import News from './News/News';
 

const Main = () => {
    return (
        <div>
            <Banner/>
            <Brand/>
            <Services/>
            <WhyChooseRedx/>
            <CoverArea/>
            <DelivaryCalculate/>
            <Feedback/>
           
            <Faq/>
            <Partnar/>
            <News/>
        </div>
    );
};

export default Main;