'use client'
import React, { useEffect } from 'react';
import Link from 'next/link';
import Script from 'next/script';

export default function Header() {
  useEffect(() => {
    // Ye function ensure karta hai ki jQuery aur MeanMenu scripts load hone ke baad hi chalein
    const initializeMenu = () => {
      if (window.jQuery && window.jQuery.fn.meanmenu) {
        window.jQuery('#mobile-menu').meanmenu({
          meanMenuContainer: '.mobile-menu',
          meanScreenWidth: "991",
          meanExpand: ['<i class="fal fa-plus"></i>'],
        });
      }
    };

    // Sidebar toggle logic
    const sidebarToggle = document.querySelector('.sidebar-toggle');
    const offcanvasInfo = document.querySelector('.offcanvasinfo');
    const offcanvasOverlay = document.querySelector('.offcanvasoverlay');
    const offcanvasClose = document.querySelector('.offcanvasclose');

    const openMenu = () => {
      if (offcanvasInfo) offcanvasInfo.classList.add('open');
      if (offcanvasOverlay) offcanvasOverlay.classList.add('open');
    };

    const closeMenu = () => {
      if (offcanvasInfo) offcanvasInfo.classList.remove('open');
      if (offcanvasOverlay) offcanvasOverlay.classList.remove('open');
    };

    if (sidebarToggle) sidebarToggle.addEventListener('click', openMenu);
    if (offcanvasOverlay) offcanvasOverlay.addEventListener('click', closeMenu);
    if (offcanvasClose) offcanvasClose.addEventListener('click', closeMenu);
    
    // Script load hone ka intezar karein aur phir menu initialize karein
    const meanMenuScript = document.querySelector('script[src="/assets/js/jquery.meanmenu.min.js"]');
    if (meanMenuScript) {
        meanMenuScript.onload = initializeMenu;
    } else {
        // Agar script pehle se loaded hai
        initializeMenu();
    }

    return () => {
      // Cleanup event listeners jab component unmount ho
      if (sidebarToggle) sidebarToggle.removeEventListener('click', openMenu);
      if (offcanvasOverlay) offcanvasOverlay.removeEventListener('click', closeMenu);
      if (offcanvasClose) offcanvasClose.removeEventListener('click', closeMenu);
    };
  }, []);

  return (
    <>
      {/* Scripts jo har page par zaroori hain */}
      <Script src="/assets/js/jquery-3.7.1.min.js" strategy="beforeInteractive" />
      <Script src="/assets/js/jquery.meanmenu.min.js" strategy="lazyOnload" />

      {/* Header HTML */}
      <header id="header-sticky" className="header-1">
        <div className="container">
          <div className="mega-menu-wrapper">
            <div className="header-main">
              <div className="header-left">
                <div className="logo">
                  <Link href="/" className="logo-text">
                    <img src="/assets/images/Logo.webp" alt="logo-img" />
                  </Link>
                </div>
              </div>
              <div className="header-right d-flex justify-content-end align-items-center">
                <div className="meanmenu-wrapper">
                  <div className="main-menu">
                    <nav id="mobile-menu">
                      <ul>
                        <li><Link href="/">Home</Link></li>
                        <li><Link href="/about">About Us</Link></li>
                        <li><Link href="/gallery">Gallery</Link></li>
                        <li><Link href="/membership">Membership</Link></li>
                        <li><Link href="/contact">Contact</Link></li>
                      </ul>
                    </nav>
                  </div>
                </div>
                <div className="header-hamburger d-xl-none my-auto"> {/* Changed d-xl-block to d-xl-none */}
                  <div className="sidebar-toggle">
                    <div className="header-bar">
                      <span />
                      <span />
                      <span />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Offcanvas Area */}
      <div className="fix-area">
        <div className="offcanvasinfo">
          <div className="offcanvaswrapper">
            <div className="offcanvascontent">
              <div className="offcanvastop mb-5 d-flex justify-content-between align-items-center">
                <div className="offcanvaslogo">
                  <Link href="/">
                    <img src="/assets/images/LogoBase2.png" alt="logo-img" />
                  </Link>
                </div>
                <div className="offcanvasclose">
                  <button>
                    <i className="fas fa-times" />
                  </button>
                </div>
              </div>
              {/* Mobile menu yahaan render hoga */}
              <div className="mobile-menu fix mb-3" />
            </div>
          </div>
        </div>
      </div>
      <div className="offcanvasoverlay" />
    </>
  );
}