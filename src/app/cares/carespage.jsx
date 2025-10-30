import React from 'react';
import Link from "next/link";
import Script from "next/script";


export default function Carespage() {
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
            
    

       
        

        {/* Preloader Start */}
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
                 <Link href="/login" className="theme-btn d-none d-xl-block">
                    login/Signup
                    
                  </Link> 
                  {/* <Link style={{fontWeight:"20"}} href="/login" className="theme-btn">
                      Login <span style={{fontWeight:"40px"}}>/ </span>Signup
                    </Link> */}

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
                        <h1 className="text-white wow fadeInUp" data-wow-delay=".3s">CLG Cares - Our CSR initiatives</h1>
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
                           At CLG Academy, our passion for the game does not stop at just developing cricketers of the future. We equally recognise our social responsibility. Our Corporate Social Responsibility (CSR) initiatives reflect our dedication towards creating a positive impact in the community and our inclusive approach. 
 While we aspire to help millions of kids through cricket, we have made humble beginnings in this direction in the following ways:
                        </li>
                    </ul>
                </div>
            </div>
        </div>
        
       {/* GT News-standard Section Start */}
        <section className="news-standard-section section-padding">
            <div className="container">
                <div className="gt-news-standard-wrapper">
                    <div className="row g-4">
                        <div className="col-12 col-lg-8">
                            <div className="gt-news-standard-items">
                                <div className="gt-news-card-items-4">
                                    <div className="gt-news-image">
                                        <img src="assets/img/inner/news/01.jpg" alt="img"/>
                                    </div>
                                    <div className="gt-news-content">
                                       <ul className="gt-date-list">
                                            <li>
                                                {/* <i className="fa-solid fa-calendar-days"></i> */}
                                                Cricket lovers globals
                                            </li>
                                            
                                       </ul>
                                       <h3>
                                            <p >
                                               Supporting kids at an Orphanage in India
                                            </p>
                                        </h3>
                                       <p>
                                           During a recent academy tour to India, we spent a whole day at an Orphanage in 
                                           Mumbai playing cricket and football with the inmates and shared a meal with them.
                                            We provided a personalised t-shirt to all 150 children at the Orphanage and also
                                             ordered
                                            their favourite McDonalds meal which we all ate together in their dining hall. 
                                       </p>
                                      <a href="news-details.html" className="theme-btn mt-4">
                                          VIEW MORE <i className="fa-solid fa-arrow-up-right"></i>
                                        </a>
                                    </div>
                                </div>
                                <div className="gt-news-card-items-4">
                                    <div className="gt-news-image">
                                        <img src="assets/img/inner/news/02.jpg" alt="img"/>
                                    </div>
                                    <div className="gt-news-content">
                                       <ul className="gt-date-list">
                                            <li>
                                                Cricket lovers globals
                                            </li>
                                            
                                       </ul>
                                       <h3>
                                        <p>
                                          Supporting Under Privilege /Refugee Kids in the UK
                                        </p>
                                    </h3>
                                       <p>
We plan to provide year round cricket training to under-privileged kids and kids
 belonging to refugee families within the UK in the coming months through our 
 academy. This will also include providing cricket gear, shoes etc. to them. 
 We plan to organise fundraisers to support this cause in the near future.                                        </p>
                                       <a href="news-details.html" className="theme-btn mt-4">
                                          VIEW MORE <i className="fa-solid fa-arrow-up-right"></i>
                                        </a>
                                    </div>
                                </div>
                                {/* <div className="gt-news-card-items-4 mb-0">
                                    <div className="gt-news-image">
                                        <img src="assets/img/inner/news/03.jpg" alt="img"/>
                                    </div>
                                    <div className="gt-news-content">
                                       <ul className="gt-date-list">
                                            <li>
                                                <i className="fa-solid fa-calendar-days"></i>
                                                11 March 2025
                                            </li>
                                            <li>
                                                <i className="fa-solid fa-comments"></i>
                                                19 Comments
                                            </li>
                                       </ul>
                                       <h3>
                                        <a href="news-details.html">
                                        Youth Academy Nurturing the Next Generation
                                        </a>
                                    </h3>
                                       <p>
                                          Our Youth Academy is dedicated to developing future football stars, providing top-tier coaching, essential skills, and a strong foundation to nurture talent and inspire 
                                       </p>
                                        <a href="news-details.html" className="theme-btn mt-4">
                                          VIEW MORE <i className="fa-solid fa-arrow-up-right"></i>
                                        </a>
                                    </div>
                                </div> */}
                                <div className="page-nav-wrap text-center">
                                    <ul>
                                        <li><a className="page-numbers" href="#"><i className="fa-solid fa-arrow-up-left"></i></a></li>
                                        <li className="active"><a className="page-numbers" href="#">01</a></li>
                                        <li><a className="page-numbers" href="#">02</a></li>
                                        <li><a className="page-numbers" href="#">03</a></li>
                                        <li><a className="page-numbers" href="#"><i className="fa-solid fa-arrow-up-right"></i></a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-12">
                            <div className="gt-main-sideber sticky-style">
                                <div className="gt-single-sideber-widget">
                                    <div className="gt-widget-title">
                                        <h3>Membership Benifits</h3>
                                    </div>
                                    <ul className="gt-category-list">
                                        <li><a href="news-details.html">Ticket Priority </a></li>
                                        <li><a href="news-details.html">CLG Merchandise</a></li>
                                        <li><a href="news-details.html">Discounts</a></li>
                                        <li><a href="news-details.html">Annual Meetings </a></li>
                                        <li><a href="news-details.html">Junior Meets</a></li>
                                        <li><a href="news-details.html">Member Access </a></li>
                                    </ul>
                                </div>
                                {/* <div className="gt-single-sideber-widget">
                                    <div className="gt-widget-title">
                                        <h3>Recent Post</h3>
                                    </div>
                                    <div className="gt-recent-post-area">
                                        <div className="gt-recent-items">
                                            <div className="gt-recent-thumb">
                                                <img src="assets/img/inner/news/post-1.jpg" alt="img"/>
                                            </div>
                                            <div className="gt-recent-content">
                                                <h5>
                                                    <a href="news-details.html">
                                                       Legends of the Club Honoring the Greats
                                                    </a>
                                                </h5>
                                                <ul>
                                                    <li>
                                                        March 26, 2025
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div className="gt-recent-items">
                                            <div className="gt-recent-thumb">
                                                <img src="assets/img/inner/news/post-2.jpg" alt="img"/>
                                            </div>
                                            <div className="gt-recent-content">
                                                <h5>
                                                    <a href="news-details.html">
                                                      Countdown to the Final Build-Up & Expectations
                                                    </a>
                                                </h5>
                                                <ul>
                                                    <li>
                                                        March 26, 2025
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div className="gt-recent-items">
                                            <div className="gt-recent-thumb">
                                               <img src="assets/img/inner/news/post-3.jpg" alt="img"/>
                                            </div>
                                            <div className="gt-recent-content">
                                                <h5>
                                                    <a href="news-details.html">
                                                     Matchday Photo Gallery and Capturing the Action
                                                    </a>
                                                </h5>
                                                <ul>
                                                    <li>
                                                        March 26, 2025
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div> */}
                                <div className="gt-single-sideber-widget mb-0">
                                    <div className="gt-widget-title">
                                        <h3>Benefit</h3>
                                    </div>
                                    <div className="tagcloud">
                                        <a href="news-details.html">Cricket Lovers Global Merchandise</a>     
                                        <a href="news-details.html">Lucky Member of the Year Competition Entry</a>
                                        <a href="news-details.html">Member Contests</a>
                                       
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
                     <Link href="/login">
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

