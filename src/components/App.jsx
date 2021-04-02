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
                <Socials/>
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
          <div className="header-body__info">
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
          <div className="header-body__img">
            <img src="img/header-body__img.svg" alt="web developing" />
          </div>
        </div>
      </div>
      </header>

      <div id="my-content">
        <section className="tools">
          <div className="container">
            <div className="tools__cards">
              <div className="card card_design">
                <img src="img/cards/01.png" alt="figma" />
                <img src="img/cards/03.png" alt="photoshop" />
                <img src="img/cards/02.png" alt="adobe illustrator" />
              </div>
              <div className="card card_frontend">
                <img src="img/cards/09.png" alt="html" />
                <img src="img/cards/04.png" alt="css" />
                <img src="img/cards/07.png" alt="react" />
                <img src="img/cards/08.png" alt="gulp" />
                <img src="img/cards/06.png" alt="jquery" />
                <img src="img/cards/05.png" alt="js" />
              </div>
              <div className="card card_backend">
                <img src="img/cards/10.png" alt="ejs" />
                <img src="img/cards/11.png" alt="express" />
                <img src="img/cards/12.png" alt="mongoose" />
                <img src="img/cards/13.png" alt="mongodb" />
              </div>
            </div>
            <div className="tools__info">
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
						/>
            <div className="works__portfolio">
              <WorkCard 
								image="img/works/01.png"
								name="name 1"
							/>
              <div className="works__card">
                <a href="#">
                  <img src="img/works/02.png" alt="work 2" />
                  <div className="black-overlay"></div>
                  <div className="bottom-pop-up">Sample 2</div>
                </a>
              </div>
              <div className="works__card">
                <a href="#">
                  <img src="img/works/03.png" alt="work 3" />
                  <div className="black-overlay"></div>
                  <div className="bottom-pop-up">Sample 3</div>
                </a>
              </div>
              <div className="works__card">
                <a href="#">
                  <img src="img/works/04.png" alt="work 4" />
                  <div className="black-overlay"></div>
                  <div className="bottom-pop-up">Sample 4</div>
                </a>
              </div>
              <div className="works__card">
                <a href="#">
                  <img src="img/works/05.png" alt="work 5" />
                  <div className="black-overlay"></div>
                  <div className="bottom-pop-up">Sample 5</div>
                </a>
              </div>
              <div className="works__card">
                <a href="#">
                  <img src="img/works/06.png" alt="work 6" />
                  <div className="black-overlay"></div>
                  <div className="bottom-pop-up">Sample 6</div>
                </a>
              </div>
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
            <div className="contacts__info">
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
          <div className="footer__socials socials">
            <a href="#" className="twitter">
              <svg
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                width="26"
                height="28"
                viewBox="0 0 26 28"
              >
                <title>twitter</title>
                <path
                  d="M25.312 6.375c-0.688 1-1.547 1.891-2.531 2.609 0.016 0.219 0.016 0.438 0.016 0.656 0 6.672-5.078 14.359-14.359 14.359-2.859 0-5.516-0.828-7.75-2.266 0.406 0.047 0.797 0.063 1.219 0.063 2.359 0 4.531-0.797 6.266-2.156-2.219-0.047-4.078-1.5-4.719-3.5 0.313 0.047 0.625 0.078 0.953 0.078 0.453 0 0.906-0.063 1.328-0.172-2.312-0.469-4.047-2.5-4.047-4.953v-0.063c0.672 0.375 1.453 0.609 2.281 0.641-1.359-0.906-2.25-2.453-2.25-4.203 0-0.938 0.25-1.797 0.688-2.547 2.484 3.062 6.219 5.063 10.406 5.281-0.078-0.375-0.125-0.766-0.125-1.156 0-2.781 2.25-5.047 5.047-5.047 1.453 0 2.766 0.609 3.687 1.594 1.141-0.219 2.234-0.641 3.203-1.219-0.375 1.172-1.172 2.156-2.219 2.781 1.016-0.109 2-0.391 2.906-0.781z"
                ></path>
              </svg>
            </a>
            <a href="#" className="facebook">
              <svg
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="28"
                viewBox="0 0 16 28"
              >
                <title>facebook</title>
                <path
                  d="M14.984 0.187v4.125h-2.453c-1.922 0-2.281 0.922-2.281 2.25v2.953h4.578l-0.609 4.625h-3.969v11.859h-4.781v-11.859h-3.984v-4.625h3.984v-3.406c0-3.953 2.422-6.109 5.953-6.109 1.687 0 3.141 0.125 3.563 0.187z"
                ></path>
              </svg>
            </a>
            <a href="#" className="instagram">
              <svg
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="28"
                viewBox="0 0 24 28"
              >
                <title>instagram</title>
                <path
                  d="M16 14c0-2.203-1.797-4-4-4s-4 1.797-4 4 1.797 4 4 4 4-1.797 4-4zM18.156 14c0 3.406-2.75 6.156-6.156 6.156s-6.156-2.75-6.156-6.156 2.75-6.156 6.156-6.156 6.156 2.75 6.156 6.156zM19.844 7.594c0 0.797-0.641 1.437-1.437 1.437s-1.437-0.641-1.437-1.437 0.641-1.437 1.437-1.437 1.437 0.641 1.437 1.437zM12 4.156c-1.75 0-5.5-0.141-7.078 0.484-0.547 0.219-0.953 0.484-1.375 0.906s-0.688 0.828-0.906 1.375c-0.625 1.578-0.484 5.328-0.484 7.078s-0.141 5.5 0.484 7.078c0.219 0.547 0.484 0.953 0.906 1.375s0.828 0.688 1.375 0.906c1.578 0.625 5.328 0.484 7.078 0.484s5.5 0.141 7.078-0.484c0.547-0.219 0.953-0.484 1.375-0.906s0.688-0.828 0.906-1.375c0.625-1.578 0.484-5.328 0.484-7.078s0.141-5.5-0.484-7.078c-0.219-0.547-0.484-0.953-0.906-1.375s-0.828-0.688-1.375-0.906c-1.578-0.625-5.328-0.484-7.078-0.484zM24 14c0 1.656 0.016 3.297-0.078 4.953-0.094 1.922-0.531 3.625-1.937 5.031s-3.109 1.844-5.031 1.937c-1.656 0.094-3.297 0.078-4.953 0.078s-3.297 0.016-4.953-0.078c-1.922-0.094-3.625-0.531-5.031-1.937s-1.844-3.109-1.937-5.031c-0.094-1.656-0.078-3.297-0.078-4.953s-0.016-3.297 0.078-4.953c0.094-1.922 0.531-3.625 1.937-5.031s3.109-1.844 5.031-1.937c1.656-0.094 3.297-0.078 4.953-0.078s3.297-0.016 4.953 0.078c1.922 0.094 3.625 0.531 5.031 1.937s1.844 3.109 1.937 5.031c0.094 1.656 0.078 3.297 0.078 4.953z"
                ></path>
              </svg>
            </a>
            <a href="#" className="linkedin">
              <svg
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="28"
                viewBox="0 0 24 28"
              >
                <title>linkedin</title>
                <path
                  d="M5.453 9.766v15.484h-5.156v-15.484h5.156zM5.781 4.984c0.016 1.484-1.109 2.672-2.906 2.672v0h-0.031c-1.734 0-2.844-1.188-2.844-2.672 0-1.516 1.156-2.672 2.906-2.672 1.766 0 2.859 1.156 2.875 2.672zM24 16.375v8.875h-5.141v-8.281c0-2.078-0.75-3.5-2.609-3.5-1.422 0-2.266 0.953-2.641 1.875-0.125 0.344-0.172 0.797-0.172 1.266v8.641h-5.141c0.063-14.031 0-15.484 0-15.484h5.141v2.25h-0.031c0.672-1.062 1.891-2.609 4.672-2.609 3.391 0 5.922 2.219 5.922 6.969z"
                ></path>
              </svg>
            </a>
          </div>
        </div>
      </footer>
	</div>, 
	document.getElementById("root")
);
