"use client";
import Script from "next/script";
import React from "react";
import Link from "next/link";

export default function homepage() {
  return (
    <div>
      {/** script tags */}
      {/* jQuery - Load first as other scripts depend on it */}
      <Script
        src="/assets/js/jquery-3.7.1.min.js"
        strategy="beforeInteractive"
      ></Script>

      {/* Other JS Plugins - Load after jQuery */}
      <Script
        src="/assets/js/viewport.jquery.js"
        strategy="afterInteractive"
      ></Script>
      <Script
        src="/assets/js/bootstrap.bundle.min.js"
        strategy="afterInteractive"
      ></Script>
      <Script
        src="/assets/js/jquery.nice-select.min.js"
        strategy="afterInteractive"
      ></Script>
      <Script
        src="/assets/js/jquery.waypoints.js"
        strategy="afterInteractive"
      ></Script>
      <Script
        src="/assets/js/jquery.counterup.min.js"
        strategy="afterInteractive"
      ></Script>
      <Script
        src="/assets/js/swiper-bundle.min.js"
        strategy="afterInteractive"
      ></Script>
      <Script
        src="/assets/js/jquery.meanmenu.min.js"
        strategy="afterInteractive"
      ></Script>
      <Script
        src="/assets/js/parallaxie.js"
        strategy="afterInteractive"
      ></Script>
      <Script
        src="/assets/js/jquery.magnific-popup.min.js"
        strategy="afterInteractive"
      ></Script>
      <Script src="/assets/js/wow.min.js" strategy="afterInteractive"></Script>
      <Script src="/assets/js/gsap.min.js" strategy="afterInteractive"></Script>
      <Script
        src="/assets/js/ScrollTrigger.min.js"
        strategy="afterInteractive"
      ></Script>
      <Script
        src="/assets/js/SplitText.min.js"
        strategy="afterInteractive"
      ></Script>
      <Script
        src="/assets/js/splitType.js"
        strategy="afterInteractive"
      ></Script>

      {/* Main.js - Load last as it depends on all other scripts */}
      <Script src="/assets/js/main.js" strategy="afterInteractive"></Script>


      {/* Back To Top Start*/}
      <button id="back-top" className="back-to-top">
        <i className="fa-regular fa-arrow-up"></i>
      </button>

      {/* MouseCursor Start*/}
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
                We at Cricket Lovers Global take pride in equally supporting
                 men and women cricket. In fact, promoting and creating 
                 awareness about women cricket is very close to our
                  heart. 
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
                            Home
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
                            {/* <li> <a href="404.html">404 Page</a> </li> */}
                          </ul>
                        </li>
                        <li>
                          <Link href="/gallery">Gallery</Link>
                        </li>
                        <li>
                          <Link href="/membership">Membership</Link>
                          {/* <ul className="submenu"> <li> <a href="news-grid.html">Blog Grid</a> </li> <li> <a href="news.html">Blog Standard</a> </li> <li> <a href="news-details.html">Blog Details</a> </li> </ul> */}
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
                {/* <a href="club-ranking.html" className="theme-btn d-none d-xl-block" > Become a Member <i className="fa-solid fa-arrow-up-right"></i> </a> */}
                <Link href="/contact" className="theme-btn d-none d-xl-block">
                  Become a Member <i className="fa-solid fa-arrow-up-right"></i>
                </Link>


                
                {/* gfhfg */}
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

      {/* Hero Section Start*/}
      <section
        className="hero-section1 parallaxie hero-1 bg-cover"
        style={{ backgroundImage: "url('assets/img/home-1/hero-bg.jpg')" }}
      >
        <div className="right-shape">
          <img src="assets/img/home-1/right-shape.png" alt="img" />
        </div>
        {/* <div className="right-shape">
          <img src="assets/img/home-1/right-shape.png" alt="img" />
        </div> */}
        <div className="container">
          <div className="row g-4 align-items-center">
            <div className="col-lg-6">
              <div style={{textAlign:"start", marginLeft:"14px"}} className="hero-content ">
                <h6 className="wow fadeInUp"> WELCOME</h6>
                <h1 className="hero_title tv_hero_title hero_title_1">
                  CRICKET LOVERS <br />
                  <span>GLOBAL</span>
                </h1>
                <p className="wow fadeInUp" data-wow-delay=".3s">
                  An ever-growing community of cricket lovers across the globe
                  who share a passion for the sport.
                </p>
                <div className="hero-btn wow fadeInUp" data-wow-delay=".5s">
                  <a href="/contact" className="theme-btn">
                    SignUP <i className="fa-solid fa-arrow-up-right"></i>
                  </a>
                  <a href="/about" className="theme-btn bg-white">
                    Learn more <i className="fa-solid fa-arrow-up-right"></i>
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="hero-image">
                <img
                  src="assets/img/header/cricket1.png"
                  alt="img"
                  className="tilt_scale"
                />
                <div className="hero-image-bg">
                  {/* <img src="assets/img/home-1/hero-image.png" alt="img" /> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Match  Section Start*/}
      <section className="match-section fix section-padding">
        <div className="container">
          <div className="row g-4 tv-desti-content">
            <div className="col-xl-4 col-lg-6 col-md-6">
              <div className="match-box-items tv-desti-item">
                <h3>LAST MATCH</h3>
                <h4>Min 24 Sep 2023</h4>
                <p>Premier League , The Legend Stadium</p>
                <div className="match-schedule">
                  <div className="flag-item">
                    <img src="assets/img/home-1/newzeland.png" alt="img" />
                    <span>Australia</span>
                  </div>
                  <div className="match-date">
                    <span>02.01</span>
                  </div>
                  <div className="flag-item">
                    <img
                      src="assets/img/home-1/match/aston-villa.png"
                      alt="img"
                    />
                    <span>Aston Villa</span>
                  </div>
                </div>
                <div className="match-btn">
                  <a href="ticket.html" className="theme-btn">
                    BUY TICKET
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="21"
                      height="18"
                      viewBox="0 0 21 18"
                      fill="none"
                    >
                      <path
                        d="M4.1386 14.2597C3.74807 14.6502 3.74807 15.2834 4.1386 15.6739C4.52912 16.0644 5.16229 16.0644 5.55281 15.6739L4.8457 14.9668L4.1386 14.2597ZM17.7793 3.03316C17.7793 2.48088 17.3316 2.03316 16.7793 2.03316L7.77934 2.03316C7.22705 2.03316 6.77934 2.48088 6.77934 3.03316C6.77934 3.58544 7.22706 4.03316 7.77934 4.03316L15.7793 4.03316L15.7793 12.0332C15.7793 12.5854 16.2271 13.0332 16.7793 13.0332C17.3316 13.0332 17.7793 12.5854 17.7793 12.0332L17.7793 3.03316ZM4.8457 14.9668L5.55281 15.6739L17.4864 3.74027L16.7793 3.03316L16.0722 2.32605L4.1386 14.2597L4.8457 14.9668Z"
                        fill="white"
                      />
                    </svg>
                  </a>
                  <a href="ticket.html" className="theme-btn style-2">
                    STREAMING
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="21"
                      height="18"
                      viewBox="0 0 21 18"
                      fill="none"
                    >
                      <path
                        d="M4.1386 14.2597C3.74807 14.6502 3.74807 15.2834 4.1386 15.6739C4.52912 16.0644 5.16229 16.0644 5.55281 15.6739L4.8457 14.9668L4.1386 14.2597ZM17.7793 3.03316C17.7793 2.48088 17.3316 2.03316 16.7793 2.03316L7.77934 2.03316C7.22705 2.03316 6.77934 2.48088 6.77934 3.03316C6.77934 3.58544 7.22706 4.03316 7.77934 4.03316L15.7793 4.03316L15.7793 12.0332C15.7793 12.5854 16.2271 13.0332 16.7793 13.0332C17.3316 13.0332 17.7793 12.5854 17.7793 12.0332L17.7793 3.03316ZM4.8457 14.9668L5.55281 15.6739L17.4864 3.74027L16.7793 3.03316L16.0722 2.32605L4.1386 14.2597L4.8457 14.9668Z"
                        fill="white"
                      />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-lg-6 col-md-6">
              <div className="match-box-items tv-desti-item">
                <h3>NEXT MATCH</h3>
                <h4>Min 24 Sep 2023</h4>
                <p>Premier League , The Legend Stadium</p>
                <div className="match-schedule">
                  <div className="flag-item">
                    <img src="assets/img/home-1/match/chelsea.png" alt="img" />
                    <span>Chelsea</span>
                  </div>
                  <div className="match-date">
                    <span>19.45</span>
                  </div>
                  <div className="flag-item">
                    <img
                      src="assets/img/home-1/match/aston-villa.png"
                      alt="img"
                    />
                    <span>Aston Villa</span>
                  </div>
                </div>
                <div className="match-btn">
                  <a href="ticket.html" className="theme-btn">
                    BUY TICKET
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="21"
                      height="18"
                      viewBox="0 0 21 18"
                      fill="none"
                    >
                      <path
                        d="M4.1386 14.2597C3.74807 14.6502 3.74807 15.2834 4.1386 15.6739C4.52912 16.0644 5.16229 16.0644 5.55281 15.6739L4.8457 14.9668L4.1386 14.2597ZM17.7793 3.03316C17.7793 2.48088 17.3316 2.03316 16.7793 2.03316L7.77934 2.03316C7.22705 2.03316 6.77934 2.48088 6.77934 3.03316C6.77934 3.58544 7.22706 4.03316 7.77934 4.03316L15.7793 4.03316L15.7793 12.0332C15.7793 12.5854 16.2271 13.0332 16.7793 13.0332C17.3316 13.0332 17.7793 12.5854 17.7793 12.0332L17.7793 3.03316ZM4.8457 14.9668L5.55281 15.6739L17.4864 3.74027L16.7793 3.03316L16.0722 2.32605L4.1386 14.2597L4.8457 14.9668Z"
                        fill="white"
                      />
                    </svg>
                  </a>
                  <a href="ticket.html" className="theme-btn style-2">
                    STREAMING
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="21"
                      height="18"
                      viewBox="0 0 21 18"
                      fill="none"
                    >
                      <path
                        d="M4.1386 14.2597C3.74807 14.6502 3.74807 15.2834 4.1386 15.6739C4.52912 16.0644 5.16229 16.0644 5.55281 15.6739L4.8457 14.9668L4.1386 14.2597ZM17.7793 3.03316C17.7793 2.48088 17.3316 2.03316 16.7793 2.03316L7.77934 2.03316C7.22705 2.03316 6.77934 2.48088 6.77934 3.03316C6.77934 3.58544 7.22706 4.03316 7.77934 4.03316L15.7793 4.03316L15.7793 12.0332C15.7793 12.5854 16.2271 13.0332 16.7793 13.0332C17.3316 13.0332 17.7793 12.5854 17.7793 12.0332L17.7793 3.03316ZM4.8457 14.9668L5.55281 15.6739L17.4864 3.74027L16.7793 3.03316L16.0722 2.32605L4.1386 14.2597L4.8457 14.9668Z"
                        fill="white"
                      />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-lg-6 col-md-6">
              <div className="match-box-items tv-desti-item">
                <h3>UPCOMMING MATCH</h3>
                <h4>Min 24 Sep 2023</h4>
                <p>Premier League , The Legend Stadium</p>
                <div className="match-schedule">
                  <div className="flag-item">
                    <img src="assets/img/home-1/match/chelsea.png" alt="img" />
                    <span>Chelsea</span>
                  </div>
                  <div className="match-date">
                    <span>19.45</span>
                  </div>
                  <div className="flag-item">
                    <img
                      src="assets/img/home-1/match/aston-villa.png"
                      alt="img"
                    />
                    <span>Aston Villa</span>
                  </div>
                </div>
                <div className="match-btn">
                  <a href="ticket.html" className="theme-btn">
                    BUY TICKET
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="21"
                      height="18"
                      viewBox="0 0 21 18"
                      fill="none"
                    >
                      <path
                        d="M4.1386 14.2597C3.74807 14.6502 3.74807 15.2834 4.1386 15.6739C4.52912 16.0644 5.16229 16.0644 5.55281 15.6739L4.8457 14.9668L4.1386 14.2597ZM17.7793 3.03316C17.7793 2.48088 17.3316 2.03316 16.7793 2.03316L7.77934 2.03316C7.22705 2.03316 6.77934 2.48088 6.77934 3.03316C6.77934 3.58544 7.22706 4.03316 7.77934 4.03316L15.7793 4.03316L15.7793 12.0332C15.7793 12.5854 16.2271 13.0332 16.7793 13.0332C17.3316 13.0332 17.7793 12.5854 17.7793 12.0332L17.7793 3.03316ZM4.8457 14.9668L5.55281 15.6739L17.4864 3.74027L16.7793 3.03316L16.0722 2.32605L4.1386 14.2597L4.8457 14.9668Z"
                        fill="white"
                      />
                    </svg>
                  </a>
                  <a href="ticket.html" className="theme-btn style-2">
                    STREAMING
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="21"
                      height="18"
                      viewBox="0 0 21 18"
                      fill="none"
                    >
                      <path
                        d="M4.1386 14.2597C3.74807 14.6502 3.74807 15.2834 4.1386 15.6739C4.52912 16.0644 5.16229 16.0644 5.55281 15.6739L4.8457 14.9668L4.1386 14.2597ZM17.7793 3.03316C17.7793 2.48088 17.3316 2.03316 16.7793 2.03316L7.77934 2.03316C7.22705 2.03316 6.77934 2.48088 6.77934 3.03316C6.77934 3.58544 7.22706 4.03316 7.77934 4.03316L15.7793 4.03316L15.7793 12.0332C15.7793 12.5854 16.2271 13.0332 16.7793 13.0332C17.3316 13.0332 17.7793 12.5854 17.7793 12.0332L17.7793 3.03316ZM4.8457 14.9668L5.55281 15.6739L17.4864 3.74027L16.7793 3.03316L16.0722 2.32605L4.1386 14.2597L4.8457 14.9668Z"
                        fill="white"
                      />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      
      {/* testinomial banner section */}
      <section
        className="testimonial-section fix section-padding bg-cover"
        style={{
          backgroundImage: "url('assets/img/testimonial/testimonial-bg.jpg')",
        }}
      >
        <div className="testimonial-wrapper">
          <div className="container">
            <div className="row g-4">
              <div className="row g-4">
                <div className="col-lg-6">
                  <div className="swiper tetsimonial-slider">
                    <div className="swiper-wrapper">
                      <div className="swiper-slide">
                        <div className="testimonial-box-slider">
                          <div className="quote-icon">
                            <img
                              src="assets/img/testimonial/quote.svg"
                              alt="img"
                            />
                          </div>
                          <p>
                            Joining this club has been incredible — the energy,
                            the fans, the players, everything feels like family.
                            Matchdays are electric, and the passion here is
                            truly unmatched.
                          </p>
                          <div className="client-info-items">
                            <div className="client-info">
                              <img
                                src="assets/images/profile1a.jpg"
                                alt="img"
                              />
                              <div className="content">
                                <h4>Pritam </h4>
                                <span> CLG Member </span>
                              </div>
                            </div>
                            <div className="star">
                              <i className="fa-solid fa-star"></i>
                              <i className="fa-solid fa-star"></i>
                              <i className="fa-solid fa-star"></i>
                              <i className="fa-solid fa-star"></i>
                              <i className="fa-solid fa-star"></i>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="swiper-slide">
                        <div className="testimonial-box-slider">
                          <div className="quote-icon">
                            <img
                              src="assets/img/testimonial/quote.svg"
                              alt="img"
                            />
                          </div>
                          <p>
                            "Cricket lovers global is an awesome group of
                            Cricket lovers across countries. I started going
                            with their group of friends to the World cup 2019 in
                            England and the experience was amazing."
                          </p>
                          <div className="client-info-items">
                            <div className="client-info">
                              <img
                                src="assets/img/testimonial/client.png"
                                alt="img"
                              />
                              <div className="content">
                                <h4>Daniel Smith</h4>
                                <span> Senior engineer </span>
                              </div>
                            </div>
                            <div className="star">
                              <i className="fa-solid fa-star"></i>
                              <i className="fa-solid fa-star"></i>
                              <i className="fa-solid fa-star"></i>
                              <i className="fa-solid fa-star"></i>
                              <i className="fa-solid fa-star"></i>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="swiper-slide">
                        <div className="testimonial-box-slider">
                          <div className="quote-icon">
                            <img
                              src="assets/img/testimonial/quote.svg"
                              alt="img"
                            />
                          </div>
                          <p>
                            Joining this club has been incredible — the energy,
                            the fans, the players, everything feels like family.
                            Matchdays are electric, and the passion here is
                            truly unmatched.
                          </p>
                          <div className="client-info-items">
                            <div className="client-info">
                              <img
                                src="assets/img/testimonial/client.png"
                                alt="img"
                              />
                              <div className="content">
                                <h4>Daniel Smith</h4>
                                <span> Senior engineer </span>
                              </div>
                            </div>
                            <div className="star">
                              <i className="fa-solid fa-star"></i>
                              <i className="fa-solid fa-star"></i>
                              <i className="fa-solid fa-star"></i>
                              <i className="fa-solid fa-star"></i>
                              <i className="fa-solid fa-star"></i>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="testimonial-right-items">
                    <div className="section-title">
                      <h6 className="wow fadeInUp">What Our Fans Say</h6>
                      <h2 className="text-white hero_title tv_hero_title hero_title_1">
                        Loved by
                        <span> 500</span> + members
                        <br />
                      </h2>
                    </div>
                    <div className="row g-4">
                      <div
                        className="col-md-6 wow fadeInUp"
                        data-wow-delay=".3s"
                      >
                        {/* <div className="testi-count">
                          <img
                            src="assets/img/testimonial/ratting-box.png"
                            alt="img"
                          />
                        </div> */}
                        <div className="array-button d-flex align-items-center">
                          <button className="array-prev">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="20"
                              height="24"
                              viewBox="0 0 20 24"
                              fill="none"
                            >
                              <g opacity="0.72">
                                <path
                                  d="M15.814 19.4316C16.2646 19.8822 16.9952 19.8822 17.4458 19.4316C17.8964 18.981 17.8964 18.2504 17.4458 17.7998L16.6299 18.6157L15.814 19.4316ZM3.37029 4.20228C2.73304 4.20228 2.21644 4.71887 2.21644 5.35613L2.21644 15.7407C2.21644 16.378 2.73303 16.8946 3.37029 16.8946C4.00754 16.8946 4.52413 16.378 4.52413 15.7407V6.50997H13.7549C14.3922 6.50997 14.9087 5.99338 14.9087 5.35613C14.9087 4.71887 14.3922 4.20228 13.7549 4.20228L3.37029 4.20228ZM16.6299 18.6157L17.4458 17.7998L4.18618 4.54023L3.37029 5.35613L2.55439 6.17202L15.814 19.4316L16.6299 18.6157Z"
                                  fill="#464E5E"
                                />
                              </g>
                            </svg>
                          </button>
                          <button className="array-next">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="24"
                              height="20"
                              viewBox="0 0 24 20"
                              fill="none"
                            >
                              <g opacity="0.72">
                                <path
                                  d="M4.56838 15.814C4.11778 16.2646 4.11778 16.9952 4.56838 17.4458C5.01899 17.8964 5.74956 17.8964 6.20017 17.4458L5.38428 16.6299L4.56838 15.814ZM19.7977 3.37029C19.7977 2.73304 19.2811 2.21644 18.6439 2.21644L8.25926 2.21644C7.62201 2.21644 7.10541 2.73303 7.10541 3.37029C7.10541 4.00754 7.62201 4.52413 8.25926 4.52413H17.49V13.7549C17.49 14.3922 18.0066 14.9087 18.6439 14.9087C19.2811 14.9087 19.7977 14.3922 19.7977 13.7549L19.7977 3.37029ZM5.38428 16.6299L6.20017 17.4458L19.4598 4.18618L18.6439 3.37029L17.828 2.55439L4.56838 15.814L5.38428 16.6299Z"
                                  fill="#464E5E"
                                />
                              </g>
                            </svg>
                          </button>
                        </div>
                      </div>
                      <div
                        className="col-md-9 wow fadeInUp"
                        data-wow-delay=".5s"
                      >
                        <div className="image">
                          <img src="assets/images/Home41.jpg" alt="img" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Ticket Section Start*/}
      <section
        className="ticket-section section-padding bg-cover pb-8"
        style={{
          backgroundImage: "url('assets/img/home-1/tickets-bg.jpg')",
        }}
      >
        <div className="container">
          <div className="section-title-area">
            <div className="section-title hero_title tv_hero_title hero_title_1">
              <h2>
                Tickets On Sale – <span>don’t miss</span> out!
              </h2>
            </div>
            <div
              className="array-button-2 mt-0 d-flex align-items-center wow fadeInUp"
              data-wow-delay=".3s"
            >
              <button className="array-prev2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="24"
                  viewBox="0 0 20 24"
                  fill="none"
                >
                  <g opacity="0.72">
                    <path
                      d="M15.814 19.4316C16.2646 19.8822 16.9952 19.8822 17.4458 19.4316C17.8964 18.981 17.8964 18.2504 17.4458 17.7998L16.6299 18.6157L15.814 19.4316ZM3.37029 4.20228C2.73304 4.20228 2.21644 4.71887 2.21644 5.35613L2.21644 15.7407C2.21644 16.378 2.73303 16.8946 3.37029 16.8946C4.00754 16.8946 4.52413 16.378 4.52413 15.7407V6.50997H13.7549C14.3922 6.50997 14.9087 5.99338 14.9087 5.35613C14.9087 4.71887 14.3922 4.20228 13.7549 4.20228L3.37029 4.20228ZM16.6299 18.6157L17.4458 17.7998L4.18618 4.54023L3.37029 5.35613L2.55439 6.17202L15.814 19.4316L16.6299 18.6157Z"
                      fill="#464E5E"
                    />
                  </g>
                </svg>
              </button>
              <button className="array-next2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="20"
                  viewBox="0 0 24 20"
                  fill="none"
                >
                  <g opacity="0.72">
                    <path
                      d="M4.56838 15.814C4.11778 16.2646 4.11778 16.9952 4.56838 17.4458C5.01899 17.8964 5.74956 17.8964 6.20017 17.4458L5.38428 16.6299L4.56838 15.814ZM19.7977 3.37029C19.7977 2.73304 19.2811 2.21644 18.6439 2.21644L8.25926 2.21644C7.62201 2.21644 7.10541 2.73303 7.10541 3.37029C7.10541 4.00754 7.62201 4.52413 8.25926 4.52413H17.49V13.7549C17.49 14.3922 18.0066 14.9087 18.6439 14.9087C19.2811 14.9087 19.7977 14.3922 19.7977 13.7549L19.7977 3.37029ZM5.38428 16.6299L6.20017 17.4458L19.4598 4.18618L18.6439 3.37029L17.828 2.55439L4.56838 15.814L5.38428 16.6299Z"
                      fill="#464E5E"
                    />
                  </g>
                </svg>
              </button>
            </div>
          </div>
          <div className="row">
            <div className="col-xxl-14">
              <div className="swiper ticket-box-slider">
                <div className="swiper-wrapper">
                  <div className="swiper-slide">
                    <div className="ticket-box-items">
                      <span className="circle1"></span>
                      <span className="circle2"></span>
                      <div className="circle-list">
                        <div className="circle-1"></div>
                        <div className="circle-1"></div>
                        <div className="circle-1"></div>
                        <div className="circle-1"></div>
                        <div className="circle-1"></div>
                      </div>
                      <div className="ticket-left">
                        <p>
                          Mon <br />
                          day
                        </p>
                        <span className="number"> 28 </span>
                        <h6>AUGUST</h6>
                        <img src="assets/img/home-1/qr-cord.png" alt="img" />
                      </div>
                      <div className="content">
                        <span>
                          <img src="assets/img/home-1/cup.png" alt="img" />
                          <b>cLUB world cup, Final</b> Time: 19:05
                        </span>
                        <p>Venue: Met Life Stadium</p>
                        <div className="match-list">
                          <img
                            src="assets/img/home-1/ticket/match1.png"
                            alt="img"
                          />
                          <h3>India vs Australia </h3>
                          <img
                            src="assets/img/home-1/ticket/match2.png"
                            alt="img"
                          />
                        </div>
                        <a href="ticket.html" className="theme-btn">
                          MORE info
                          <i className="fa-solid fa-arrow-up-right"></i>
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="swiper-slide">
                    <div className="ticket-box-items">
                      <span className="circle1"></span>
                      <span className="circle2"></span>
                      <div className="circle-list">
                        <div className="circle-1"></div>
                        <div className="circle-1"></div>
                        <div className="circle-1"></div>
                        <div className="circle-1"></div>
                        <div className="circle-1"></div>
                      </div>
                      <div className="ticket-left">
                        <p>
                          Mon <br />
                          day
                        </p>
                        <span className="number"> 04 </span>
                        <h6>AUGUST</h6>
                        <img src="assets/img/home-1/qr-cord.png" alt="img" />
                      </div>
                      <div className="content">
                        <span>
                          <img src="assets/img/home-1/cup.png" alt="img" />
                          <b>cLUB world cup, Final</b> Time: 19:05
                        </span>
                        <p>Venue: Met Life Stadium</p>
                        <div className="match-list">
                          <img
                            src="assets/img/home-1/ticket/match1.png"
                            alt="img"
                          />
                          <h3>India vs West Indies</h3>
                          <img
                            src="assets/img/home-1/ticket/match2.png"
                            alt="img"
                          />
                        </div>
                        <a href="ticket.html" className="theme-btn">
                          MORE info
                          <i className="fa-solid fa-arrow-up-right"></i>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* <div className="col-xxl-3 col-md-7 col-lg-12">
              <div className="ticket-scaner">
                <h3>Scan Your QR Code</h3>
                <div className="scaner-thumb">
                  <img src="assets/img/home-1/scan.png" alt="img" />
                </div>
                <a href="ticket.html" className="theme-btn">
                  Season Passes Available
                  <i className="fa-solid fa-arrow-up-right"></i>
                </a>
              </div>
            </div> */}
          </div>
          {/* <div className="counter-section section-padding pb-0">
            <div className="counter-wrapper tv-desti-content">
              <div className="counter-items tv-desti-item">
                <h6>Copa Del Rey</h6>
                <div className="icon-box">
                  <div className="icon">
                    <img
                      src="assets/img/home-1/icon/counter-01.svg"
                      alt="img"
                    />
                  </div>
                  <h2>35</h2>
                  <p>Trophies</p>
                </div>
              </div>
              <div className="counter-items tv-desti-item">
                <h6>UEFA Champions League</h6>
                <div className="icon-box">
                  <div className="icon">
                    <img
                      src="assets/img/home-1/icon/counter-02.svg"
                      alt="img"
                    />
                  </div>
                  <h2>15</h2>
                  <p>Trophies</p>
                </div>
              </div>
              <div className="counter-items tv-desti-item">
                <h6>FIFA Club World Cup</h6>
                <div className="icon-box">
                  <div className="icon">
                    <img
                      src="assets/img/home-1/icon/counter-03.svg"
                      alt="img"
                    />
                  </div>
                  <h2>05</h2>
                  <p>Trophies</p>
                </div>
              </div>
              <div className="counter-items border-none tv-desti-item">
                <h6>Mondiale per Club</h6>
                <div className="icon-box">
                  <div className="icon">
                    <img
                      src="assets/img/home-1/icon/counter-04.svg"
                      alt="img"
                    />
                  </div>
                  <h2>08</h2>
                  <p>Trophies</p>
                </div>
              </div>
            </div>
          </div> */}
        </div>
      </section>

      {/* Testimonial Section Start  */}
      <section
        className="testimonial-section-4 fix bg-cover "
        style={{
          backgroundImage: "url('assets/img/inner/testimonial-bg.jpg')",
        }}
      >
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div className="swiper testimonial-slider-3">
                <div className="swiper-wrapper">
                  <div className="swiper-slide">
                    <div className="testimonial-box-4">
                      <p style={{ color: "white" }}>
                        The itinerary had a spot for Nottingham, but the rain
                        god had something else for her. The match was washed
                        away but Cricket Lovers Global made sure the vibes were
                        on and she had loads on her memory plate. Now she hopes
                        to see the CLG ambassadors in T20 World Cup as well. The
                        girl here is Supriya Katiyal proudly from Dhoni's town
                        and working in Hyderabad with JP Morgan Chase.””
                      </p>
                      <div className="client-info">
                        <img src="assets/img/inner/client.png" alt="img" />
                        <div className="info-content">
                          <h4>Pritam</h4>
                          <p>CLG member</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="swiper-slide">
                    <div className="testimonial-box-4">
                      <p style={{ color: "white" }}>
                        They make sure that tickets are available at the listed
                        price or they try to arrange tickets for the match and
                        if you happen to sit with them then you are up for a
                        great treat with masala chai and food and their
                        welcoming nature. The group has bigger plans to get all
                        Cricket lovers together across the globe. Their Facebook
                        pages always have pictures of Fans in the stadium
                        whenever there is a match going 8000 km, 10 hours, 2
                        stops and a girl landed in the UK to see her dreams
                        turning true.
                      </p>
                      <div className="client-info">
                        <img src="assets/img/inner/client.png" alt="img" />
                        <div className="info-content">
                          <h4>Supriya</h4>
                          <p>CLG member</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="swiper-slide">
                    <div className="testimonial-box-4">
                      <p style={{ color: "white" }}>
                        "Cricket lovers global is an awesome group of Cricket
                        lovers across countries. I started going with their
                        group of friends to the World cup 2019 in England and
                        the experience was amazing. Everyone has a passion for
                        cricket and they all are die-hard fans. We used to sit
                        in groups and enjoy watching matches and have great
                        discussions and celebrate wins and even take losses of
                        the Indian Cricket team wholeheartedly.On the WhatsApp
                        group, we do heated discussions about selections, IPL,
                        why some players are not performing etc. The organisers
                        of the group Piyush and Rahul are a great bunch of guys
                        with infinite love for cricket. "
                      </p>
                      <div className="client-info">
                        <img src="assets/images/profile1a.jpg" alt="img" />
                        <div className="info-content">
                          <h4>Pritam</h4>
                          <p>CLG member</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6 mt-4 mt-lg-0">
              <div className="testimonial-image">
                <img src="assets/img/inner/testimonial-image.jpg" alt="img" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section Start*/}
      <section className="team-section fix section-padding">
        <div className="container">
          <div className="section-title-area">
            <div className="section-title hero_title tv_hero_title hero_title_1">
              <h2>
                Meet Our <span> members</span>
              </h2>
            </div>
            <div
              className="array-button-2 d-flex align-items-center wow fadeInUp"
              data-wow-delay=".3s"
            >
              <button className="array-prev2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="24"
                  viewBox="0 0 20 24"
                  fill="none"
                >
                  <g opacity="0.72">
                    <path
                      d="M15.814 19.4316C16.2646 19.8822 16.9952 19.8822 17.4458 19.4316C17.8964 18.981 17.8964 18.2504 17.4458 17.7998L16.6299 18.6157L15.814 19.4316ZM3.37029 4.20228C2.73304 4.20228 2.21644 4.71887 2.21644 5.35613L2.21644 15.7407C2.21644 16.378 2.73303 16.8946 3.37029 16.8946C4.00754 16.8946 4.52413 16.378 4.52413 15.7407V6.50997H13.7549C14.3922 6.50997 14.9087 5.99338 14.9087 5.35613C14.9087 4.71887 14.3922 4.20228 13.7549 4.20228L3.37029 4.20228ZM16.6299 18.6157L17.4458 17.7998L4.18618 4.54023L3.37029 5.35613L2.55439 6.17202L15.814 19.4316L16.6299 18.6157Z"
                      fill="#464E5E"
                    />
                  </g>
                </svg>
              </button>
              <button className="array-next2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="20"
                  viewBox="0 0 24 20"
                  fill="none"
                >
                  <g opacity="0.72">
                    <path
                      d="M4.56838 15.814C4.11778 16.2646 4.11778 16.9952 4.56838 17.4458C5.01899 17.8964 5.74956 17.8964 6.20017 17.4458L5.38428 16.6299L4.56838 15.814ZM19.7977 3.37029C19.7977 2.73304 19.2811 2.21644 18.6439 2.21644L8.25926 2.21644C7.62201 2.21644 7.10541 2.73303 7.10541 3.37029C7.10541 4.00754 7.62201 4.52413 8.25926 4.52413H17.49V13.7549C17.49 14.3922 18.0066 14.9087 18.6439 14.9087C19.2811 14.9087 19.7977 14.3922 19.7977 13.7549L19.7977 3.37029ZM5.38428 16.6299L6.20017 17.4458L19.4598 4.18618L18.6439 3.37029L17.828 2.55439L4.56838 15.814L5.38428 16.6299Z"
                      fill="#464E5E"
                    />
                  </g>
                </svg>
              </button>
            </div>
          </div>
        </div>
        <div className="swiper team-slider">
          <div className="swiper-wrapper">
            <div className="swiper-slide">
              <div className="our-club-payer-item">
                <div className="player-image">
                  <img src="assets/images/care5.jpg" alt="img" />
                  <h2 className="number">07</h2>
                  <div className="player-content">
                    <h4>
                      <a href="team-details.html">Shikhon Islam</a>
                    </h4>
                    <p>Forward</p>
                  </div>
                  <div className="content-item">
                    <div className="content">
                      <h6>Appearances</h6>
                      <h5>106</h5>
                      <span>2025/2026</span>
                      <h6 className="title">0</h6>
                    </div>
                    <div className="content">
                      <h6>NITRO gola</h6>
                      <h5>29</h5>
                      <span>2025/2026</span>
                      <h6 className="title">0</h6>
                    </div>
                    <div className="content">
                      <h6>NITRO Assists</h6>
                      <h5>35</h5>
                      <span>2025/2026</span>
                      <h6 className="title">0</h6>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="swiper-slide">
              <div className="our-club-payer-item">
                <div className="player-image">
                  <img src="assets/images/care5.jpg" alt="img" />
                  <h2 className="number">16</h2>
                  <div className="player-content">
                    <h4>
                      <a href="team-details.html">Franz Beckenbauer</a>
                    </h4>
                    <p>Forward</p>
                  </div>
                  <div className="content-item">
                    <div className="content">
                      <h6>Appearances</h6>
                      <h5>106</h5>
                      <span>2025/2026</span>
                      <h6 className="title">0</h6>
                    </div>
                    <div className="content">
                      <h6>NITRO gola</h6>
                      <h5>29</h5>
                      <span>2025/2026</span>
                      <h6 className="title">0</h6>
                    </div>
                    <div className="content">
                      <h6>Johan Cruyff</h6>
                      <h5>35</h5>
                      <span>2025/2026</span>
                      <h6 className="title">0</h6>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="swiper-slide">
              <div className="our-club-payer-item">
                <div className="player-image">
                  <img src="assets/images/care5.jpg" alt="img" />
                  <h2 className="number">19</h2>
                  <div className="player-content">
                    <h4>
                      <a href="team-details.html">Johan Cruyff</a>
                    </h4>
                    <p>Forward</p>
                  </div>
                  <div className="content-item">
                    <div className="content">
                      <h6>Appearances</h6>
                      <h5>106</h5>
                      <span>2025/2026</span>
                      <h6 className="title">0</h6>
                    </div>
                    <div className="content">
                      <h6>NITRO gola</h6>
                      <h5>29</h5>
                      <span>2025/2026</span>
                      <h6 className="title">0</h6>
                    </div>
                    <div className="content">
                      <h6>NITRO Assists</h6>
                      <h5>35</h5>
                      <span>2025/2026</span>
                      <h6 className="title">0</h6>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="swiper-slide">
              <div className="our-club-payer-item">
                <div className="player-image">
                  <img src="assets/images/care5.jpg" alt="img" />
                  <h2 className="number">10</h2>
                  <div className="player-content">
                    <h4>
                      <a href="team-details.html">Shikhon Islam</a>
                    </h4>
                    <p>Forward</p>
                  </div>
                  <div className="content-item">
                    <div className="content">
                      <h6>Appearances</h6>
                      <h5>106</h5>
                      <span>2025/2026</span>
                      <h6 className="title">0</h6>
                    </div>
                    <div className="content">
                      <h6>NITRO gola</h6>
                      <h5>29</h5>
                      <span>2025/2026</span>
                      <h6 className="title">0</h6>
                    </div>
                    <div className="content">
                      <h6>NITRO Assists</h6>
                      <h5>35</h5>
                      <span>2025/2026</span>
                      <h6 className="title">0</h6>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="swiper-slide">
              <div className="our-club-payer-item">
                <div className="player-image">
                  <img src="assets/images/care5.jpg" alt="img" />
                  <h2 className="number">14</h2>
                  <div className="player-content">
                    <h4>
                      <a href="team-details.html">George Abbott</a>
                    </h4>
                    <p>Forward</p>
                  </div>
                  <div className="content-item">
                    <div className="content">
                      <h6>Appearances</h6>
                      <h5>106</h5>
                      <span>2025/2026</span>
                      <h6 className="title">0</h6>
                    </div>
                    <div className="content">
                      <h6>NITRO gola</h6>
                      <h5>29</h5>
                      <span>2025/2026</span>
                      <h6 className="title">0</h6>
                    </div>
                    <div className="content">
                      <h6>NITRO Assists</h6>
                      <h5>35</h5>
                      <span>2025/2026</span>
                      <h6 className="title">0</h6>
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
              <h3>social network</h3>
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
                      <a href="about.html">About</a>
                    </li>
                    <li>
                      <a href="about.html">Membership</a>
                    </li>
                    <li>
                      <a href="about.html">Events</a>
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
    </div>
  );
}
