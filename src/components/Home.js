import React from 'react'
import Header from './Header';
import Banner from './Banner';
import Aboutus from './Aboutus';

import Matching from './Matching';
import Features from './Features';
import Faqs from './Faqs';

import Team from './Team';

import Comments from './Comments';
import Footer from './Footer';

function Home(props) {
    
    return (
        <div id="home">
            <Header />
            <Banner />
            <Aboutus />
            <Matching />
            <Features />
            <Faqs />
            <Comments />
            <Footer />
        </div>
    );
}

export default Home;