import React from 'react';
import Banner from '../../Banner/Banner';
import Products from '../../Products/Products';
import Contact from '../Contact/Contact';
import Features from '../Features/Features';
import SubBanner from '../SubBanner/SubBanner';
import SubCard from '../SubCard/SubCard';



const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <SubCard></SubCard>
            <Products></Products>
            <SubBanner></SubBanner>
            <Features></Features>
            <Contact></Contact>
        </div>
    );
};

export default Home;