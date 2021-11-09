import React from 'react';


function Footer() {
    return (
        <>
            <section id="contact">
                <div className="container">
                    <div className="col-md-8 col-md-offset-2">
                        <div className="heading">
                            <h2>CONTACT <span>US</span></h2>
                            <div className="line" />
                            <p><span><strong>I</strong></span>f you have any problem or question reagarding horoscope, fill our contact form and we will respond as soon as possible.</p>
                        </div>
                    </div>
                    <div className="text-center">
                        <div className="col-md-6 col-sm-6 contact-sec-1">
                            <h4>CONTACT IN<span>FO</span></h4>
                            <ul className="contact-form">
                                <li><i className="fa fa-map-marker" />
                                    <h6><strong>Address:</strong> Delhi, India </h6>
                                </li>
                                <li><i className="fa fa-envelope" />
                                    <h6><strong>Mail Us:</strong> <a href="#">Info@example.com</a></h6>
                                </li>
                                <li><i className="fa fa-phone" />
                                    <h6><strong>Phone:</strong> +91 1234567890</h6>
                                </li>
                                <li><i className="fa fa-wechat" />
                                    <h6><strong>Website:</strong> <a href="#">www.example.com</a> </h6>
                                </li>
                            </ul>
                        </div>
                        <div className="col-md-6 col-sm-6">
                            <form id="main-contact-form" name="contact-form" method="post" action="javascript:void(0);">
                                <div className="row  wow fadeInDown" data-wow-duration="1000ms" data-wow-delay="300ms">
                                    <div className="col-sm-6">
                                        <div className="form-group">
                                            <input type="text" name="name" className="form-control" placeholder="Name" required="required" />
                                        </div>
                                    </div>
                                    <div className="col-sm-6">
                                        <div className="form-group">
                                            <input type="email" name="email" className="form-control" placeholder="Email Address" required="required" />
                                        </div>
                                    </div>
                                </div>
                                <div className="form-group">
                                    <input type="text" name="subject" className="form-control" placeholder="Subject" required="required" />
                                </div>
                                <div className="form-group">
                                    <textarea name="message" id="message" className="form-control" rows={4} placeholder="Enter your message" required="required" defaultValue={""} />
                                </div>
                                <div className="form-group">
                                    <input id="send-button" type="submit" value="Send Now" className="btn-send col-md-12 col-sm-12 col-xs-12" required="required" />
                                </div>

                                {/* <a className="btn-send col-md-12 col-sm-12 col-xs-12" href="#">Send Now</a> */}
                            </form>
                        </div>
                    </div>
                </div>
            </section>
           
            <footer id="footer-down">
                <div className="container">
                <div className="col-md-6" >
                <h2>Follow Us On</h2>
                <ul className="social-icon">
                <li className="facebook hvr-pulse"><a href="#"><i className="fa fa-facebook-f" /></a></li>
                <li className="twitter hvr-pulse"><a href="#"><i className="fa fa-twitter" /></a></li>
                <li className="linkedin hvr-pulse"><a href="#"><i className="fa fa-linkedin" /></a></li>
                <li className="google-plus hvr-pulse"><a href="#"><i className="fa fa-google-plus" /></a></li>
                <li className="youtube hvr-pulse"><a href="#"><i className="fa fa-youtube" /></a></li>
                </ul>
                </div>
                <div className="col-md-6" >
                <div className ="card">
                <div className ="text">
                <i className ="fa fa-envelope"></i>
                <h3>Subscribe Now!</h3>
                <span>Subscribe us for latest updates</span>
                </div>
                <form action="javascript:void(0);">
                <input id="useremail" type ="email" placeholder="Your E-Mail" required/>
                <input id="submit1" type ="submit" value="Submit" />
                </form>
                <p id="print"></p>
                </div>
                </div>
                </div>
                <p> © Copyright 2021 Amplyn - Created By: A Developer </p>
            </footer>

        </>
    );
}

export default Footer;