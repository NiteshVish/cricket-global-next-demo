"use client";
import React from "react";
import { useState } from "react";
import { Send } from "react-iconly";
import Link from "next/link";
import Script from "next/script";



// import Logo from 'assets/images/LogoBase.webp'

export default function Contactpage() {
  return (
    
    <div>
      <div>
        {/*<< All JS Plugins >>*/}
      <Script src="assets/js/jquery-3.7.1.min.js"></Script>
      {/*<< Viewport Js >>*/}
      <Script src="assets/js/viewport.jquery.js"></Script>
      {/*<< Bootstrap Js >>*/}
      <Script src="assets/js/bootstrap.bundle.min.js"></Script>
      {/*<< nice-selec Js >>*/}
      <Script src="assets/js/jquery.nice-select.min.js"></Script>
      {/*<< Waypoints Js >>*/}
      <Script src="assets/js/jquery.waypoints.js"></Script>
      {/*<< Counterup Js >>*/}
      <Script src="assets/js/jquery.counterup.min.js"></Script>
      {/*<< Swiper Slider Js >>*/}
      <Script src="assets/js/swiper-bundle.min.js"></Script>
      {/*<< MeanMenu Js >>*/}
      <Script src="assets/js/jquery.meanmenu.min.js"></Script>
      {/*<< Parallaxie Js >>*/}
      <Script src="assets/js/parallaxie.js"></Script>
      {/*<< Magnific Popup Js >>*/}
      <Script src="assets/js/jquery.magnific-popup.min.js"></Script>
      {/*<< Wow Animation Js >>*/}
      <Script src="assets/js/wow.min.js"></Script>
      {/*<< Gsap Animation Js >>*/}
      <Script src="assets/js/gsap.min.js"></Script>
      {/*<< ScrollTrigger Js >>*/}
      <Script src="assets/js/ScrollTrigger.min.js"></Script>
      {/*<< SplitText Js >>*/}
      <Script src="assets/js/SplitText.min.js"></Script>
      {/*<< splitType Js >>*/}
      <Script src="assets/js/splitType.js"></Script>
      {/*<< Ajax.js >>*/}
      <Script src="assets/js/ajax-mail.js"></Script>
      {/*<< Main.js >>*/}
      <Script src="assets/js/main.js"></Script>

      </div>
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

     {/* Offcanvas Area Start*/}
        <div className="fix-area">
          <div className="offcanvas__info">
            <div className="offcanvas__wrapper">
              <div className="offcanvas__content">
                <div className="offcanvas__top mb-5 d-flex justify-content-between align-items-center">
                  <div className="offcanvas__logo">
                    <Link href="/">
                      <img src="assets/images/LogoBase2.png" alt="logo-img" />
                    </Link>
                  </div>
                  <div className="offcanvas__close">
                    <button>
                      <i className="fas fa-times"></i>
                    </button>
                  </div>
                </div>
                <p className="text d-none d-xl-block">
                  We at Cricket Lovers Global take pride in equally supporting
                  men and women cricket. In fact, promoting and creating
                  awareness about women cricket is very close to our heart.
                </p>
                <div className="mobile-menu fix mb-3"></div>
                <div className="sidebar-image mt-4 d-none d-xl-block">
                  <img
                    className="w-100"
                    src="assets/img/sidebar-image.jpg"
                    alt="img"
                  />
                </div>
                <div className="offcanvas__contact">
                  <h4>Contact Info</h4>
                  <ul>
                    <li className="d-flex align-items-center">
                      <div className="offcanvas__contact-icon">
                        <i className="fal fa-map-marker-alt"></i>
                      </div>
                      <div className="offcanvas__contact-text">
                        <a target="_blank" href="/contact">
                          20 Berne Rd, Thornton Heath CR7 7BG, United Kingdom
                        </a>
                      </div>
                    </li>
                    <li className="d-flex align-items-center">
                      <div className="offcanvas__contact-icon mr-15">
                        <i className="fal fa-envelope"></i>
                      </div>
                      <div className="offcanvas__contact-text">
                        <a href="info@cricketloversglobal.com">
                          <span className="info@cricketloversglobal.com">
                            info@cricketloversglobal.com
                          </span>
                        </a>
                      </div>
                    </li>
                    
                    
                  </ul>
                  <Link href="/membership" className="theme-btn mt-4">
                    JOIN NOW <i className="fa-solid fa-arrow-up-right"></i>
                  </Link>
                  <div className="social-icon d-flex align-items-center">
                  <a href="https://www.facebook.com/p/Cricket-Lovers-Global-100063728492925/">
                      <i className="fab fa-facebook-f"></i>
                    </a>
                  <a href="https://x.com/CricketLoversG">
                      <i className="fab fa-twitter"></i>
                    </a>
                  <a href="https://www.instagram.com/cricketloversglobal/">
                    <i className="fab fa-instagram"></i>
                    </a>
                    
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="offcanvas__overlay"></div>

      {/* Header Section Start*/}
      <header id="header-sticky" className="header-1">
          <div className="container">
            <div className="mega-menu-wrapper">
              <div className="header-main">
                <Link href="/home" className="logo">
                  <img src="assets/images/Logo.webp" alt="img" />
                </Link>
                <div className="header-left">
                  <div className="mean__menu-wrapper">
                    <div className="main-menu">
                      <nav id="mobile-menu">
                        <ul>
                          <li className="has-dropdown active menu-thumb">
                            <Link href="/about">about</Link>
                          </li>
                          <li className="has-dropdown active d-xl-none ">
                            <Link href="/" className="border-none">
                              Home
                            </Link>
                          </li>
                          <li >
                            <Link href="/cares">Cares</Link>
                          </li>
                          <li>
                                <Link href="https://clgacademy.co.uk/">Clg-Academy</Link>
                              </li>
                          <li className="has-dropdown">
                            <a href="/events"> Events </a>
                            
                      
                            
                          </li>
                          <li>
                            <Link href="/gallery">Gallery</Link>
                          </li>
                          <li>
                            <Link href="/membership">Membership</Link>
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
                  {/* <Link href="/login" className="theme-btn d-none d-xl-block">
                    Become a Member{" "}
                    
                    <i className="fa-solid fa-arrow-up-right"></i>
                  </Link> */}
                  <Link style={{fontWeight:"20"}} href="/login" className="theme-btn">
                      Login <span style={{fontWeight:"40px"}}>/ </span>Signup
                    </Link>

                  <div className="header__hamburger d-xl-block my-auto">
                    <div className="sidebar__toggle">
                      <div className="header-bar">
                        <span></span> <span></span>
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
                <Link href="/home">Home</Link>
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
              Join <br /> Cricket Lovers Global <br /> Newsletter​
            </h3>
            
            <form action="#">
              <input type="text" placeholder="Your Email Address" />
              <Link href="/membership">
              <button className="theme-btn" type="submit">
                sign up now <i className="fa-solid fa-arrow-up-right"></i>
              </button></Link>
            </form>
            <div className="footer-right">
              <h3>
                Follow our <br />
              </h3>
              <h3>social network</h3>
              <div className="social-right">
                <div className="social-icon d-flex align-items-center">
                  <a href="https://www.facebook.com/p/Cricket-Lovers-Global-100063728492925/">
                    <i className="fab fa-facebook-f"></i>
                  </a>
                  <a href="https://x.com/CricketLoversG">
                    <i className="fab fa-twitter"></i>
                  </a>
                  <a href="https://www.instagram.com/cricketloversglobal/">
  <i className="fab fa-instagram"></i>
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
                    <p className="mb-3">Passion beyond boundaries.</p>
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
                      <Link href="/about">About</Link>
                    </li>
                    <li>
                      <Link href="/membership">Membership</Link>
                    </li>
                    <li>
                      <Link href="/events">Events</Link>
                    </li>
                    <li>
                      <Link href="https://clgacademy.co.uk/">CLG Academy</Link>
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
                      <Link href="/contact"> Contact us</Link>
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
                
              </div>
            </div>
          </div>
          <div className="footer-bottom">
            <p className="wow fadeInLeft" data-wow-delay=".3s">
              © 2025<b> CRICKET LOVERS GLOBAL</b>. All Rights Reserved.
            </p>
            
          </div>
        </div>
      </footer>

          </div>
  );
}
