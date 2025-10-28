import React from "react";
import Link from "next/link";
import Script from "next/script";

export default function Aboutpage() {
  return (
    <div>
      {/** Script tags */}
      {/* jQuery - Load first as other Scripts depend on it */}
      <Script
        src="/assets/js/jquery-3.7.1.min.js"
        strategy="beforeInteractive"
      ></Script>

      {/* All JS Plugins*/}
      <Script src="assets/js/jquery-3.7.1.min.js"></Script>
      {/* Viewport Js*/}
      <Script src="assets/js/viewport.jquery.js"></Script>
      {/* Bootstrap Js*/}
      <Script src="assets/js/bootstrap.bundle.min.js"></Script>
      {/* nice-selec Js*/}
      <Script src="assets/js/jquery.nice-select.min.js"></Script>
      {/* Waypoints Js*/}
      <Script src="assets/js/jquery.waypoints.js"></Script>
      {/* Counterup Js*/}
      <Script src="assets/js/jquery.counterup.min.js"></Script>
      {/* Swiper Slider Js*/}
      <Script src="assets/js/swiper-bundle.min.js"></Script>
      {/* MeanMenu Js*/}
      <Script src="assets/js/jquery.meanmenu.min.js"></Script>
      {/* Parallaxie Js*/}
      <Script src="assets/js/parallaxie.js"></Script>
      {/* Magnific Popup Js*/}
      <Script src="assets/js/jquery.magnific-popup.min.js"></Script>
      {/* Wow Animation Js*/}
      <Script src="assets/js/wow.min.js"></Script>
      {/* Gsap Animation Js*/}
      <Script src="assets/js/gsap.min.js"></Script>
      {/* ScrollTrigger Js*/}
      <Script src="assets/js/ScrollTrigger.min.js"></Script>
      {/* SplitText Js*/}
      <Script src="assets/js/SplitText.min.js"></Script>
      {/* splitType Js*/}
      <Script src="assets/js/splitType.js"></Script>
      {/* Main.js*/}
      <Script src="assets/js/main.js"></Script>

      
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
                          <Link href="/" className="border-none">
                            Home
                          </Link>
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

      <div
        className="gt-breadcrumb-wrapper bg-cover"
        style={{
          backgroundImage: "url('assets/img/breadcrumb-bg.jpg')",
        }}
      >
        <div className="container">
          <div className="gt-page-heading">
            <div className="gt-breadcrumb-sub-title">
              <h1 className="text-white wow fadeInUp" data-wow-delay=".3s">
                about us{" "}
              </h1>
            </div>
            <ul
              className="gt-breadcrumb-items wow fadeInUp"
              data-wow-delay=".5s"
            >
              <li>
                <a href="/home">Home</a>
              </li>
              <li>
                <i className="fa-solid fa-chevron-right"></i>
              </li>
              <li>about us</li>
            </ul>
          </div>
        </div>
      </div>

      {/* About Section Start*/}

      <section className="about-section-2 section-padding">
        <div className="vec-shape">
          <img src="assets/img/home-2/about/vec-shape.png" alt="img" />
        </div>
        <div className="container">
          <div className="about-wrapper-2">
            <div className="row">
              <div className="col-lg-6 wow fadeInUp" data-wow-delay=".3s">
                <div className="about-image-items">
                  <div className="about-image">
                    <img src="assets/img/home-2/about/about-01.png" alt="img" />
                    <div className="text-circle">
                      <img
                        src="assets/img/home-2/about/circle-text.png"
                        alt="img"
                      />
                      <div className="ball-cicrle">
                        <img
                          src="assets/img/home-2/about/ball.png"
                          alt="img/"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="about-sm-img">
                    <img src="assets/img/home-2/about/about-02.png" alt="img" />
                    <div className="img">
                      <img
                        src="assets/img/home-2/about/Shape-1.png"
                        alt="img"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="about-content">
                  <div className="section-title mb-0">
                    <h6 className="wow fadeInUp">About</h6>
                    <h2 className="hero_title tv_hero_title hero_title_1">
                      What is <span>Cricket Lovers Global?</span>
                    </h2>
                  </div>
                  <p className="about-text wow fadeInUp" data-wow-delay=".3s">
                    As the tag line “Passion Beyond Boundaries” suggests, it’s a
                    place for everyone in love with the sport irrespective of
                    the franchise or country you support. It’s nothing else but
                    the passion that binds this community together. As part of
                    CLG (
                    <span style={{ color: "Red" }}>Cricket Lovers Global</span>
                    ), you are first a lover of the sport and then a follower of
                    your franchise or country cricket team. We at Cricket Lovers
                    Global take pride in equally supporting men and women
                    cricket. In fact, promoting and creating awareness about
                    women cricket is very close to our heart. We also encourage
                    more and more youngsters to take up the sport. If you live
                    and breathe cricket day in and day out, then you have landed
                    at the right place. Check out our membership page (link) on
                    how you can become a member of this ever-growing community.
                  </p>
                  {/* <h5 class="wow fadeInUp" data-wow-delay=".5s">GREATNESS STARTS HERE.</h5>
                                <div class="text-area wow fadeInUp" data-wow-delay=".7s">
                                    <h3>/05:01</h3>
                                    <p>Player -To- Cooch Ratio</p>
                                </div> */}
                  <a
                    href="team.html"
                    className="theme-btn wow fadeInUp"
                    data-wow-delay=".8s"
                  >
                    Join the club <i className="fa-solid fa-arrow-up-right"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section Start*/}
      <section className="team-section-4 fix section-padding section-bg">
        <div className="container">
          <div className="section-title text-center hero_title tv_hero_title hero_title_1">
            <h2>The History of Cricket lovers globals</h2>
          </div>
          <div className="row">
            <div
              className="col-xl-3 col-lg-4 col-md-6 wow fadeInUp"
              data-wow-delay=".2s"
            >
              <div className="team-box-items-3">
                <div className="thumb">
                  <img src="assets/img/inner/team/team01.jpg" alt="img" />
                </div>
                <div className="content bg-white">
                  <h3>
                    <a href="team-details.html">Hansi Flick </a>
                  </h3>
                  <p className="mt-0">(2024-...) RANNING</p>
                </div>
              </div>
            </div>
            <div
              className="col-xl-3 col-lg-4 col-md-6 wow fadeInUp"
              data-wow-delay=".4s"
            >
              <div className="team-box-items-3">
                <div className="thumb">
                  <img src="assets/img/inner/team/team02.jpg" alt="img" />
                </div>
                <div className="content bg-white">
                  <h3>
                    <a href="team-details.html">Xavi Hernández </a>
                  </h3>
                  <p className="mt-0">(2024-...) RANNING</p>
                </div>
              </div>
            </div>
            <div
              className="col-xl-3 col-lg-4 col-md-6 wow fadeInUp"
              data-wow-delay=".6s"
            >
              <div className="team-box-items-3">
                <div className="thumb">
                  <img src="assets/img/inner/team/team03.jpg" alt="img" />
                </div>
                <div className="content bg-white">
                  <h3>
                    <a href="team-details.html">Ronald Koeman</a>
                  </h3>
                  <p className="mt-0">(2024-...) RANNING</p>
                </div>
              </div>
            </div>
            <div
              className="col-xl-3 col-lg-4 col-md-6 wow fadeInUp"
              data-wow-delay=".8s"
            >
              <div className="team-box-items-3">
                <div className="thumb">
                  <img src="assets/img/inner/team/team04.jpg" alt="img" />
                </div>
                <div className="content bg-white">
                  <h3>
                    <a href="team-details.html">Hansi Flick </a>
                  </h3>
                  <p className="mt-0">(2024-...) RANNING</p>
                </div>
              </div>
            </div>
            <div
              className="col-xl-3 col-lg-4 col-md-6 wow fadeInUp"
              data-wow-delay=".2s"
            >
              <div className="team-box-items-3">
                <div className="thumb">
                  <img src="assets/img/inner/team/team05.jpg" alt="img" />
                </div>
                <div className="content bg-white">
                  <h3>
                    <a href="team-details.html">Ernesto Valverde</a>
                  </h3>
                  <p className="mt-0">(2024-...) RANNING</p>
                </div>
              </div>
            </div>
            <div
              className="col-xl-3 col-lg-4 col-md-6 wow fadeInUp"
              data-wow-delay=".4s"
            >
              <div className="team-box-items-3">
                <div className="thumb">
                  <img src="assets/img/inner/team/team06.jpg" alt="img" />
                </div>
                <div className="content bg-white">
                  <h3>
                    <a href="team-details.html">Luis Enrique </a>
                  </h3>
                  <p className="mt-0">(2024-...) RANNING</p>
                </div>
              </div>
            </div>
            <div
              className="col-xl-3 col-lg-4 col-md-6 wow fadeInUp"
              data-wow-delay=".6s"
            >
              <div className="team-box-items-3">
                <div className="thumb">
                  <img src="assets/img/inner/team/team07.jpg" alt="img" />
                </div>
                <div className="content bg-white">
                  <h3>
                    <a href="team-details.html">Tata' Martino</a>
                  </h3>
                  <p className="mt-0">(2024-...) RANNING</p>
                </div>
              </div>
            </div>
            <div
              className="col-xl-3 col-lg-4 col-md-6 wow fadeInUp"
              data-wow-delay=".8s"
            >
              <div className="team-box-items-3">
                <div className="thumb">
                  <img src="assets/img/inner/team/team08.jpg" alt="img" />
                </div>
                <div className="content bg-white">
                  <h3>
                    <a href="team-details.html">Tito Vilanova</a>
                  </h3>
                  <p className="mt-0">(2024-...) RANNING</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      
      <section
        className="relative bg-cover  bg-center bg-no-repeat text-white flex flex-col items-center justify-center text-center mb-2 px-6 py-16 md:py-28 h-[60vh] md:h-[78vh]"
        style={{ backgroundImage: "url('assets/img/home-1/hero-bg.jpg')" }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-[#001B5E]/70"></div>

        {/* Content */}
        <div className="relative z-10 max-w-5xl">
          <div className="text-9xl font-extrabold leading-tight">“</div>

          <h2 className="text-2xl sm:text-4xl md:text-6xl mb-2 font-semibold uppercase leading-tight tracking-wider text-white py-2">
            CRICKET LOVERS GROUP
            <br />
            MAKE SURE TICKETS ARE
            <br />
            ONLY SOLD AT FACE VALUE
            <br />
            AND THEY HAVE A<br />
            WELCOMING NATURE.
          </h2>

          <p className="mt-6 text-sm md:text-base italic text-gray-200 ">
            Pritam - CLG Member
          </p>
        </div>
      </section>

      {/* Brand Section Start*/}
      <section className="brand-section-3 section-bg section-padding">
        <div className="container">
          <div className="section-title text-center hero_title tv_hero_title hero_title_1">
            <h2>Our Partners</h2>
          </div>
          <div className="swiper brand-slider-3">
            <div className="swiper-wrapper">
              <div className="swiper-slide">
                <div className="brand-logo-3">
                  <img src="assets/img/home-3/brand/brand-1.png" alt="img" />
                </div>
              </div>
              <div className="swiper-slide">
                <div className="brand-logo-3">
                  <img src="assets/img/home-3/brand/brand-2.png" alt="img" />
                </div>
              </div>
              <div className="swiper-slide">
                <div className="brand-logo-3">
                  <img src="assets/img/home-3/brand/brand-3.png" alt="img" />
                </div>
              </div>
              <div className="swiper-slide">
                <div className="brand-logo-3">
                  <img src="assets/img/home-3/brand/brand-4.png" alt="img" />
                </div>
              </div>
              <div className="swiper-slide">
                <div className="brand-logo-3">
                  <img src="assets/img/home-3/brand/brand-5.png" alt="img" />
                </div>
              </div>
              <div className="swiper-slide">
                <div className="brand-logo-3">
                  <img src="assets/img/home-3/brand/brand-6.png" alt="img" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* banner  */}

      {/* Match Moments Section Start*/}
      <div className="match-moments-section fix section-padding section-bg pt-0">
        <div className="container">
          <div className="section-title-area">
            <div className="section-title hero_title tv_hero_title hero_title_1">
              <h2>
                {" "}
                Moments & <span className="text-weight-700">Memories</span>
              </h2>
            </div>
            <ul className="nav wow fadeInUp" data-wow-delay=".3s">
              <li className="nav-item">
                <a href="#all" data-bs-toggle="tab" className="nav-link active">
                  all <i className="fa-solid fa-arrow-up-right"></i>
                </a>
              </li>
              <li className="nav-item">
                <a href="#HIGHLIGHTS" data-bs-toggle="tab" className="nav-link">
                  HIGHLIGHTS <i className="fa-solid fa-arrow-up-right"></i>
                </a>
              </li>
              <li className="nav-item">
                <a href="#INTERVIEWS" data-bs-toggle="tab" className="nav-link">
                  INTERVIEWS <i className="fa-solid fa-arrow-up-right"></i>
                </a>
              </li>
              <li className="nav-item">
                <a href="#VIDEO" data-bs-toggle="tab" className="nav-link">
                  VIDEO <i className="fa-solid fa-arrow-up-right"></i>
                </a>
              </li>
            </ul>
          </div>
          <div className="tab-content">
            <div id="all" className="tab-pane fade show active">
              <div className="row">
                <div className="col-xl-4 wow fadeInUp" data-wow-delay=".3s">
                  <div className="match-moments-image">
                    <img
                      src="assets/img/home-3/match-moment/m-1.jpg"
                      alt="img"
                    />
                    <a href="index.html" className="gt-icon">
                      <i className="fa-brands fa-instagram"></i>
                    </a>
                  </div>
                </div>
                <div className="col-xl-4 wow fadeInUp" data-wow-delay=".5s">
                  <div className="row">
                    <div className="col-lg-12">
                      <div className="match-moments-image">
                        <img
                          src="assets/img/home-3/match-moment/m-2.jpg"
                          alt="img"
                        />
                        <a href="index.html" className="gt-icon">
                          <i className="fa-brands fa-instagram"></i>
                        </a>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="match-moments-image">
                        <img
                          src="assets/img/home-3/match-moment/m-3.jpg"
                          alt="img"
                        />
                        <a href="index.html" className="gt-icon">
                          <i className="fa-brands fa-instagram"></i>
                        </a>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="match-moments-image">
                        <img
                          src="assets/img/home-3/match-moment/m-4.jpg"
                          alt="img"
                        />
                        <a href="index.html" className="gt-icon">
                          <i className="fa-brands fa-instagram"></i>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-xl-4 wow fadeInUp" data-wow-delay=".7s">
                  <div className="row">
                    <div className="col-md-6">
                      <div className="match-moments-image">
                        <img
                          src="assets/img/home-3/match-moment/m-5.jpg"
                          alt="img"
                        />
                        <a href="index.html" className="gt-icon">
                          <i className="fa-brands fa-instagram"></i>
                        </a>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="match-moments-image">
                        <img
                          src="assets/img/home-3/match-moment/m-6.jpg"
                          alt="img"
                        />
                        <a href="index.html" className="gt-icon">
                          <i className="fa-brands fa-instagram"></i>
                        </a>
                      </div>
                    </div>
                    <div className="col-lg-12">
                      <div className="match-moments-image">
                        <img
                          src="assets/img/home-3/match-moment/m-7.jpg"
                          alt="img"
                        />
                        <a href="index.html" className="gt-icon">
                          <i className="fa-brands fa-instagram"></i>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div id="HIGHLIGHTS" className="tab-pane fade">
              <div className="row">
                <div className="col-xl-4">
                  <div className="match-moments-image">
                    <img
                      src="assets/img/home-3/match-moment/m-1.jpg"
                      alt="img"
                    />
                    <a href="index.html" className="gt-icon">
                      <i className="fa-brands fa-instagram"></i>
                    </a>
                  </div>
                </div>
                <div className="col-xl-4">
                  <div className="row">
                    <div className="col-lg-12">
                      <div className="match-moments-image">
                        <img
                          src="assets/img/home-3/match-moment/m-2.jpg"
                          alt="img"
                        />
                        <a href="index.html" className="gt-icon">
                          <i className="fa-brands fa-instagram"></i>
                        </a>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="match-moments-image">
                        <img
                          src="assets/img/home-3/match-moment/m-3.jpg"
                          alt="img"
                        />
                        <a href="index.html" className="gt-icon">
                          <i className="fa-brands fa-instagram"></i>
                        </a>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="match-moments-image">
                        <img
                          src="assets/img/home-3/match-moment/m-4.jpg"
                          alt="img"
                        />
                        <a href="index.html" className="gt-icon">
                          <i className="fa-brands fa-instagram"></i>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-xl-4">
                  <div className="row">
                    <div className="col-md-6">
                      <div className="match-moments-image">
                        <img
                          src="assets/img/home-3/match-moment/m-5.jpg"
                          alt="img"
                        />
                        <a href="index.html" className="gt-icon">
                          <i className="fa-brands fa-instagram"></i>
                        </a>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="match-moments-image">
                        <img
                          src="assets/img/home-3/match-moment/m-6.jpg"
                          alt="img"
                        />
                        <a href="index.html" className="gt-icon">
                          <i className="fa-brands fa-instagram"></i>
                        </a>
                      </div>
                    </div>
                    <div className="col-lg-12">
                      <div className="match-moments-image">
                        <img
                          src="assets/img/home-3/match-moment/m-7.jpg"
                          alt="img"
                        />
                        <a href="index.html" className="gt-icon">
                          <i className="fa-brands fa-instagram"></i>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div id="INTERVIEWS" className="tab-pane fade">
              <div className="row">
                <div className="col-xl-4">
                  <div className="match-moments-image">
                    <img
                      src="assets/img/home-3/match-moment/m-1.jpg"
                      alt="img"
                    />
                    <a href="index.html" className="gt-icon">
                      <i className="fa-brands fa-instagram"></i>
                    </a>
                  </div>
                </div>
                <div className="col-xl-4">
                  <div className="row">
                    <div className="col-lg-12">
                      <div className="match-moments-image">
                        <img
                          src="assets/img/home-3/match-moment/m-2.jpg"
                          alt="img"
                        />
                        <a href="index.html" className="gt-icon">
                          <i className="fa-brands fa-instagram"></i>
                        </a>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="match-moments-image">
                        <img
                          src="assets/img/home-3/match-moment/m-3.jpg"
                          alt="img"
                        />
                        <a href="index.html" className="gt-icon">
                          <i className="fa-brands fa-instagram"></i>
                        </a>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="match-moments-image">
                        <img
                          src="assets/img/home-3/match-moment/m-4.jpg"
                          alt="img"
                        />
                        <a href="index.html" className="gt-icon">
                          <i className="fa-brands fa-instagram"></i>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-xl-4">
                  <div className="row">
                    <div className="col-md-6">
                      <div className="match-moments-image">
                        <img
                          src="assets/img/home-3/match-moment/m-5.jpg"
                          alt="img"
                        />
                        <a href="index.html" className="gt-icon">
                          <i className="fa-brands fa-instagram"></i>
                        </a>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="match-moments-image">
                        <img
                          src="assets/img/home-3/match-moment/m-6.jpg"
                          alt="img"
                        />
                        <a href="index.html" className="gt-icon">
                          <i className="fa-brands fa-instagram"></i>
                        </a>
                      </div>
                    </div>
                    <div className="col-lg-12">
                      <div className="match-moments-image">
                        <img
                          src="assets/img/home-3/match-moment/m-7.jpg"
                          alt="img"
                        />
                        <a href="index.html" className="gt-icon">
                          <i className="fa-brands fa-instagram"></i>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div id="VIDEO" className="tab-pane fade">
              <div className="row">
                <div className="col-xl-4">
                  <div className="match-moments-image">
                    <img
                      src="assets/img/home-3/match-moment/m-1.jpg"
                      alt="img"
                    />
                    <a href="index.html" className="gt-icon">
                      <i className="fa-brands fa-instagram"></i>
                    </a>
                  </div>
                </div>
                <div className="col-xl-4">
                  <div className="row">
                    <div className="col-lg-12">
                      <div className="match-moments-image">
                        <img
                          src="assets/img/home-3/match-moment/m-2.jpg"
                          alt="img"
                        />
                        <a href="index.html" className="gt-icon">
                          <i className="fa-brands fa-instagram"></i>
                        </a>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="match-moments-image">
                        <img
                          src="assets/img/home-3/match-moment/m-3.jpg"
                          alt="img"
                        />
                        <a href="index.html" className="gt-icon">
                          <i className="fa-brands fa-instagram"></i>
                        </a>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="match-moments-image">
                        <img
                          src="assets/img/home-3/match-moment/m-4.jpg"
                          alt="img"
                        />
                        <a href="index.html" className="gt-icon">
                          <i className="fa-brands fa-instagram"></i>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-xl-4">
                  <div className="row">
                    <div className="col-md-6">
                      <div className="match-moments-image">
                        <img
                          src="assets/img/home-3/match-moment/m-5.jpg"
                          alt="img"
                        />
                        <a href="index.html" className="gt-icon">
                          <i className="fa-brands fa-instagram"></i>
                        </a>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="match-moments-image">
                        <img
                          src="assets/img/home-3/match-moment/m-6.jpg"
                          alt="img"
                        />
                        <a href="index.html" className="gt-icon">
                          <i className="fa-brands fa-instagram"></i>
                        </a>
                      </div>
                    </div>
                    <div className="col-lg-12">
                      <div className="match-moments-image">
                        <img
                          src="assets/img/home-3/match-moment/m-7.jpg"
                          alt="img"
                        />
                        <a href="index.html" className="gt-icon">
                          <i className="fa-brands fa-instagram"></i>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div id="AUDIO" className="tab-pane fade">
              <div className="row">
                <div className="col-xl-4">
                  <div className="match-moments-image">
                    <img
                      src="assets/img/home-3/match-moment/m-1.jpg"
                      alt="img"
                    />
                    <a href="index.html" className="gt-icon">
                      <i className="fa-brands fa-instagram"></i>
                    </a>
                  </div>
                </div>
                <div className="col-xl-4">
                  <div className="row">
                    <div className="col-lg-12">
                      <div className="match-moments-image">
                        <img
                          src="assets/img/home-3/match-moment/m-2.jpg"
                          alt="img"
                        />
                        <a href="index.html" className="gt-icon">
                          <i className="fa-brands fa-instagram"></i>
                        </a>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="match-moments-image">
                        <img
                          src="assets/img/home-3/match-moment/m-3.jpg"
                          alt="img"
                        />
                        <a href="index.html" className="gt-icon">
                          <i className="fa-brands fa-instagram"></i>
                        </a>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="match-moments-image">
                        <img
                          src="assets/img/home-3/match-moment/m-4.jpg"
                          alt="img"
                        />
                        <a href="index.html" className="gt-icon">
                          <i className="fa-brands fa-instagram"></i>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-xl-4">
                  <div className="row">
                    <div className="col-md-6">
                      <div className="match-moments-image">
                        <img
                          src="assets/img/home-3/match-moment/m-5.jpg"
                          alt="img"
                        />
                        <a href="index.html" className="gt-icon">
                          <i className="fa-brands fa-instagram"></i>
                        </a>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="match-moments-image">
                        <img
                          src="assets/img/home-3/match-moment/m-6.jpg"
                          alt="img"
                        />
                        <a href="index.html" className="gt-icon">
                          <i className="fa-brands fa-instagram"></i>
                        </a>
                      </div>
                    </div>
                    <div className="col-lg-12">
                      <div className="match-moments-image">
                        <img
                          src="assets/img/home-3/match-moment/m-7.jpg"
                          alt="img"
                        />
                        <a href="index.html" className="gt-icon">
                          <i className="fa-brands fa-instagram"></i>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

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
