import React from 'react';
import { Link} from 'react-router-dom';
import {Link as Link2 } from 'react-scroll'
import Home from './Home';
import * as GlobalProvider from '../providers/globals/Global';
import Aboutus from './Aboutus';

function Header(props){

const Home = () => {
    GlobalProvider.Home();
  
}
const contactUS = () => {
  GlobalProvider.contactUS();
}

    return(
        <header id="menu">
    <div className="navbar navbar-default navbar-fixed-top">
      <div className="container">
        <div className="container-fluid">
          {/* Brand and toggle get grouped for better mobile display */}
          <div className="navbar-header">
            <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false"> <span className="sr-only">Toggle navigation</span> <span className="icon-bar" /> <span className="icon-bar" /> <span className="icon-bar" /> </button>
            <Link2 className="navbar-brand" ><img src="assets/images/Logo/03.png" alt /></Link2> </div>
          {/* Collect the nav links, forms, and other content for toggling */}
          <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
            <ul className="nav navbar-nav"  > 
              <li ><Link2  to="home" className="scroll active1" >होम</Link2></li>
              <li><Link2 className="scroll " to='about' >हमारे बारे में</Link2></li>
              <li><Link2 className="scroll" to="service">कुंडली मिलान</Link2></li>
              <li><Link2 className="scroll" to="pricing">अक्सर पूछे जाने वाले प्रश्न</Link2></li>
              <li><Link2 className="scroll" to="features">राशि</Link2></li>
              <li><Link2 className="scroll" to="contact" >संपर्क करें</Link2></li>
            </ul>
          </div>
          {/* /.navbar-collapse */}
        </div>
      </div>
    </div>
  </header>
    )
}

export default Header;