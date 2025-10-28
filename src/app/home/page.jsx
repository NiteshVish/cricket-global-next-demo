import React from "react";

// import Navbar from "../_components/navbar/page";
import Footer from "../_components/footer/footerpage";
import HomeClientPage from "../_components/home/page";
import Aboutclient from "../about/page";
import { AbsoluteCenter } from "@chakra-ui/react";
import Care from "@/app/cares/page";
import Gallery from "../gallery/page";
import Contact from "../contact/page";
import Event from '../events/page'



export default function Home() {
  return (
    <div>
        {/* <Navbar /> */}
      <HomeClientPage />
      {/* <Aboutclient />
      <Care/>
      <Gallery/>
      <Contact/>
    <Event/>  */}
        {/* <Footer /> */}
    </div>
  );
}
