"use client";
import React from "react";
import { useState } from "react";
import { Send } from "react-iconly";
import Link from "next/link";


// import Logo from 'assets/images/LogoBase.webp'

export default function Contactpage() {
  return (
    <div>
      {/* Preloader Start  */}
      {/* <div id="preloader" className="preloader">
            <div className="animation-preloader">
                <div className="spinner">                
                </div>
                <div className="txt-loading">
                    <span data-text-preloader="N" className="letters-loading">
                        N
                    </span>
                    <span data-text-preloader="I" className="letters-loading">
                        I
                    </span>
                    <span data-text-preloader="T" className="letters-loading">
                        T
                    </span>
                    <span data-text-preloader="R" className="letters-loading">
                        R
                    </span>
                    <span data-text-preloader="O" className="letters-loading">
                        O
                    </span>
                </div>
                <p className="text-center">Loading</p>
            </div>
            <div className="loader">
                <div className="row">
                    <div className="col-3 loader-section section-left">
                        <div className="bg"></div>
                    </div>
                    <div className="col-3 loader-section section-left">
                        <div className="bg"></div>
                    </div>
                    <div className="col-3 loader-section section-right">
                        <div className="bg"></div>
                    </div>
                    <div className="col-3 loader-section section-right">
                        <div className="bg"></div>
                    </div>
                </div>
            </div>
        </div> */}
      {/* Back To Top Start */}
      <button id="back-top" className="back-to-top">
        <i className="fa-regular fa-arrow-up"></i>
      </button>

      {/* MouseCursor Start */}
      <div className="mouseCursor cursor-outer"></div>
      <div className="mouseCursor cursor-inner"></div>

      {/* Offcanvas Area Start */}
      {/* <div className="fix-area">
            <div className="offcanvas__info">
                <div className="offcanvas__wrapper">
                    <div className="offcanvas__content">
                        <div className="offcanvas__top mb-5 d-flex justify-content-between align-items-center">
                            <div className="offcanvas__logo">
                                <a href="index.html">
                                    <img src="assets/img/logo/logo.svg" alt="logo-img">
                                </a>
                            </div>
                            <div className="offcanvas__close">
                                <button>
                                <i className="fas fa-times"></i>
                                </button>
                            </div>
                        </div>
                        <p className="text d-none d-xl-block">
                            Nullam dignissim, ante scelerisque the  is euismod fermentum odio sem semper the is erat, a feugiat leo urna eget eros. Duis Aenean a imperdiet risus.
                        </p>
                        <div className="mobile-menu fix mb-3"></div>
                        <div className="sidebar-image mt-4 d-none d-xl-block">
                            <img className="w-100" src="assets/img/sidebar-image.jpg" alt="img">
                        </div>
                        <div className="offcanvas__contact">
                            <h4>Contact Info</h4>
                            <ul>
                                <li className="d-flex align-items-center">
                                    <div className="offcanvas__contact-icon">
                                        <i className="fal fa-map-marker-alt"></i>
                                    </div>
                                    <div className="offcanvas__contact-text">
                                        <a target="_blank" href="#">Main Street, Melbourne, Australia</a>
                                    </div>
                                </li>
                                <li className="d-flex align-items-center">
                                    <div className="offcanvas__contact-icon mr-15">
                                        <i className="fal fa-envelope"></i>
                                    </div>
                                    <div className="offcanvas__contact-text">
                                        <a href="mailto:info@example.com"><span className="mailto:info@example.com">info@example.com</span></a>
                                    </div>
                                </li>
                                <li className="d-flex align-items-center">
                                    <div className="offcanvas__contact-icon mr-15">
                                        <i className="fal fa-clock"></i>
                                    </div>
                                    <div className="offcanvas__contact-text">
                                        <a target="_blank" href="#">Mod-friday, 09am -05pm</a>
                                    </div>
                                </li>
                                <li className="d-flex align-items-center">
                                    <div className="offcanvas__contact-icon mr-15">
                                        <i className="far fa-phone"></i>
                                    </div>
                                    <div className="offcanvas__contact-text">
                                        <a href="tel:+11002345909">+11002345909</a>
                                    </div>
                                </li>
                            </ul>
                            <a href="club-ranking.html" className="theme-btn mt-4">
                               JOIN NOW <i className="fa-solid fa-arrow-up-right"></i>
                            </a>
                            <div className="social-icon d-flex align-items-center">
                                <a href="#"><i className="fab fa-facebook-f"></i></a>
                                <a href="#"><i className="fab fa-twitter"></i></a>
                                <a href="#"><i className="fab fa-youtube"></i></a>
                                <a href="#"><i className="fab fa-linkedin-in"></i></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div> */}
      <div className="offcanvas__overlay"></div>

      {/* Header Section Start*/}
      <header id="header-sticky" className="header-1">
        <div className="container">
          <div className="mega-menu-wrapper">
            <div className="header-main">
              <a href="index.html" className="logo">
                <img src="assets/images/Logo.webp" alt="img" />
              </a>
              <div className="header-left">
                <div className="mean__menu-wrapper">
                  <div className="main-menu">
                    <nav id="mobile-menu">
                      <ul>
                        <li className="has-dropdown active menu-thumb">
                           <Link href="/home">Home</Link>
                          {/* <ul className="submenu has-homemenu">
                            <li>
                              <div className="homemenu-items">
                                <div className="homemenu">
                                  <div className="homemenu-thumb">
                                    <img
                                      src="assets/img/header/home-1.jpg"
                                      alt="img"
                                    />
                                    <div className="demo-button">
                                      <a
                                        href="index.html"
                                        className="gt-theme-btn"
                                      >
                                        Demo page
                                      </a>
                                    </div>
                                  </div>
                                  <div className="homemenu-content text-center">
                                    <h4 className="homemenu-title">Football</h4>
                                  </div>
                                </div>
                                <div className="homemenu">
                                  <div className="homemenu-thumb mb-15">
                                    <img
                                      src="assets/img/header/home-2.jpg"
                                      alt="img"
                                    />
                                    <div className="demo-button">
                                      <a
                                        href="index-2.html"
                                        className="gt-theme-btn"
                                      >
                                        Demo page
                                      </a>
                                    </div>
                                  </div>
                                  <div className="homemenu-content text-center">
                                    <h4 className="homemenu-title">
                                      Basketball
                                    </h4>
                                  </div>
                                </div>
                                <div className="homemenu">
                                  <div className="homemenu-thumb mb-15">
                                    <img
                                      src="assets/img/header/home-3.jpg"
                                      alt="img"
                                    />
                                    <div className="demo-button">
                                      <a
                                        href="index-3.html"
                                        className="gt-theme-btn"
                                      >
                                        Demo page
                                      </a>
                                    </div>
                                  </div>
                                  <div className="homemenu-content text-center">
                                    <h4 className="homemenu-title">
                                      Rugby Club
                                    </h4>
                                  </div>
                                </div>
                              </div>
                            </li>
                          </ul> */}
                        </li>
                        <li className="has-dropdown active d-xl-none">
                          <a href="/" className="border-none">
                            {" "}
                            Home{" "}
                          </a>
                          
                        </li>
                        <li>
                          

                           <Link href="/about">About Us</Link>

                          
                        </li>
                        <li className="has-dropdown">
                          <a href="/home"> Pages </a>
                          <ul className="submenu">
                            <li>
                               <Link href="/about">About Us</Link>
                            </li>
                            <li>
                               <Link href="/cares">Cares</Link>
                            </li>
                            <li>
                               <Link href="/events">Events</Link>
                            </li>
                            
                            {/* <li>
                              <a href="404.html">404 Page</a>
                            </li> */}
                          </ul>
                        </li>
                        <li>
                          <Link href="/gallery">Gallery</Link>
                        </li>
                        <li>
                          <Link href="/membership">Membership</Link>
                          {/* <ul className="submenu">
                            <li>
                              <a href="news-grid.html">Blog Grid</a>
                            </li>
                            <li>
                              <a href="news.html">Blog Standard</a>
                            </li>
                            <li>
                              <a href="news-details.html">Blog Details</a>
                            </li>
                          </ul> */}
                        </li>
                        <li>
                          <Link href="/contact">Contact</Link>
                        </li>
                      </ul>
                    </nav>
                  </div>
                </div>
              </div>
              <div className="header-right d-flex justify-content-end align-items-center">
                <a
                  href="club-ranking.html"
                  className="theme-btn d-none d-xl-block"
                >
                  JOIN NOW <i className="fa-solid fa-arrow-up-right"></i>
                </a>
                <div className="header__hamburger d-xl-block my-auto">
                  <div className="sidebar__toggle">
                    <div className="header-bar">
                      <span></span>
                      <span></span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
      {/* Header Top Section End */}

      <div
        className="gt-breadcrumb-wrapper bg-cover"
        style={{ backgroundImage: "url('assets/img/breadcrumb-bg.jpg')" }}
      >
        <div className="container">
          <div className="gt-page-heading">
            <div className="gt-breadcrumb-sub-title">
              <h1 className="text-white wow fadeInUp" data-wow-delay=".3s">
                Contact us
              </h1>
            </div>
            <ul
              className="gt-breadcrumb-items wow fadeInUp"
              data-wow-delay=".5s"
            >
              <li>
                <a href="index.html">Home</a>
              </li>
              <li>
                <i className="fa-solid fa-chevron-right"></i>
              </li>
              <li>Contact</li>
            </ul>
          </div>
        </div>
      </div>

      {/* contact Info Section Start */}
      <section className="contact-info-section fix">
        <div className="container">
          <div className="contact-info-wrapper">
            <div className="row g-4">
              <div className="col-xl-4 col-lg-4 col-md-6 col-sm-6">
                <div className="contact-info-items">
                  <h3>EMAIL NOW</h3>
                  <p>
                    <a href="mailto:info@example.com">info@cricketloversglobal.com </a>
                    {/* <a href="mailto:explornited808@gmail.com">
                      info@cricketloversglobal.com{" "}
                    </a> */}
                  </p>
                </div>
              </div>
              <div className="col-xl-4 col-lg-4 col-md-6 col-sm-6">
                <div className="contact-info-items">
                  <h3>location</h3>
                  <p>
20 Berne Rd, Thornton Heath CR7 7BG, United Kingdom                  </p>
                </div>
              </div>
              {/* <div className="col-xl-4 col-lg-4 col-md-6 col-sm-6">
                 <div className="contact-info-items"> 
                  <h3></h3>
                  <p>
                    <a></a>
                    <a ></a>
                  </p>
                </div> 
              </div>*/}
            </div>
          </div>
        </div>
      </section>

      {/* contact Box Section Start */}
      <section className="contact-box-section fix section-padding pt-0">
        <div className="container">
          <div className="contact-box-wrapper">
            <div className="row g-4">
              <div className="col-lg-5">
                <div className="map-area">
                    
                  <iframe
                  
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2489.430865867254!2d-0.1035222!3d51.395137399999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487607ea450a95a1%3A0x6e1d6b6866db7687!2sCricket%20Lovers%20Global!5e0!3m2!1sen!2sin!4v1761392931126!5m2!1sen!2sin"
                    style={{ border: 0, allowFullScreen: "", loading: "lazy" }}
                  ></iframe>
                </div>
              </div>
              <div className="col-lg-7">
                <div className="gt-contact-right-items">
                  <h2>Contact us</h2>
                  {/* <p>
                    There will be no publication of your email address. Required
                    fields are indicated with a *.
                  </p> */}
                  <form
                    action="https://ex-coders.com/html/nitro/contact.php"
                    id="contact-form"
                    className="contact-form-box"
                  >
                    <div className="row g-4 align-items-center">
                      <div
                        className="col-lg-6 col-md-6 wow fadeInUp"
                        data-wow-delay=".3s"
                      >
                        <h5> Name</h5>
                        <div className="form-clt">
                          <input
                            type="text"
                            name="name"
                            id="name"
                            placeholder="Enter your name"
                          />
                        </div>
                      </div>
                      <div
                        className="col-lg-6 col-md-6 wow fadeInUp"
                        data-wow-delay=".5s"
                      >
                        <h5> Email</h5>
                        <div className="form-clt">
                          <input
                            type="text"
                            name="email"
                            id="email2"
                            placeholder="Enter your email"
                          />
                        </div>
                      </div>
                      
                      <div
                        className="col-lg-6 col-md-6 wow fadeInUp"
                        data-wow-delay=".5s"
                      >
                        <h5>Phone</h5>
                        <div className="form-clt">
                          <input
                            type="number"
                            name="number"
                            id="number"
                            placeholder="Enter your phone number"
                          />
                        </div>
                      </div>
                      <div
                        className="col-lg-6 col-md-6 wow fadeInUp"
                        data-wow-delay=".5s"
                      >
                        <h5>Service Type</h5>
                        

                        <div className="form-clt">
                          <input
                            type="text"
                            name="service"
                            id="email2"
                            placeholder="Services"
                          />
                        </div>
                      </div>
                      <div
                        className="col-xl-12 wow fadeInUp"
                        data-wow-delay=".3s"
                      >
                        <h5>Your Message</h5>
                        <div className="form-clt">
                          <textarea
                            name="message"
                            id="message"
                            placeholder="Type your message"
                          ></textarea>
                        </div>
                      </div>
                      <div
                        className="col-lg-12 wow fadeInUp"
                        data-wow-delay=".3s"
                      >
                        <h5>Address</h5>
                        <div className="form-clt">
                          <textarea
                            name="address"
                            id="address"
                            placeholder="Enter your Address"
                          ></textarea>
                        </div>
                      </div>
                      <div
                        className="col-lg-12 wow fadeInUp"
                        data-wow-delay=".5s"
                      >
                        <button className="theme-btn mt-0" type="submit">
                          SEND MESSAGE{" "}
                          <i className="fa-solid fa-arrow-up-right"></i>
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer Section Start */}
      {/* Footer Section Start*/}
      <footer
        className="footer-section section-padding pb-0 bg-cover"
        style={{
          backgroundImage: "url('assets/img/home-1/footer-bg.jpg')",
        }}
      >
        <div className="container">
          <div
            className="footer-subscribe-wrapper wow fadeInUp"
            data-wow-delay=".3s"
          >
            <h3>
              Join <br/> Cricket Lovers Global <br/> Newsletter​ 
            </h3>
            {/* <div><p>Become part of the incredible community and be
               among the first to know of events, offers and more.</p></div> */}
            
            <form action="#">
              <input type="text" placeholder="Your Email Address" />
              <button className="theme-btn" type="submit">
                sing up now <i className="fa-solid fa-arrow-up-right"></i>
              </button>
            </form>
            <div className="footer-right">
              <h3>
                Follow our <br />
                </h3>
                <h3>
                social network
             </h3>
              <div className="social-right">
                <div className="social-icon d-flex align-items-center">
                  <a href="#">
                    <i className="fab fa-facebook-f"></i>
                  </a>
                  <a href="#">
                    <i className="fab fa-twitter"></i>
                  </a>
                  <a href="#">
                    <i className="fab fa-vimeo-v"></i>
                  </a>
                  <a href="#">
                    <i className="fab fa-pinterest-p"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="footer-widget-wrapper">
            <div className="row justify-content-between">
              <div
                className="col-xl-4 col-lg-8 col-md-8 wow fadeInUp"
                data-wow-delay=".2s"
              >
                <div className="footer-widget-items">
                  <div className="widget-head">
                    <a href="index.html">
                      <img src="assets/images/LogoBase2.png" alt="img" />
                    </a>
                  </div>
                  <div className="footer-content">
                    <p className="mb-3">
                      Passion beyond boundaries.
                    </p>
                    
                  </div>
                </div>
              </div>
              <div
                className="col-xl-2 ps-lg-5 col-lg-4 col-md-4 wow fadeInUp"
                data-wow-delay=".4s"
              >
                <div className="footer-widget-items">
                  <div className="widget-head">
                    <h3>Our Links</h3>
                  </div>
                  <ul className="list-area">
                    <li>
  
                      <a href="about.html">About</a>
                    </li>
                    <li>
                      <a href="about.html">Membership</a>
                    </li>
                    <li>
                      <a href="about.html">Events
</a>
                    </li>
                    <li>
                      <a href="team.html">CLG Academy</a>
                    </li>
                  </ul>
                </div>
              </div>
              <div
                className="col-xl-2 col-lg-4 col-md-6 wow fadeInUp"
                data-wow-delay=".6s"
              >
                <div className="footer-widget-items">
                  <div className="widget-head">
                    <h3>Get in Touch </h3>
                  </div>
                  <ul className="footer-contact-list">
                    
                    <li>
                      <a href="tel:+12318005678990"> Contact us</a>
                    </li>
                    <li>
                      <a href="info@cricketloversglobal.com">
                        info@cricketloversglobal.com
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div
                className="col-xl-3 col-lg-4 col-md-6 wow fadeInUp"
                data-wow-delay=".8s"
              >
                <div className="footer-widget-items">
                  <div className="widget-head">
                    <h3>download our Club</h3>
                  </div>
                  <div className="app-items">
                    <img src="assets/img/google-play.png" alt="img" />
                    <img src="assets/img/app-store.png" alt="img" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="footer-bottom">
            <p className="wow fadeInLeft" data-wow-delay=".3s">
              © 2025<b> CRICKET LOVERS GLOBAL</b>. All Rights Reserved.
            </p>
            <ul className="footer-menu wow fadeInRight" data-wow-delay=".5s">
              <li>
                <a href="contact.html"> Cookies </a>
              </li>
              <li>
                <a href="contact.html"> Privacy </a>
              </li>
              <li>
                <a href="contact.html"> Terms </a>
              </li>
            </ul>
          </div>
        </div>
      </footer>

      {/*<< All JS Plugins >>*/}
      <script src="assets/js/jquery-3.7.1.min.js"></script>
      {/*<< Viewport Js >>*/}
      <script src="assets/js/viewport.jquery.js"></script>
      {/*<< Bootstrap Js >>*/}
      <script src="assets/js/bootstrap.bundle.min.js"></script>
      {/*<< nice-selec Js >>*/}
      <script src="assets/js/jquery.nice-select.min.js"></script>
      {/*<< Waypoints Js >>*/}
      <script src="assets/js/jquery.waypoints.js"></script>
      {/*<< Counterup Js >>*/}
      <script src="assets/js/jquery.counterup.min.js"></script>
      {/*<< Swiper Slider Js >>*/}
      <script src="assets/js/swiper-bundle.min.js"></script>
      {/*<< MeanMenu Js >>*/}
      <script src="assets/js/jquery.meanmenu.min.js"></script>
      {/*<< Parallaxie Js >>*/}
      <script src="assets/js/parallaxie.js"></script>
      {/*<< Magnific Popup Js >>*/}
      <script src="assets/js/jquery.magnific-popup.min.js"></script>
      {/*<< Wow Animation Js >>*/}
      <script src="assets/js/wow.min.js"></script>
      {/*<< Gsap Animation Js >>*/}
      <script src="assets/js/gsap.min.js"></script>
      {/*<< ScrollTrigger Js >>*/}
      <script src="assets/js/ScrollTrigger.min.js"></script>
      {/*<< SplitText Js >>*/}
      <script src="assets/js/SplitText.min.js"></script>
      {/*<< splitType Js >>*/}
      <script src="assets/js/splitType.js"></script>
      {/*<< Ajax.js >>*/}
      <script src="assets/js/ajax-mail.js"></script>
      {/*<< Main.js >>*/}
      <script src="assets/js/main.js"></script>
    </div>
  );
}
