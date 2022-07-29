import React from "react";
import BackToTopBtn from "./BackToTopBtn";
import Chegirmalar from "./components/Chegirmalar/Chegirmalar";
import Contact from "./components/Contact/Contact";
import Courses from "./components/Courses/Courses";
import Footer from "./components/Footer/Footer";
import HeroBottom from "./components/Hero/HeroBottom";
import HeroMiddle from "./components/Hero/HeroMiddle";
import HeroPage from "./components/Hero/HeroPage";
// import Header from "./components/Navbar/Header";
import Navbar from "./components/Navbar/Navbar";
import WhyPage from "./components/Why NAF/WhyPage";

const AppPage = () => {
  return (
    <div>
      <div>
        {/* <Header /> */}
        <Navbar />
        <HeroPage />
        <HeroMiddle />
        <HeroBottom />
        <WhyPage />
        <Courses />
        <Chegirmalar />
        <Contact />
        <Footer />
        <BackToTopBtn />
      </div>
    </div>
  );
};

export default AppPage;
