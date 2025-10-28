import { Geist, Geist_Mono } from "next/font/google";
// import "./globals.css";
import "../../public/assets/css/all.min.css"
import "../../public/assets/css/animate.css"
import "../../public/assets/css/bootstrap.min.css"
import "../../public/assets/css/magnific-popup.css"
import "../../public/assets/css/main.css"
import "../../public/assets/css/meanmenu.css"
import "../../public/assets/css/nice-select.css"
import "../../public/assets/css/swiper-bundle.min.css"
import Providers from "./chakra-providers";
import StoreProvider from "./store-provider";
import { ToastContainer } from "react-toastify";
import Script from "next/script";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "CRICKET GLOBALS LOVERS",
  description: "Official website for Cricket Lovers Global",
};

export default function RootLayout({ children }) {
  return (

    <html lang="en">
      <head>
                           <Script src="/assets/js/main.js" strategy="afterInteractive"></Script> 

      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}

      >

        <StoreProvider>
          <Providers>
            <ToastContainer position="top-right" autoClose={4000} />
            {children}
          </Providers>
        </StoreProvider>
      </body>
    </html>
  );
}
