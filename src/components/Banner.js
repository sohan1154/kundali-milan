import React from 'react'

function Banner(){
    return(
        <>
        <section id="slider">
                <div id="home-carousel" className="carousel slide" data-ride="carousel">
                    <div className="carousel-inner">
                        <div className="item active" style={{ backgroundImage: 'url(assets/images/banner/banner1.jpg)' }}>
                            <div className="carousel-caption container">
                                <div className="row">
                                    <div className="col-md-8 col-sm-12 col-xs-12">
                                        <h2>What is horoscope?</h2>
                                        <p>A forecast of a person's future, typically including a delineation of character and circumstances, based on the relative positions of the stars and planets at the time of that person's birth.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="item" style={{ backgroundImage: 'url(assets/images/banner/banner2.jpg)' }}>
                            <div className="carousel-caption container">
                                <div className="row">
                                    <div className="col-md-7 col-sm-12 col-xs-12">
                                        <h2>Aries</h2>
                                        <p>The name Aries is Latin for ram, and its symbol is, representing a ram's horns. ... Although Aries came to represent specifically the ram whose fleece became the Golden Fleece of Ancient Greek mythology, it has represented a ram since late Babylonian times.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="item" style={{ backgroundImage: 'url(assets/images/banner/banner3.jpg)' }}>
                            <div className="carousel-caption container">
                                <div className="row">
                                    <div className="col-md-7 col-sm-12 col-xs-12">
                                        <h2>Aquarius</h2>
                                        <p>Uranus is the ruler of Aquarius, shoulder to shoulder with its traditional ruler – Saturn. Although Uranus has an abrupt, timid, and sometimes aggressive nature, their other ruler often grounds them enough and helps them find enough distance from other people to remain somewhat indifferent.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="item" style={{ backgroundImage: 'url(assets/images/banner/banner4.jpg)' }}>
                            <div className="carousel-caption container">
                                <div className="row">
                                    <div className="col-md-7 col-sm-12 col-xs-12">
                                        <h2>Aries</h2>
                                        <p>The name Aries is Latin for ram, and its symbol is, representing a ram's horns. ... Although Aries came to represent specifically the ram whose fleece became the Golden Fleece of Ancient Greek mythology, it has represented a ram since late Babylonian times.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="item" style={{ backgroundImage: 'url(assets/images/banner/banner5.jpg)' }}>
                            <div className="carousel-caption container">
                                <div className="row">
                                    <div className="col-md-7 col-sm-12 col-xs-12">
                                        <h2>Aries</h2>
                                        <p>The name Aries is Latin for ram, and its symbol is, representing a ram's horns. ... Although Aries came to represent specifically the ram whose fleece became the Golden Fleece of Ancient Greek mythology, it has represented a ram since late Babylonian times.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <a className="home-carousel-left" href="#home-carousel" data-slide="prev"><i className="fa fa-angle-left" /></a> <a className="home-carousel-right" href="#home-carousel" data-slide="next"><i className="fa fa-angle-right" /></a> </div>
                </div>
                {/*/#home-carousel*/}
            </section>
            </>
    );
}

export default Banner;