import React from 'react';
import Link from "next/link";


export default function Gallerypage() {
    return (
        <div>
            

        {/*Preloader Start */}
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

         {/*Back To Top Start */}
        <button id="back-top" className="back-to-top">
            <i className="fa-regular fa-arrow-up"></i>
        </button>

        {/*MouseCursor Start */}
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
                        <h1 className="text-white wow fadeInUp" data-wow-delay=".3s">Our Gallery</h1>
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
                           Where we keep all our memories in the form of photos and videos from our amazing events.
                        </li>
                    </ul>
                </div>
            </div>
        </div>
        
        {/*Gallery Section part 1 Start */}
        <div className="gallery-section fix section-padding">
            <div className="container">
                <ul className="nav">
                    <li className="nav-item">
                        <a href="#all" data-bs-toggle="tab" className="nav-link active">
                            all <i className="fa-solid fa-arrow-up-right"></i>
                        </a>
                    </li>
                    <li className="nav-item">
                        <a href="#PLAYER" data-bs-toggle="tab" className="nav-link">
                            PLAYER <i className="fa-solid fa-arrow-up-right"></i>
                        </a>
                    </li>
                    <li className="nav-item">
                        <a href="#championship" data-bs-toggle="tab" className="nav-link">
                            members <i className="fa-solid fa-arrow-up-right"></i>
                        </a>
                    </li>
                    <li className="nav-item">
                        <a href="#coach" data-bs-toggle="tab" className="nav-link">
                            moment <i className="fa-solid fa-arrow-up-right"></i>
                        </a>
                    </li>
                    <li className="nav-item">
                        <a href="#goalkeepers" data-bs-toggle="tab" className="nav-link">
                            highlight <i className="fa-solid fa-arrow-up-right"></i>
                        </a>
                    </li>
                </ul>
                <div className="tab-content">
                    <div id="all" className="tab-pane fade show active">
                        <div className="row">
                            <div className="col-xl-4 col-lg-6 col-md-6">
                                <div className="gallery-thumb-inner">
                                    <img src="assets/img/inner/gallery/g1.jpg"  alt="img"/>
                                    <a href="#" className="gt-icon">
                                        <i className="fa-brands fa-instagram"></i>
                                    </a>
                                </div>
                                <div className="gallery-thumb-inner">
                                    <img src="assets/img/inner/gallery/g2.jpg"  alt="img"/>
                                    <a href="#" className="gt-icon">
                                        <i className="fa-brands fa-instagram"></i>
                                    </a>
                                </div>
                            </div>
                            <div className="col-xl-4 col-lg-6 col-md-6">
                                <div className="gallery-thumb-inner">
                                    <img src="assets/img/inner/gallery/g3.jpg"  alt="img"/>
                                    <a href="#" className="gt-icon">
                                        <i className="fa-brands fa-instagram"></i>
                                    </a>
                                </div>
                                <div className="gallery-thumb-inner">
                                    <img src="assets/img/inner/gallery/g4.jpg"  alt="img"/>
                                    <a href="#" className="gt-icon">
                                        <i className="fa-brands fa-instagram"></i>
                                    </a>
                                </div>
                            </div>
                            <div className="col-xl-4 col-lg-6 col-md-6">
                                <div className="gallery-thumb-inner">
                                    <img src="assets/img/inner/gallery/g5.jpg"  alt="img"/>
                                    <a href="#" className="gt-icon">
                                        <i className="fa-brands fa-instagram"></i>
                                    </a>
                                </div>
                                <div className="gallery-thumb-inner">
                                    <img src="assets/img/inner/gallery/g6.jpg"  alt="img"/>
                                    <a href="#" className="gt-icon">
                                        <i className="fa-brands fa-instagram"></i>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div id="PLAYER" className="tab-pane fade">
                       <div className="row">
                            <div className="col-xl-4 col-lg-6 col-md-6">
                                <div className="gallery-thumb-inner">
                                    <img src="assets/img/inner/gallery/g1.jpg"  alt="img"/>
                                    <a href="#" className="gt-icon">
                                        <i className="fa-brands fa-instagram"></i>
                                    </a>
                                </div>
                                <div className="gallery-thumb-inner">
                                    <img src="assets/img/inner/gallery/g2.jpg"  alt="img"/>
                                    <a href="#" className="gt-icon">
                                        <i className="fa-brands fa-instagram"></i>
                                    </a>
                                </div>
                            </div>
                            <div className="col-xl-4 col-lg-6 col-md-6">
                                <div className="gallery-thumb-inner">
                                    <img src="assets/img/inner/gallery/g3.jpg"  alt="img"/>
                                    <a href="#" className="gt-icon">
                                        <i className="fa-brands fa-instagram"></i>
                                    </a>
                                </div>
                                <div className="gallery-thumb-inner">
                                    <img src="assets/img/inner/gallery/g4.jpg"  alt="img"/>
                                    <a href="#" className="gt-icon">
                                        <i className="fa-brands fa-instagram"></i>
                                    </a>
                                </div>
                            </div>
                            <div className="col-xl-4 col-lg-6 col-md-6">
                                <div className="gallery-thumb-inner">
                                    <img src="assets/img/inner/gallery/g5.jpg"  alt="img"/>
                                    <a href="#" className="gt-icon">
                                        <i className="fa-brands fa-instagram"></i>
                                    </a>
                                </div>
                                <div className="gallery-thumb-inner">
                                    <img src="assets/img/inner/gallery/g6.jpg"  alt="img"/>
                                    <a href="#" className="gt-icon">
                                        <i className="fa-brands fa-instagram"></i>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div id="championship" className="tab-pane fade">
                       <div className="row">
                            <div className="col-xl-4 col-lg-6 col-md-6">
                                <div className="gallery-thumb-inner">
                                    <img src="assets/img/inner/gallery/g1.jpg"  alt="img"/>
                                    <a href="#" className="gt-icon">
                                        <i className="fa-brands fa-instagram"></i>
                                    </a>
                                </div>
                                <div className="gallery-thumb-inner">
                                    <img src="assets/img/inner/gallery/g2.jpg"  alt="img"/>
                                    <a href="#" className="gt-icon">
                                        <i className="fa-brands fa-instagram"></i>
                                    </a>
                                </div>
                            </div>
                            <div className="col-xl-4 col-lg-6 col-md-6">
                                <div className="gallery-thumb-inner">
                                    <img src="assets/img/inner/gallery/g3.jpg"  alt="img"/>
                                    <a href="#" className="gt-icon">
                                        <i className="fa-brands fa-instagram"></i>
                                    </a>
                                </div>
                                <div className="gallery-thumb-inner">
                                    <img src="assets/img/inner/gallery/g4.jpg"  alt="img"/>
                                    <a href="#" className="gt-icon">
                                        <i className="fa-brands fa-instagram"></i>
                                    </a>
                                </div>
                            </div>
                            <div className="col-xl-4 col-lg-6 col-md-6">
                                <div className="gallery-thumb-inner">
                                    <img src="assets/img/inner/gallery/g5.jpg"  alt="img"/>
                                    <a href="#" className="gt-icon">
                                        <i className="fa-brands fa-instagram"></i>
                                    </a>
                                </div>
                                <div className="gallery-thumb-inner">
                                    <img src="assets/img/inner/gallery/g6.jpg"  alt="img"/>
                                    <a href="#" className="gt-icon">
                                        <i className="fa-brands fa-instagram"></i>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div id="coach" className="tab-pane fade">
                        <div className="row">
                            <div className="col-xl-4 col-lg-6 col-md-6">
                                <div className="gallery-thumb-inner">
                                    <img src="assets/img/inner/gallery/g1.jpg"  alt="img"/>
                                    <a href="#" className="gt-icon">
                                        <i className="fa-brands fa-instagram"></i>
                                    </a>
                                </div>
                                <div className="gallery-thumb-inner">
                                    <img src="assets/img/inner/gallery/g2.jpg"  alt="img"/>
                                    <a href="#" className="gt-icon">
                                        <i className="fa-brands fa-instagram"></i>
                                    </a>
                                </div>
                            </div>
                            <div className="col-xl-4 col-lg-6 col-md-6">
                                <div className="gallery-thumb-inner">
                                    <img src="assets/img/inner/gallery/g3.jpg"  alt="img"/>
                                    <a href="#" className="gt-icon">
                                        <i className="fa-brands fa-instagram"></i>
                                    </a>
                                </div>
                                <div className="gallery-thumb-inner">
                                    <img src="assets/img/inner/gallery/g4.jpg"  alt="img"/>
                                    <a href="#" className="gt-icon">
                                        <i className="fa-brands fa-instagram"></i>
                                    </a>
                                </div>
                            </div>
                            <div className="col-xl-4 col-lg-6 col-md-6">
                                <div className="gallery-thumb-inner">
                                    <img src="assets/img/inner/gallery/g5.jpg"  alt="img"/>
                                    <a href="#" className="gt-icon">
                                        <i className="fa-brands fa-instagram"></i>
                                    </a>
                                </div>
                                <div className="gallery-thumb-inner">
                                    <img src="assets/img/inner/gallery/g6.jpg"  alt="img"/>
                                    <a href="#" className="gt-icon">
                                        <i className="fa-brands fa-instagram"></i>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div id="goalkeepers" className="tab-pane fade">
                       <div className="row">
                            <div className="col-xl-4 col-lg-6 col-md-6">
                                <div className="gallery-thumb-inner">
                                    <img src="assets/img/inner/gallery/g1.jpg"  alt="img"/>
                                    <a href="#" className="gt-icon">
                                        <i className="fa-brands fa-instagram"></i>
                                    </a>
                                </div>
                                <div className="gallery-thumb-inner">
                                    <img src="assets/img/inner/gallery/g2.jpg"  alt="img"/>
                                    <a href="#" className="gt-icon">
                                        <i className="fa-brands fa-instagram"></i>
                                    </a>
                                </div>
                            </div>
                            <div className="col-xl-4 col-lg-6 col-md-6">
                                <div className="gallery-thumb-inner">
                                    <img src="assets/img/inner/gallery/g3.jpg"  alt="img"/>
                                    <a href="#" className="gt-icon">
                                        <i className="fa-brands fa-instagram"></i>
                                    </a>
                                </div>
                                <div className="gallery-thumb-inner">
                                    <img src="assets/img/inner/gallery/g4.jpg"  alt="img"/>
                                    <a href="#" className="gt-icon">
                                        <i className="fa-brands fa-instagram"></i>
                                    </a>
                                </div>
                            </div>
                            <div className="col-xl-4 col-lg-6 col-md-6">
                                <div className="gallery-thumb-inner">
                                    <img src="assets/img/inner/gallery/g5.jpg"  alt="img"/>
                                    <a href="#" className="gt-icon">
                                        <i className="fa-brands fa-instagram"></i>
                                    </a>
                                </div>
                                <div className="gallery-thumb-inner">
                                    <img src="assets/img/inner/gallery/g6.jpg"  alt="img"/>
                                    <a href="#" className="gt-icon">
                                        <i className="fa-brands fa-instagram"></i>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        {/*Gallery Section part 2 Start */}
        <section className="club-blog-section fix section-padding bg-cover" style={{backgroundImage: "url('assets/img/home-1/club-blog/club-blog-bg.jpg')"}}>
            <div className="container">                                    
                <div className="row g-4">
                    <div className="col-xl-4 col-lg-6 col-md-6">
                        <div className="club-blog-items mt-0">
                            <div className="thumb">
                                <img src="assets/img/home-1/club-blog/blog-1.jpg" alt="img"/>
                            </div>
                            
                        </div>
                    </div>
                    <div className="col-xl-4 col-lg-6 col-md-6">
                        <div className="club-blog-items mt-0">
                            <div className="thumb">
                                <img src="assets/img/home-1/club-blog/blog-2.jpg" alt="img"/>
                            </div>
                            
                        </div>
                    </div>
                    <div className="col-xl-4 col-lg-6 col-md-6">
                        <div className="club-blog-items mt-0">
                            <div className="thumb">
                                <img src="assets/img/home-1/club-blog/blog-3.jpg" alt="img"/>
                            </div>
                            
                        </div>
                    </div>
                    <div className="col-xl-4 col-lg-6 col-md-6">
                        <div className="club-blog-items mt-0">
                            <div className="thumb">
                                <img src="assets/img/home-1/club-blog/blog-4.jpg" alt="img"/>
                            </div>
                           
                        </div>
                    </div>
                    <div className="col-xl-4 col-lg-6 col-md-6">
                        <div className="club-blog-items mt-0">
                            <div className="thumb">
                                <img src="assets/img/home-1/club-blog/blog-5.jpg" alt="img"/>
                            </div>
                            
                        </div>
                    </div>
                    <div className="col-xl-4 col-lg-6 col-md-6">
                        <div className="club-blog-items mt-0">
                            <div className="thumb">
                                <img src="assets/img/home-1/club-blog/blog-6.jpg" alt="img"/>
                            </div>
                            
                        </div>
                    </div>
                    <div className="col-xl-4 col-lg-6 col-md-6">
                        <div className="club-blog-items mt-0">
                            <div className="thumb">
                                <img src="assets/img/home-1/club-blog/blog-7.jpg" alt="img"/>
                            </div>
                            
                        </div>
                    </div>
                    <div className="col-xl-4 col-lg-6 col-md-6">
                        <div className="club-blog-items mt-0">
                            <div className="thumb">
                                <img src="assets/img/home-1/club-blog/blog-8.jpg" alt="img"/>
                            </div>
                            
                        </div>
                    </div>
                    <div className="col-xl-4 col-lg-6 col-md-6">
                        <div className="club-blog-items mt-0">
                            <div className="thumb">
                                <img src="assets/img/home-1/club-blog/blog-9.jpg" alt="img"/>
                            </div>
                            
                        </div>
                    </div>
                </div>
            </div>
        </section>
        {/* gallery section part 3 start */}
        <div className="gallery-section fix section-padding ">
            <div className="container">
                {/* <ul className="nav">
                    <li className="nav-item">
                        <a href="#all" data-bs-toggle="tab" className="nav-link active">
                            all <i className="fa-solid fa-arrow-up-right"></i>
                        </a>
                    </li>
                    <li className="nav-item">
                        <a href="#PLAYER" data-bs-toggle="tab" className="nav-link">
                            PLAYER <i className="fa-solid fa-arrow-up-right"></i>
                        </a>
                    </li>
                    <li className="nav-item">
                        <a href="#championship" data-bs-toggle="tab" className="nav-link">
                            championship <i className="fa-solid fa-arrow-up-right"></i>
                        </a>
                    </li>
                    <li className="nav-item">
                        <a href="#coach" data-bs-toggle="tab" className="nav-link">
                            coach <i className="fa-solid fa-arrow-up-right"></i>
                        </a>
                    </li>
                    <li className="nav-item">
                        <a href="#goalkeepers" data-bs-toggle="tab" className="nav-link">
                            goalkeepers <i className="fa-solid fa-arrow-up-right"></i>
                        </a>
                    </li>
                </ul> */}
                <div className="tab-content">
                    <div id="all" className="tab-pane fade show active">
                        <div className="row">
                            <div className="col-xl-4 col-lg-6 col-md-6">
                                <div className="gallery-thumb-inner">
                                    <img src="assets/img/inner/gallery/g1.jpg"  alt="img"/>
                                    <a href="#" className="gt-icon">
                                        <i className="fa-brands fa-instagram"></i>
                                    </a>
                                </div>
                                <div className="gallery-thumb-inner">
                                    <img src="assets/img/inner/gallery/g2.jpg"  alt="img"/>
                                    <a href="#" className="gt-icon">
                                        <i className="fa-brands fa-instagram"></i>
                                    </a>
                                </div>
                            </div>
                            <div className="col-xl-4 col-lg-6 col-md-6">
                                <div className="gallery-thumb-inner">
                                    <img src="assets/img/inner/gallery/g3.jpg"  alt="img"/>
                                    <a href="#" className="gt-icon">
                                        <i className="fa-brands fa-instagram"></i>
                                    </a>
                                </div>
                                <div className="gallery-thumb-inner">
                                    <img src="assets/img/inner/gallery/g4.jpg"  alt="img"/>
                                    <a href="#" className="gt-icon">
                                        <i className="fa-brands fa-instagram"></i>
                                    </a>
                                </div>
                            </div>
                            <div className="col-xl-4 col-lg-6 col-md-6">
                                <div className="gallery-thumb-inner">
                                    <img src="assets/img/inner/gallery/g5.jpg"  alt="img"/>
                                    <a href="#" className="gt-icon">
                                        <i className="fa-brands fa-instagram"></i>
                                    </a>
                                </div>
                                <div className="gallery-thumb-inner">
                                    <img src="assets/img/inner/gallery/g6.jpg"  alt="img"/>
                                    <a href="#" className="gt-icon">
                                        <i className="fa-brands fa-instagram"></i>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div id="PLAYER" className="tab-pane fade">
                       <div className="row">
                            <div className="col-xl-4 col-lg-6 col-md-6">
                                <div className="gallery-thumb-inner">
                                    <img src="assets/img/inner/gallery/g1.jpg"  alt="img"/>
                                    <a href="#" className="gt-icon">
                                        <i className="fa-brands fa-instagram"></i>
                                    </a>
                                </div>
                                <div className="gallery-thumb-inner">
                                    <img src="assets/img/inner/gallery/g2.jpg"  alt="img"/>
                                    <a href="#" className="gt-icon">
                                        <i className="fa-brands fa-instagram"></i>
                                    </a>
                                </div>
                            </div>
                            <div className="col-xl-4 col-lg-6 col-md-6">
                                <div className="gallery-thumb-inner">
                                    <img src="assets/img/inner/gallery/g3.jpg"  alt="img"/>
                                    <a href="#" className="gt-icon">
                                        <i className="fa-brands fa-instagram"></i>
                                    </a>
                                </div>
                                <div className="gallery-thumb-inner">
                                    <img src="assets/img/inner/gallery/g4.jpg"  alt="img"/>
                                    <a href="#" className="gt-icon">
                                        <i className="fa-brands fa-instagram"></i>
                                    </a>
                                </div>
                            </div>
                            <div className="col-xl-4 col-lg-6 col-md-6">
                                <div className="gallery-thumb-inner">
                                    <img src="assets/img/inner/gallery/g5.jpg"  alt="img"/>
                                    <a href="#" className="gt-icon">
                                        <i className="fa-brands fa-instagram"></i>
                                    </a>
                                </div>
                                <div className="gallery-thumb-inner">
                                    <img src="assets/img/inner/gallery/g6.jpg"  alt="img"/>
                                    <a href="#" className="gt-icon">
                                        <i className="fa-brands fa-instagram"></i>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div id="championship" className="tab-pane fade">
                       <div className="row">
                            <div className="col-xl-4 col-lg-6 col-md-6">
                                <div className="gallery-thumb-inner">
                                    <img src="assets/img/inner/gallery/g1.jpg"  alt="img"/>
                                    <a href="#" className="gt-icon">
                                        <i className="fa-brands fa-instagram"></i>
                                    </a>
                                </div>
                                <div className="gallery-thumb-inner">
                                    <img src="assets/img/inner/gallery/g2.jpg"  alt="img"/>
                                    <a href="#" className="gt-icon">
                                        <i className="fa-brands fa-instagram"></i>
                                    </a>
                                </div>
                            </div>
                            <div className="col-xl-4 col-lg-6 col-md-6">
                                <div className="gallery-thumb-inner">
                                    <img src="assets/img/inner/gallery/g3.jpg"  alt="img"/>
                                    <a href="#" className="gt-icon">
                                        <i className="fa-brands fa-instagram"></i>
                                    </a>
                                </div>
                                <div className="gallery-thumb-inner">
                                    <img src="assets/img/inner/gallery/g4.jpg"  alt="img"/>
                                    <a href="#" className="gt-icon">
                                        <i className="fa-brands fa-instagram"></i>
                                    </a>
                                </div>
                            </div>
                            <div className="col-xl-4 col-lg-6 col-md-6">
                                <div className="gallery-thumb-inner">
                                    <img src="assets/img/inner/gallery/g5.jpg"  alt="img"/>
                                    <a href="#" className="gt-icon">
                                        <i className="fa-brands fa-instagram"></i>
                                    </a>
                                </div>
                                <div className="gallery-thumb-inner">
                                    <img src="assets/img/inner/gallery/g6.jpg"  alt="img"/>
                                    <a href="#" className="gt-icon">
                                        <i className="fa-brands fa-instagram"></i>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div id="coach" className="tab-pane fade">
                        <div className="row">
                            <div className="col-xl-4 col-lg-6 col-md-6">
                                <div className="gallery-thumb-inner">
                                    <img src="assets/img/inner/gallery/g1.jpg"  alt="img"/>
                                    <a href="#" className="gt-icon">
                                        <i className="fa-brands fa-instagram"></i>
                                    </a>
                                </div>
                                <div className="gallery-thumb-inner">
                                    <img src="assets/img/inner/gallery/g2.jpg"  alt="img"/>
                                    <a href="#" className="gt-icon">
                                        <i className="fa-brands fa-instagram"></i>
                                    </a>
                                </div>
                            </div>
                            <div className="col-xl-4 col-lg-6 col-md-6">
                                <div className="gallery-thumb-inner">
                                    <img src="assets/img/inner/gallery/g3.jpg"  alt="img"/>
                                    <a href="#" className="gt-icon">
                                        <i className="fa-brands fa-instagram"></i>
                                    </a>
                                </div>
                                <div className="gallery-thumb-inner">
                                    <img src="assets/img/inner/gallery/g4.jpg"  alt="img"/>
                                    <a href="#" className="gt-icon">
                                        <i className="fa-brands fa-instagram"></i>
                                    </a>
                                </div>
                            </div>
                            <div className="col-xl-4 col-lg-6 col-md-6">
                                <div className="gallery-thumb-inner">
                                    <img src="assets/img/inner/gallery/g5.jpg"  alt="img"/>
                                    <a href="#" className="gt-icon">
                                        <i className="fa-brands fa-instagram"></i>
                                    </a>
                                </div>
                                <div className="gallery-thumb-inner">
                                    <img src="assets/img/inner/gallery/g6.jpg"  alt="img"/>
                                    <a href="#" className="gt-icon">
                                        <i className="fa-brands fa-instagram"></i>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div id="goalkeepers" className="tab-pane fade">
                       <div className="row">
                            <div className="col-xl-4 col-lg-6 col-md-6">
                                <div className="gallery-thumb-inner">
                                    <img src="assets/img/inner/gallery/g1.jpg"  alt="img"/>
                                    <a href="#" className="gt-icon">
                                        <i className="fa-brands fa-instagram"></i>
                                    </a>
                                </div>
                                <div className="gallery-thumb-inner">
                                    <img src="assets/img/inner/gallery/g2.jpg"  alt="img"/>
                                    <a href="#" className="gt-icon">
                                        <i className="fa-brands fa-instagram"></i>
                                    </a>
                                </div>
                            </div>
                            <div className="col-xl-4 col-lg-6 col-md-6">
                                <div className="gallery-thumb-inner">
                                    <img src="assets/img/inner/gallery/g3.jpg"  alt="img"/>
                                    <a href="#" className="gt-icon">
                                        <i className="fa-brands fa-instagram"></i>
                                    </a>
                                </div>
                                <div className="gallery-thumb-inner">
                                    <img src="assets/img/inner/gallery/g4.jpg"  alt="img"/>
                                    <a href="#" className="gt-icon">
                                        <i className="fa-brands fa-instagram"></i>
                                    </a>
                                </div>
                            </div>
                            <div className="col-xl-4 col-lg-6 col-md-6">
                                <div className="gallery-thumb-inner">
                                    <img src="assets/img/inner/gallery/g5.jpg"  alt="img"/>
                                    <a href="#" className="gt-icon">
                                        <i className="fa-brands fa-instagram"></i>
                                    </a>
                                </div>
                                <div className="gallery-thumb-inner">
                                    <img src="assets/img/inner/gallery/g6.jpg"  alt="img"/>
                                    <a href="#" className="gt-icon">
                                        <i className="fa-brands fa-instagram"></i>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        {/* gallery section part 4 history */}
         <section className="news-section fix section-padding pb-0">
        <div className="container">
          <div className="section-title-area">
            <div className="section-title hero_title tv_hero_title hero_title_1">
              <h2>
                We keep all our  <span>Memories</span>
              </h2>
            </div>
            <a
              href="news.html"
              className="theme-btn wow fadeInUp"
              data-wow-delay=".3s"
            >
              Watch more <i className="fa-solid fa-arrow-up-right"></i>
            </a>
          </div>
          <div className="row">
            <div className="col-lg-12 wow fadeInUp" data-wow-delay=".3s">
              <div className="news-thumb1">
                <img src="assets/img/home-1/news/news-01.jpg" alt="ing" />
                <div className="video-box">
                  <a
                    href="https://www.youtube.com/watch?v=Cn4G2lZ_g2I"
                    className="video-btn video-popup"
                  >
                    <i className="fa-solid fa-circle-play"></i>
                  </a>
                  1:09
                </div>
                <div className="news-content">
                  <span>World Cup</span>
                  <ul>
                    <li>February 28, 2018</li>
                   
                    
                      
                  </ul>
                  <h3>
                    <a href="news-details.html">
                        Exciting Moments from the World Cup Finals Highlights
                    </a>
                  </h3>
                </div>
              </div>
            </div>
            <div
              className="col-xl-4 col-lg-6 col-md-6 wow fadeInUp"
              data-wow-delay=".3s"
            >
              <div className="news-box-items">
                <div className="thumb">
                  <img src="assets/img/home-1/news/news-02.jpg" alt="img" />
                  <div className="video-box">
                    <a
                      href="https://www.youtube.com/watch?v=Cn4G2lZ_g2I"
                      className="video-btn video-popup"
                    >
                      <i className="fa-solid fa-circle-play"></i>
                    </a>
                    16:09
                  </div>
                </div>
                <div className="content">
                  <span>VIDEO </span>
                  <ul>
                    
                    <li>
                      {/* <i className="fa-solid fa-clock"></i> */}
                      
                    </li>
                  </ul>
                    
                  
                  <h3>
                    <a href="news-details.html">
                      India vs England T20 
                    </a>
                  </h3>
                </div>
              </div>
            </div>
            <div
              className="col-xl-4 col-lg-6 col-md-6 wow fadeInUp"
              data-wow-delay=".5s"
            >
              <div className="news-box-items">
                <div className="thumb">
                  <img src="assets/img/home-1/news/news-03.jpg" alt="img" />
                  <div className="video-box">
                    <a
                      href="https://www.youtube.com/watch?v=Cn4G2lZ_g2I"
                      className="video-btn video-popup"
                    >
                      <i className="fa-solid fa-circle-play"></i>
                    </a>
                    1:09
                  </div>
                </div>
                <div className="content">
                  <span>Features </span>
                  <ul>
                    
                    <li>
                      {/* <i className="fa-solid fa-clock"></i> */}
                      
                    </li>
                  </ul>
                  <h3>
                    <a href="news-details.html">
                       Highlights
                    </a>
                  </h3>
                </div>
              </div>
            </div>
            <div
              className="col-xl-4 col-lg-6 col-md-6 wow fadeInUp"
              data-wow-delay=".7s"
            >
              <div className="news-box-items">
                <div className="thumb">
                  <img src="assets/img/home-1/news/news-04.jpg" alt="img" />
                  <div className="video-box">
                    <a
                      href="https://www.youtube.com/watch?v=Cn4G2lZ_g2I"
                      className="video-btn video-popup"
                    >
                      <i className="fa-solid fa-circle-play"></i>
                    </a>
                    1:09
                  </div>
                </div>
                <div className="content">
                  <span>VIDEO </span>
                  <ul>
                    {/* <li>February 28, 2018</li> */}
                    {/* <li>/</li> */}
                    <li>
                      {/* <i className="fa-solid fa-clock"></i> */}
                      
                    </li>
                  </ul>
                  <h3>
                    <a href="news-details.html">
                      News
                    </a>
                  </h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section> 
      
        {/*Footer Section Start */}
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
        
        
         {/*All JS Plugins >>*/}
        <script src="assets/js/jquery-3.7.1.min.js"></script>
         {/*Viewport Js >>*/}
        <script src="assets/js/viewport.jquery.js"></script>
         {/*Bootstrap Js >>*/}
        <script src="assets/js/bootstrap.bundle.min.js"></script>
         {/*nice-selec Js >>*/}
        <script src="assets/js/jquery.nice-select.min.js"></script>
         {/*Waypoints Js >>*/}
        <script src="assets/js/jquery.waypoints.js"></script>
         {/*Counterup Js >>*/}
        <script src="assets/js/jquery.counterup.min.js"></script>
         {/*Swiper Slider Js >>*/}
        <script src="assets/js/swiper-bundle.min.js"></script>
         {/*MeanMenu Js >>*/}
        <script src="assets/js/jquery.meanmenu.min.js"></script>
         {/*Parallaxie Js >>*/}
        <script src="assets/js/parallaxie.js"></script>
         {/*Magnific Popup Js >>*/}
        <script src="assets/js/jquery.magnific-popup.min.js"></script>
         {/*Wow Animation Js >>*/}
        <script src="assets/js/wow.min.js"></script>
         {/*Gsap Animation Js >>*/}
        <script src="assets/js/gsap.min.js"></script>
         {/*ScrollTrigger Js >>*/}
        <script src="assets/js/ScrollTrigger.min.js"></script>
         {/*SplitText Js >>*/}
        <script src="assets/js/SplitText.min.js"></script>
         {/*splitType Js >>*/}
        <script src="assets/js/splitType.js"></script>
         {/*Main.js >>*/}
        <script src="assets/js/main.js"></script>
    
            
        </div>
    );
}

 