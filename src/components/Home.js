import React from 'react'
import Header from './Header';
import Banner from './Banner';
import Aboutus from './Aboutus';
import Matching from './Matching';
import Faqs from './Faqs';
import Comments from './Comments';
import Footer from './Footer';
import Zodiac from './Zodiac';

function Home(props) {
    
    return (
        <div id="home">
            <Header />
            <Banner />
            <Aboutus />
            <Matching />
            <Zodiac />
            <Faqs />
            <Comments />
            <Footer />
        </div>
    );
}

export default Home;