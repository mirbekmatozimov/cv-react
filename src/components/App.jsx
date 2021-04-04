import React, { useRef } from "react";
import Logo from "./Logo.jsx";
import NavMenu from "./NavMenu.jsx";
import Socials from "./Socials.jsx";
import Button from "./Button.jsx";
import {Route} from "react-router-dom";
import HomeHeader from "./pageComponents/HomeHeader";
import HomeBody from "./pageComponents/HomeBody";
import AboutBody from "./pageComponents/AboutBody";


function App(){
  return(
    <div id="mypage"> 
			<header className="header" id="my-header">
        <div className="header-top">
            <div className="container">
                <Logo/>
                <a href="#my-menu" className="mburger mburger--collapse">
                  <b></b>
                  <b></b>
                  <b></b>
                </a>
                <NavMenu test={executeScroll} />
                
                <Socials
                  addClass="header-top__socials"
                />
                <div className="header-top__search">
                  <a href="#">
                      <svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="26" height="28" viewBox="0 0 26 28">
                          <title>search</title>
                          <path d="M18 13c0-3.859-3.141-7-7-7s-7 3.141-7 7 3.141 7 7 7 7-3.141 7-7zM26 26c0 1.094-0.906 2-2 2-0.531 0-1.047-0.219-1.406-0.594l-5.359-5.344c-1.828 1.266-4.016 1.937-6.234 1.937-6.078 0-11-4.922-11-11s4.922-11 11-11 11 4.922 11 11c0 2.219-0.672 4.406-1.937 6.234l5.359 5.359c0.359 0.359 0.578 0.875 0.578 1.406z"></path>
                      </svg>
                  </a>
                </div>
                <Button
									name="Contact me"	
									link="#"
									addClass="header-top__btn"							
								/>
            </div>
        </div>
        <Route exact path="/" component={HomeHeader} />
      </header>

      <Route exact path="/" component={HomeBody} />
      <Route exact path="/about" component={AboutBody} />

      <footer className="footer">
        <div className="container"> 
          <p className="footer__copy">Copyright © 2021. All Rights Reserved.</p>
          <nav className="footer__menu menu">
            <ul>
              <li><a href="#">Home</a></li>
              <li><a href="#">About me</a></li>
              <li><a href="#">My works</a></li>
              <li><a href="#">Contacts</a></li>
            </ul>
          </nav>
          <Socials 
            addClass="footer__socials"
          />
        </div>
      </footer>
	</div>
  );
  
}


export default App;