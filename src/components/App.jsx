import React from "react";
import ReactDOM from "react-dom";
import Logo from "./Logo.jsx";
import NavMenu from "./NavMenu.jsx";
import Socials from "./Socials.jsx";
import Button from "./Button.jsx";
import Heading from "./Heading.jsx";
import WorkCard from "./WorkCard.jsx";

ReactDOM.render(
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
                <NavMenu/>
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
       <div className="container">
        <div className="header-body">
          <div className="header-body__info wow animate__animated animate__fadeIn" data-wow-duration="1s">
            <h1 className="header-body__title">
              Hi, I’m Mirbek and I love creating Web apps
            </h1>
            <p className="header-body__text">
              Creating web applications is my passion. Full of boundless energy
              and enthusiasm, I’m over-inspired and follow my desires wherever
              they take me! Checkout my works
            </p>
            <Button 
							name="My portfolio"
							link="#"
							addClass="header-body__btn"
						/>
          </div>
          <div className="header-body__img wow animate__animated animate__slideInRight" data-wow-duration="0.5s">
            <img src="img/header-body__img.svg" alt="web developing" />
          </div>
        </div>
      </div>
      </header>

      <div id="my-content">
        <section className="tools">
          <div className="container">
            <div className="tools__cards">
              <div className="card card_design wow animate__animated animate__slideInLeft"  data-wow-duration="0.5s">
                <img src="img/cards/01.png" alt="figma" />
                <img src="img/cards/03.png" alt="photoshop" />
                <img src="img/cards/02.png" alt="adobe illustrator" />
              </div>
              <div className="card card_frontend wow animate__animated animate__slideInLeft"  data-wow-duration="0.7s">
                <img src="img/cards/09.png" alt="html" />
                <img src="img/cards/04.png" alt="css" />
                <img src="img/cards/07.png" alt="react" />
                <img src="img/cards/08.png" alt="gulp" />
                <img src="img/cards/06.png" alt="jquery" />
                <img src="img/cards/05.png" alt="js" />
              </div>
              <div className="card card_backend wow animate__animated animate__slideInLeft"  data-wow-duration="0.9s">
                <img src="img/cards/10.png" alt="ejs" />
                <img src="img/cards/11.png" alt="express" />
                <img src="img/cards/12.png" alt="mongoose" />
                <img src="img/cards/13.png" alt="mongodb" />
              </div>
            </div>
            <div className="tools__info wow animate__animated animate__fadeIn" data-wow-duration="1s">
              <Heading 
								title="What am I able to and which tools I use usually?"
								text="I began my trip with design and thus i know designing tools: photoshop and figma. My frontendpage I do with React framework, backend side with Express.js and as database I use MongoDB "
								sectionName="tools"
							/>
              <div className="tools__tags">
                <div className="tag-btn">#HTML</div>
                <div className="tag-btn">#CSS</div>
                <div className="tag-btn">#React</div>
                <div className="tag-btn">#JS</div>
                <div className="tag-btn">#ExpressJS</div>
                <div className="tag-btn">#MongoDB</div>
              </div>
            </div>
          </div>
        </section>

        <section className="works">
          <div className="container">
						<Heading 
							title="My works"
							text="My viewpoint is - in order to prove your skills it’s enought to show your works, your portfolio is your authentication!"
							sectionName="works"
              addClass="wow animate__animated animate__fadeIn"
              dataWowDuration="1s"
						/>
            <div className="works__portfolio">
              <WorkCard 
								image="img/works/01.png"
								name="name 1"
                addClass="wow animate__animated animate__bounceIn"
                dataWowDuration="0.6s"
                dataWowDelay="0.1s"
							/>
              <WorkCard 
								image="img/works/02.png"
								name="name 2"
                addClass="wow animate__animated animate__bounceIn"
                dataWowDuration="0.6s"
                dataWowDelay="0.2s"
							/>
              <WorkCard 
								image="img/works/03.png"
								name="name 3"
                addClass="wow animate__animated animate__bounceIn"
                dataWowDuration="0.6s"
                dataWowDelay="0.3s"
							/>
              <WorkCard 
								image="img/works/04.png"
								name="name 4"
                addClass="wow animate__animated animate__bounceIn"
                dataWowDuration="0.6s"
                dataWowDelay="0.4s"
							/>
              <WorkCard 
								image="img/works/05.png"
								name="name 5"
                addClass="wow animate__animated animate__bounceIn"
                dataWowDuration="0.6s"
                dataWowDelay="0.5s"
							/>
              <WorkCard 
								image="img/works/06.png"
								name="name 6"
                addClass="wow animate__animated animate__bounceIn"
                dataWowDuration="0.6s"
                dataWowDelay="0.6s"
							/>
            </div>
          </div>
        </section>

        <section className="contacts">
          <div className="container">
            <div className="contacts__form">
              <form>
                <div className="group">
                  <input type="text" required/>
                  <span className="highlight"></span>
                  <span className="bar"></span>
                  <label>Your name</label>
                </div>
                <div className="group">
                  <input type="email" required/>
                  <span className="highlight"></span>
                  <span className="bar"></span>
                  <label>Your email</label>
                </div>
                <div className="group">
                  <textarea required></textarea>
                  <span className="highlight"></span>
                  <span className="bar"></span>
                  <label>Your message</label>
                </div>
                <button className="btn" type="submit">Send me</button>
              </form>
            </div>
            <div className="contacts__info wow animate__animated animate__fadeIn" data-wow-duration="1s">
							<Heading 
								title="Contact me"
								text="If you have any questions or want some consultation then feel free
                  to contact me any convenient time for you. I will be sinserely
                  glad to answer."
								sectionName="contacts"
							/>
              <div className="contacts__datas">
                <p className="contacts__phone">+996 507 25 08 01</p>
                <p className="contacts__email">mirbek.25.52@gmail.com</p>
                <div className="contacts__socials">
                  <a href="#">
                    <svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path d="M20.5032 3.48779C18.2471 1.23984 15.2467 0.00131836 12.0502 0C5.4635 0 0.102885 5.33481 0.100235 11.8917C0.0993524 13.9878 0.649544 16.0339 1.69532 17.8374L0 24L6.33485 22.3462C8.08037 23.2938 10.0455 23.7932 12.0453 23.7938H12.0503C18.6363 23.7938 23.9975 18.4585 24 11.9013C24.0013 8.72344 22.7595 5.7356 20.5032 3.48779ZM12.0502 21.7853H12.0461C10.2639 21.7846 8.51604 21.3079 6.99087 20.4075L6.62835 20.1932L2.86915 21.1746L3.87253 17.527L3.6363 17.153C2.64204 15.5792 2.11701 13.7602 2.1179 11.8925C2.11996 6.44253 6.57565 2.00859 12.0542 2.00859C14.7071 2.00947 17.2009 3.03896 19.0761 4.90737C20.9513 6.77578 21.9834 9.25928 21.9825 11.9005C21.9801 17.3509 17.5247 21.7853 12.0502 21.7853ZM17.4982 14.3821C17.1997 14.2333 15.7317 13.5146 15.4579 13.4153C15.1844 13.3162 14.9851 13.2668 14.7863 13.5642C14.5871 13.8615 14.015 14.531 13.8407 14.7292C13.6665 14.9275 13.4925 14.9524 13.1938 14.8036C12.8952 14.6549 11.9332 14.341 10.7926 13.3286C9.90506 12.5407 9.30586 11.5676 9.13159 11.2702C8.95761 10.9726 9.13011 10.8272 9.26258 10.6638C9.58581 10.2643 9.90948 9.84551 10.009 9.64732C10.1086 9.44897 10.0587 9.27539 9.98396 9.12671C9.90948 8.97803 9.31233 7.51538 9.06359 6.92022C8.82102 6.34102 8.57507 6.41924 8.39167 6.41016C8.21769 6.40151 8.01855 6.39976 7.8194 6.39976C7.6204 6.39976 7.29688 6.47402 7.02311 6.77168C6.74948 7.06919 5.97822 7.78799 5.97822 9.25064C5.97822 10.7133 7.04813 12.1263 7.19738 12.3246C7.34663 12.523 9.30291 15.5244 12.2981 16.8114C13.0105 17.1179 13.5665 17.3005 14.0003 17.4375C14.7156 17.6637 15.3664 17.6317 15.8809 17.5553C16.4547 17.4699 17.6473 16.8363 17.8964 16.1423C18.1451 15.4481 18.1451 14.8532 18.0704 14.7292C17.9959 14.6052 17.7967 14.531 17.4982 14.3821Z"/>
                    </svg>
                  </a>
                  <a href="#">
                    <svg width="14" height="26" viewBox="0 0 14 26"  xmlns="http://www.w3.org/2000/svg">
                      <path d="M13.499 0.187V4.312H11.046C9.124 4.312 8.765 5.234 8.765 6.562V9.515H13.343L12.734 14.14H8.765V25.999H3.984V14.14H0V9.515H3.984V6.109C3.984 2.156 6.406 0 9.937 0C11.624 0 13.078 0.125 13.5 0.187H13.499Z" />
                    </svg>
                  </a>
                  <a href="#">
                    <svg width="30" height="30" viewBox="0 0 30 30" xmlns="http://www.w3.org/2000/svg">
                      <rect x="0.5" y="0.5" width="29" height="29" rx="14.5"/>
                      <path d="M15 28C22.1814 28 28 22.1814 28 15C28 7.81858 22.1814 2 15 2C7.81858 2 2 7.81858 2 15C2 22.1814 7.81858 28 15 28ZM7.94858 14.7183L20.4827 9.88558C21.0645 9.67542 21.5726 10.0275 21.3841 10.9072L21.3852 10.9061L19.251 20.9605C19.0928 21.6733 18.6693 21.8467 18.0767 21.5108L14.8267 19.1156L13.2591 20.6257C13.0857 20.7991 12.9395 20.9453 12.6037 20.9453L12.8344 17.6379L18.8577 12.1963C19.1199 11.9656 18.7992 11.8356 18.4537 12.0653L11.0101 16.7517L7.80125 15.7507C7.10467 15.5297 7.0895 15.0542 7.94858 14.7183Z" fill="white"/>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

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
	</div>, 
	document.getElementById("root")
);
