import React from 'react';
import Script from "next/script";
import Link from "next/link";



export default function Membershippage() {
    return (
        <div>
           <div>
            {/* All JS Plugins */}
        <Script src="assets/js/jquery-3.7.1.min.js"></Script>
         {/* Viewport Js */}
        <Script src="assets/js/viewport.jquery.js"></Script>
         {/* Bootstrap Js */}
        <Script src="assets/js/bootstrap.bundle.min.js"></Script>
         {/* nice-selec Js */}
        <Script src="assets/js/jquery.nice-select.min.js"></Script>
         {/* Waypoints Js */}
        <Script src="assets/js/jquery.waypoints.js"></Script>
         {/* Counterup Js */}
        <Script src="assets/js/jquery.counterup.min.js"></Script>
         {/* Swiper Slider Js */}
        <Script src="assets/js/swiper-bundle.min.js"></Script>
         {/* MeanMenu Js */}
        <Script src="assets/js/jquery.meanmenu.min.js"></Script>
         {/* Parallaxie Js */}
        <Script src="assets/js/parallaxie.js"></Script>
         {/* Magnific Popup Js */}
        <Script src="assets/js/jquery.magnific-popup.min.js"></Script>
         {/* Wow Animation Js */}
        <Script src="assets/js/wow.min.js"></Script>
         {/* Gsap Animation Js */}
        <Script src="assets/js/gsap.min.js"></Script>
         {/* ScrollTrigger Js */}
        <Script src="assets/js/ScrollTrigger.min.js"></Script>
         {/* SplitText Js */}
        <Script src="assets/js/SplitText.min.js"></Script>
         {/* splitType Js */}
        <Script src="assets/js/splitType.js"></Script>
         {/* Main.js */}
        <Script src="assets/js/main.js"></Script>

           </div>

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

        <div className="gt-breadcrumb-wrapper bg-cover" style={{
          backgroundImage:"url('assets/img/breadcrumb-bg.jpg')"}}>
            <div className="container">
                <div className="gt-page-heading">
                    <div className="gt-breadcrumb-sub-title">
                        <h1 className="text-white wow fadeInUp" data-wow-delay=".3s">Become a CLG member today</h1>
                    </div>
                    <ul className="gt-breadcrumb-items wow fadeInUp" data-wow-delay=".5s">
                        {/* <li>
                            <a href="index.html">
                               Home
                            </a>
                        </li> */}
                        <li>
                            <i className="fa-solid fa-chevron-right"></i>
                        </li>
                        <li>
                           Being a member of Cricket Lovers Global unlocks opportunities that every cricket
                            lover around the globe craves for
                            – watching matches together, cricket debates, interaction with cricketers and more.
                        </li>
                    </ul>
                </div>
            </div>
        </div>
        
    <section
      className="club-blog-section fix section-padding bg-cover"
      style={{
        backgroundImage: "url('assets/img/home-1/club-blog/club-blog-bg.jpg')"}}
      
    >
    <div className="container">
        <div className="row g-4">
          <div className="col-lg-8">
            <div className="section-title-area align-items-end">
              <div className="section-title hero_title tv_hero_title hero_title_1">
                <h2>Pricing  <span>Plan</span> </h2>
                
              </div>
              <Link
                href="/about"
                className="link-btn wow fadeInUp"
                data-wow-delay=".3s"
              >
                VIEW MORE  <i className="fa-solid fa-arrow-up-right"></i>
              </Link>
            </div>
            <div className="row">
              <div
                className="col-xl-6 col-lg-6 col-md-6 wow fadeInUp"
                data-wow-delay=".3s"
              >
                <div className="club-blog-items">
                  <div className="thumb">
                    <img
                      src="assets/img/home-1/club-blog/blog-1.jpg"
                      alt="img"
                    />
                  </div>
                  <div className="content">
                    <ul>
                      <li>
                        <span>
                          <i className="fa-regular fa-circle-user"></i>
                          Buy <b>£250</b>
                        </span>
                      </li>
                      <li>
                        {/* <span>
                          <i className="fa-solid fa-calendar-days"></i>
                          June 28, 2025
                        </span> */}
                      </li>
                    </ul>
                    <h3>
                      <a href="">
                        Platinum Lifetime Membership
                      </a>
                    </h3>
                    <Link href="https://buy.stripe.com/6oE8x1gIfclyfyU14c" className="link-btn">
                      get started  <i className="fa-solid fa-arrow-up-right"></i>
                    </Link>
                  </div>
                </div>
              </div>
              <div
                className="col-xl-6 col-lg-6 col-md-6 wow fadeInUp"
                data-wow-delay=".5s"
              >
                <div className="club-blog-items">
                  <div className="thumb">
                    <img
                      src="assets/img/home-1/club-blog/blog-2.jpg"
                      alt="img"
                    />
                  </div>
                  <div className="content">
                    <ul>
                      <li>
                        <span>
                          <i className="fa-regular fa-circle-user"></i>
                          Buy <b>£10 / year</b>
                        </span>
                      </li>
                      <li>
                        {/* <span>
                          <i className="fa-solid fa-calendar-days"></i>
                          June 28, 2025
                        </span> */}
                      </li>
                    </ul>
                    <h3>
                      <a href="news-details.html">
Solo <br /> Membership</a>
                    </h3>
                    <Link href="https://buy.stripe.com/6oE8x1gIfclyfyU14c" className="link-btn">
                      get started  <i className="fa-solid fa-arrow-up-right"></i>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div style={{border:"1px solid "}} className="col-lg-4 wow fadeInUp" data-wow-delay=".7s">
            <div className="playing-result-box2 style-2">
              <h3 className="playing-result-box2 ">Limited Offer</h3>
              
              <h5 style={{textAlign:"center", color:"Red"}} >Free account via Ribbon</h5>
              <div className="match-result-box">
                <div className="match-result">
                  <div className="thumb">
                    <img src="assets/images/Ribbionlogo.svg" alt="img" />
                    <br />
                  
                <div className="match-result">
                  <div className="thumb">
                  </div>
                  
                  <p>Free with Ribbon Global Multi-Currency Account</p>
                  <br />
                </div>
                <Link href="https://checkout.stripe.com/c/pay/cs_live_a1A3GQhh69n8y9cKSkqt6SsAArteM0KNK6u85bgdy8DhNeuPypn2b3FzFs#fidnandhYHdWcXxpYCc%2FJ2FgY2RwaXEnKSdkdWxOYHwnPyd1blppbHNgWjA0SmtDNUNDPGRQMGhVU2lnXzNEY1xzZm0xXzYySGhzaGZkYH1HMnAya0p0QzVCYWlASEFAPF9vYGwycGNwVUB2RzZUQVIzNmBPSklddnBGcTFNbXxRbXRMNTVtR1VMNVVDdycpJ2N3amhWYHdzYHcnP3F3cGApJ2dkZm5id2pwa2FGamlqdyc%2FJyZjY2NjY2MnKSdpZHxqcHFRfHVgJz8ndmxrYmlgWmxxYGgnKSdga2RnaWBVaWRmYG1qaWFgd3YnP3F3cGB4JSUl" className="theme-btn">
                      SignUP <i className="fa-solid fa-arrow-up-right"></i>
                    </Link>

              </div>
              
            </div>
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

