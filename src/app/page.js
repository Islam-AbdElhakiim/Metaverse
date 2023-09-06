"use client";
import About from "@/sections/About";
import Hero from "@/sections/Hero";
import Navbar from "@/sections/Navbar";
import Explore from "@/sections/Explore";
import GetStarted from "@/sections/GetStarted";
import WhatsNew from "@/sections/WhatsNew";
import Worlds from "@/sections/Worlds";
import Insights from "@/sections/Insights";
import Signature from "@/sections/signature";
import EnterMetaverse from "@/sections/EnterMetaverse";
import Footer from "@/sections/Footer";

const app = () => {
  return (
    <div className="bg-primary-black overflow-hidden">
      <Navbar />
      <Hero />
      <div className="relative">
        <About />
        <div className="gradient-03 z-0 h-5"></div>
        <Explore />
      </div>
      <div className="relative">
        <GetStarted />
        <div className="gradient-04 z-0" />
        <WhatsNew />
      </div>
      <Worlds />
      <Insights />
      <Signature />
      <EnterMetaverse />
      <Footer />
    </div>
  );
};

export default app;
