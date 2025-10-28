import React from 'react';
import Link from "next/link";

export default function Eventpage() {
    return (
       
    <div>
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
                  <Link href="/home">
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
                Nullam dignissim, ante scelerisque the is euismod fermentum odio
                sem semper the is erat, a feugiat leo urna eget eros. Duis
                Aenean a imperdiet risus.
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
                      <a target="_blank" href="#">
                        Main Street, Melbourne, Australia
                      </a>
                    </div>
                  </li>
                  <li className="d-flex align-items-center">
                    <div className="offcanvas__contact-icon mr-15">
                      <i className="fal fa-envelope"></i>
                    </div>
                    <div className="offcanvas__contact-text">
                      <a href="mailto:info@example.com">
                        <span className="mailto:info@example.com">
                          info@example.com
                        </span>
                      </a>
                    </div>
                  </li>
                  <li className="d-flex align-items-center">
                    <div className="offcanvas__contact-icon mr-15">
                      <i className="fal fa-clock"></i>
                    </div>
                    <div className="offcanvas__contact-text">
                      <a target="_blank" href="#">
                        Mod-friday, 09am -05pm
                      </a>
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
                  <a href="#">
                    <i className="fab fa-facebook-f"></i>
                  </a>
                  <a href="#">
                    <i className="fab fa-twitter"></i>
                  </a>
                  <a href="#">
                    <i className="fab fa-youtube"></i>
                  </a>
                  <a href="#">
                    <i className="fab fa-linkedin-in"></i>
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
                {/* <a
                  href="club-ranking.html"
                  className="theme-btn d-none d-xl-block"
                >
                  Become a Member <i className="fa-solid fa-arrow-up-right"></i>
                </a> */}
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
        
        
        
        {/* << All JS Plugins >>*/}
        <script src="assets/js/jquery-3.7.1.min.js"></script>
        {/* << Viewport Js >>*/}
        <script src="assets/js/viewport.jquery.js"></script>
        {/* << Bootstrap Js >>*/}
        <script src="assets/js/bootstrap.bundle.min.js"></script>
        {/* << nice-selec Js >>*/}
        <script src="assets/js/jquery.nice-select.min.js"></script>
        {/* << Waypoints Js >>*/}
        <script src="assets/js/jquery.waypoints.js"></script>
        {/* << Counterup Js >>*/}
        <script src="assets/js/jquery.counterup.min.js"></script>
        {/* << Swiper Slider Js >>*/}
        <script src="assets/js/swiper-bundle.min.js"></script>
        {/* << MeanMenu Js >>*/}
        <script src="assets/js/jquery.meanmenu.min.js"></script>
        {/* << Parallaxie Js >>*/}
        <script src="assets/js/parallaxie.js"></script>
        {/* << Magnific Popup Js >>*/}
        <script src="assets/js/jquery.magnific-popup.min.js"></script>
        {/* << Wow Animation Js >>*/}
        <script src="assets/js/wow.min.js"></script>
        {/* << Gsap Animation Js >>*/}
        <script src="assets/js/gsap.min.js"></script>
        {/* << ScrollTrigger Js >>*/}
        <script src="assets/js/ScrollTrigger.min.js"></script>
        {/* << SplitText Js >>*/}
        <script src="assets/js/SplitText.min.js"></script>
        {/* << splitType Js >>*/}
        <script src="assets/js/splitType.js"></script>
        {/* << Main.js >>*/}
        <script src="assets/js/main.js"></script>
    
            
       </div>
    );
}

