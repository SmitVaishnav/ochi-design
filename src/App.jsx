import React from "react";
import Navbar from "./components/Navbar";
import LandingPage from "./components/LandingPage";
import Marquee from "./components/Marquee";
import About from "./components/About";
import Eyes from "./components/Eyes";
import Featured from "./components/Featured";
import Cards from "./components/Cards";
import Footer from "./components/Footer";
import LocomotiveScroll from "locomotive-scroll";

function App() {
  const locomotiveScroll = new LocomotiveScroll({
    smooth: true,
    smoothMobile: false, // Disable smooth scrolling on mobile devices if needed
    // Add other Locomotive Scroll options here
  });
  // Clean up Locomotive Scroll instance on component unmount

  return (
    <div
      data-scroll-container
      className="w-full min-h-screen text-white bg-zinc-900 "
    >
      <Navbar />
      <LandingPage data-scroll data-scroll-speed="0.5" />
      <Marquee data-scroll data-scroll-speed="1.5" />
      <About data-scroll data-scroll-speed="2.5" />
      <Eyes />
      <Featured />
      <Cards />
      <Footer />
    </div>
  );
}

export default App;
