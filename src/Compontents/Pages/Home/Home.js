import React from 'react';
import Banner from '../../Banner/Banner';
import Products from '../../Products/Products';
import SubBanner from '../SubBanner/SubBanner';
import SubCard from '../SubCard/SubCard';


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <SubCard ></SubCard>
            <Products></Products>
            <SubBanner></SubBanner>
        </div>
    );
};

export default Home;