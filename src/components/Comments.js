import React from 'react';

function Comments(){
    return(
        <section id="testimonials" className="parallex">
        <div className="container">
            <div className="quote"> <i className="fa fa-quote-left" /> </div>
            <div className="clearfix" />
            <div className="slider-text">
                <div id="owl-testi" className="owl-carousel owl-theme">
                    <div className="item">
                        <div className="col-md-10 col-md-offset-1"> <img src="assets/images/guru/01.jpg" className="img-circle" alt />
                        <h5>Shri Shri Ravi Shankar (श्री श्री रवि शंकर)</h5>
                            <h6>Ravi Shankar is an Indian yoga guru, a spiritual leader. He is frequently referred to as "Sri Sri", Guru ji, or Gurudev. From around the mid 1970s, he worked as an apprentice under Mahesh Yogi, the founder of Transcendental Meditation.</h6>
                        </div>
                    </div>
                    <div className="col-md-10 col-md-offset-1"> <img src="assets/images/guru/02.jpg" className="img-circle" alt />
                    <h5>Sadhguru (सद्गुरु)</h5>
                        <h6>Jagadish Vasudev, venerated as Sadhguru, is an Indian yoga guru and author. Jaggi Vasudev earned a bachelor's degree in English from the University of Mysore and has been teaching yoga in southern India since 1982.</h6>
                    </div>
                    <div className="col-md-10 col-md-offset-1"> <img src="assets/images/guru/04.jpg" className="img-circle" alt />
                    <h5>BK Shivani (बीके शिवानी)</h5>
                        <h6>Shivani Verma, better known as BK Shivani, Brahma Kumari Shivani, or Sister Shivani, is a teacher in the Brahma Kumaris spiritual movement in India.</h6>
                    </div>
                    <div className="col-md-10 col-md-offset-1"> <img src="assets/images/guru/03.jpg" className="img-circle" alt />
                    <h5>Baba Ramdev (रामदेव)</h5>
                        <h6>Swami Ramdev, also known as Baba Ramdev, is an Indian yoga guru and businessman, primarily known for his popularising Yoga and Ayurveda in India.</h6>
                    </div>
                    <div className="col-md-10 col-md-offset-1"> <img src="assets/images/guru/05.jpg" className="img-circle" alt />
                    <h5>Sadhvi Rithambara (साध्वी ऋतंबर)</h5>
                        <h6>Sadhvi Nisha Rithambara is a Hindu nationalist ideologue and the founder-chairperson of Durga Vahini.</h6>
                    </div>
                </div>
            </div>
        </div>
    </section>
    );
}
export default Comments;