import React from 'react';


function Footer() {
    return (
        <>
            <section id="contact">
                <div className="container">
                    <div className="col-md-8 col-md-offset-2">
                        <div className="heading">
                            <h2>संपर्क करें</h2>
                            <div className="line" />
                            <p>यदि आपको राशिफल के संबंध में कोई समस्या या प्रश्न है, तो हमारा संपर्क फ़ॉर्म भरें, हम आपको जल्द से जल्द जवाब देंगे।</p>
                        </div>
                    </div>
                    <div className="text-center">
                        <div className="col-md-6 col-sm-6 contact-sec-1">
                            <h4>संपर्क जानकारी</h4>
                            <ul className="contact-form">
                                <li><i className="fa fa-map-marker" />
                                    <h6><strong>पता:</strong> Delhi, India </h6>
                                </li>
                                <li><i className="fa fa-envelope" />
                                    <h6><strong>ईमेल पता:</strong> <a>Info@example.com</a></h6>
                                </li>
                                <li><i className="fa fa-phone" />
                                    <h6><strong>फ़ोन:</strong> +91 1234567890</h6>
                                </li>
                                <li><i className="fa fa-wechat" />
                                    <h6><strong>वेबसाइट:</strong> <a>www.example.com</a> </h6>
                                </li>
                            </ul>
                        </div>
                        <div className="col-md-6 col-sm-6">
                            <form id="main-contact-form" name="contact-form" method="post" action="javascript:void(0);">
                                <div className="row  wow fadeInDown" data-wow-duration="1000ms" data-wow-delay="300ms">
                                    <div className="col-sm-6">
                                        <div className="form-group">
                                            <input type="text" name="name" className="form-control" placeholder="नाम" required="required" />
                                        </div>
                                    </div>
                                    <div className="col-sm-6">
                                        <div className="form-group">
                                            <input type="email" name="email" className="form-control" placeholder="ईमेल" required="required" />
                                        </div>
                                    </div>
                                </div>
                                <div className="form-group">
                                    <input type="text" name="subject" className="form-control" placeholder="विषय" required="required" />
                                </div>
                                <div className="form-group">
                                    <textarea name="message" id="message" className="form-control" rows={4} placeholder="अपना संदेश दर्ज करें" required="required" defaultValue={""} />
                                </div>
                                <div className="form-group">
                                    <input id="send-button" type="submit" value="मेसेज भेजें" className="btn-send col-md-12 col-sm-12 col-xs-12" required="required" />
                                </div>

                                {/* <a className="btn-send col-md-12 col-sm-12 col-xs-12" href="#">Send Now</a> */}
                            </form>
                        </div>
                    </div>
                </div>
            </section>
           
            <footer id="footer-down">
                <div className="container">
                <div className="col-lg-12" >
                <h2>हमारा अनुसरण इस पर कीजिये</h2>
                <ul className="social-icon">
                <li className="facebook hvr-pulse"><a href="#"><i className="fa fa-facebook-f" /></a></li>
                <li className="twitter hvr-pulse"><a href="#"><i className="fa fa-twitter" /></a></li>
                <li className="linkedin hvr-pulse"><a href="#"><i className="fa fa-linkedin" /></a></li>
                <li className="google-plus hvr-pulse"><a href="#"><i className="fa fa-google-plus" /></a></li>
                <li className="youtube hvr-pulse"><a href="#"><i className="fa fa-youtube" /></a></li>
                </ul>
                </div>
                </div>
                <p> © Copyright 2021 कौलाचार्य जगदीशानंद तीर्थ </p>
            </footer>

        </>
    );
}

export default Footer;