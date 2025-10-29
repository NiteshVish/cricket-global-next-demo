import React from 'react';
import Link from "next/link";
import Script from "next/script";


export default function Eventpage() {
    return (
       
    <div>
      <div>
        {/* << All JS Plugins >>*/}
        <Script src="assets/js/jquery-3.7.1.min.js"></Script>
        {/* << Viewport Js >>*/}
        <Script src="assets/js/viewport.jquery.js"></Script>
        {/* << Bootstrap Js >>*/}
        <Script src="assets/js/bootstrap.bundle.min.js"></Script>
        {/* << nice-selec Js >>*/}
        <Script src="assets/js/jquery.nice-select.min.js"></Script>
        {/* << Waypoints Js >>*/}
        <Script src="assets/js/jquery.waypoints.js"></Script>
        {/* << Counterup Js >>*/}
        <Script src="assets/js/jquery.counterup.min.js"></Script>
        {/* << Swiper Slider Js >>*/}
        <Script src="assets/js/swiper-bundle.min.js"></Script>
        {/* << MeanMenu Js >>*/}
        <Script src="assets/js/jquery.meanmenu.min.js"></Script>
        {/* << Parallaxie Js >>*/}
        <Script src="assets/js/parallaxie.js"></Script>
        {/* << Magnific Popup Js >>*/}
        <Script src="assets/js/jquery.magnific-popup.min.js"></Script>
        {/* << Wow Animation Js >>*/}
        <Script src="assets/js/wow.min.js"></Script>
        {/* << Gsap Animation Js >>*/}
        <Script src="assets/js/gsap.min.js"></Script>
        {/* << ScrollTrigger Js >>*/}
        <Script src="assets/js/ScrollTrigger.min.js"></Script>
        {/* << SplitText Js >>*/}
        <Script src="assets/js/SplitText.min.js"></Script>
        {/* << splitType Js >>*/}
        <Script src="assets/js/splitType.js"></Script>
        {/* << Main.js >>*/}
        <Script src="assets/js/main.js"></Script>
      </div>
<div>
            {/*Favcion */}
        <link rel="shortcut icon" href="assets/img/favicon.svg"/>
        {/*Bootstrap min.css */}
        <link rel="stylesheet" href="assets/css/bootstrap.min.css"/>
        {/*All Min Css */}
        <link rel="stylesheet" href="assets/css/all.min.css"/>
        {/*Animate.css */}
        <link rel="stylesheet" href="assets/css/animate.css"/>
        {/*Magnific Popup.css */}
        <link rel="stylesheet" href="assets/css/magnific-popup.css"/>
        {/*MeanMenu.css */}
        <link rel="stylesheet" href="assets/css/meanmenu.css"/>
        {/*Swiper Bundle.css */}
        <link rel="stylesheet" href="assets/css/swiper-bundle.min.css"/>
        {/*Nice Select.css */}
        <link rel="stylesheet" href="assets/css/nice-select.css"/>
        {/*Main.css */}
        <link rel="stylesheet" href="assets/css/main.css"/>

        </div>
        

         {/*  Back To Top Start */}
        <button id="back-top" className="back-to-top">
            <i className="fa-regular fa-arrow-up"></i>
        </button>

        {/*  MouseCursor Start */}
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
                           <Link href="/">Home</Link>
                          
                        </li>
                        <li className="has-dropdown active d-xl-none">
                          <Link href="/" className="border-none">
                            {" "}
                            Home{" "}
                          </Link>
                          
                        </li>
                        <li>
                          

                           <Link href="/about">About Us</Link>

                          
                        </li>
                        <li className="has-dropdown">
                          <a href="/pages"> Pages </a>
                          <ul className="submenu">
                            <li>
                                <Link href="https://clgacademy.co.uk/">Clg-Academy</Link>
                            </li>
                            <li>
                               <Link href="/cares">Cares</Link>
                            </li>
                            <li>
                               <Link href="/events">Events</Link>
                            </li>
                            
                            
                          </ul>
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
                
                          <Link href="/contact" className="theme-btn d-none d-xl-block">Become a Member <i className="fa-solid fa-arrow-up-right"></i></Link>
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

        <div className="gt-breadcrumb-wrapper bg-cover" style={{backgroundImage: "url('assets/img/breadcrumb-bg.jpg')"}}>
            <div className="container">
                <div className="gt-page-heading">
                    <div className="gt-breadcrumb-sub-title">
                        <h1 className="text-white wow fadeInUp" data-wow-delay=".3s">Tickets</h1>
                    </div>
                    <ul className="gt-breadcrumb-items wow fadeInUp" data-wow-delay=".5s">
                        <li>
                            <a href="/home">
                               Home
                            </a>
                        </li>
                        <li>
                            <i className="fa-solid fa-chevron-right"></i>
                        </li>
                        <li>
                          Tickets
                        </li>
                    </ul>
                </div>
            </div>
        </div>
        
        
        {/*  Ticket Section Start */}
        <section className="ticket-section section-padding">
            <div className="container">
                <div className="ticket-wrapper">
                    <h2 className="mb-3">Experience the thrill live in the stadium!</h2>
                    <p>
                        Get your tickets to watch your favorite team in action.
                    </p>
                    <ul className="calender-list">
                        <li>
                            October 3, 2022 @ 8:00 am - July 9, 2032 @ 5:00 pm
                        </li>
                        <li>
                            PRICE :  99.99
                        </li>
                    </ul>
                    {/* <h3 className="ticket-title">
                        Ticket Types:
                    </h3> */}
                    {/* <ul className="check-list">
                        <li>
                            <i className="fa-solid fa-circle-check"></i>
                            <b>Single Match Tickets –</b>
                             Choose your match and seat location.
                        </li>
                        <li>
                            <i className="fa-solid fa-circle-check"></i>
                            <b>Season Tickets –</b>
                            Enjoy every home game with priority seating and special discounts.
                        </li>
                        <li>
                            <i className="fa-solid fa-circle-check"></i>
                            <b>VIP Hospitality –</b>
                            Premium seating, exclusive lounge access, and complimentary refreshments.
                        </li>
                        <li>
                            <i className="fa-solid fa-circle-check"></i>
                            <b>Family Packages –</b>
                            Affordable seating for families with children.
                        </li>
                    </ul> */}
                    <div className="row g-4 mt-4">
                        <div className="col-lg-6">
                            <h3 className="ticket-title">
                               How to Buy:
                            </h3>
                            <ul className="check-list">
                                <li>
                                    <i className="fa-solid fa-circle-check"></i>
                                    Purchase online through our official website.
                                </li>
                                {/* <li>
                                    <i className="fa-solid fa-circle-check"></i>
                                   Visit the club ticket office during business hours.
                                </li> */}
                                <li>
                                    <i className="fa-solid fa-circle-check"></i>
                                    Buy from authorized ticketing partners.
                                </li>
                            </ul>
                        </div>
                        <div className="col-lg-6">
                            <h3 className="ticket-title">
                              Benefits of Buying Official Tickets:
                            </h3>
                            <ul className="check-list">
                                <li>
                                    <i className="fa-solid fa-circle-check"></i>
                                    Guaranteed entry to the stadium.
                                </li>
                                <li>
                                    <i className="fa-solid fa-circle-check"></i>
                                   Access to exclusive fan events.
                                </li>
                                <li>
                                    <i className="fa-solid fa-circle-check"></i>
                                   Priority for high-demand matches and finals.
                                </li>
                            </ul>
                        </div>
                    </div>
                    {/* <div className="form-clt mt-5">
                        <div className="form">
                            <select className="single-select w-100">
                                <option>ADD TO CALENDAR</option>
                                <option>Match Schedule</option>
                                <option>Fan Zone</option>
                                <option>Stadium Map</option>
                            </select>
                        </div>
                    </div> */}
                    <div className="row g-4 mt-5 align-items-center">
                        <div className="col-lg-7">
                            <div className="ticket-list-items">
                                <h3>Tickets</h3>
                                <p>Venue: Old Trafford Cricket Ground Talbot Rd, Old Trafford, Stretford, Manchester, Manchester, United Kingdom</p>
                                <div className="ticket-wrap">
                                    <div className="left-item">
                                    {/* <img src="assets/img/inner/alt.png" alt="img"/> */}
                                    <h4>IND vs ENG (M) T20 International</h4>
                                     {/* <img src="assets/img/inner/fcb.png" alt="img"/> */}
                                </div>
                                <div className="right-items">
                                    <div>|</div>
                                    <h5>
                                        $99.00
                                        <sub>Unlimited</sub>
                                    </h5>
                                     <div className="price-quantity text-center">
                                            <div
                                            className="quantity d-inline-flex align-items-center justify-content-center gap-1 py-2 px-4 border n50-border_20 text-sm">
                                            <button className="quantityDecrement"><i className="fal fa-minus"></i></button>
                                            <input type="text" value="1" className="quantityValue"/>
                                            <button className="quantityIncrement"><i className="fal fa-plus"></i></button>
                                        </div>
                                    </div>
                                </div>
                                </div>
                                <div className="quantity-items">
                                    <div className="quantity-list">
                                        <p>
                                            Quantity: <b>03</b>
                                        </p>
                                        <p>
                                            Total: <b>$997.00</b>
                                        </p>
                                    </div>
                                    <button className="theme-btn" type="submit">
                                        GET TICKETS
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-5">
                            <div className="ticket-details-information">
                                <h3>Tickets Details</h3>
                                <ul>
                                    <li>
                                        <span> Start:</span>
                                       July 4, 2026 @ 2:00 pm 
                                    </li>
                                     <li>
                                        <span> End:</span>
                                       July 4, 2026 @ - 6:00 pm
                                    </li>
                                     <li>
                                        <span>Cost:</span>
                                        £998.00 – £999.00 
                                    </li>
                                     <li>
                                        <span> Event Category:</span>
                                        T20 International
                                    </li>
                                </ul>
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

