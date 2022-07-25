import React from "react";
import BackToTopBtn from "./BackToTopBtn";
import Chegirmalar from "./components/Chegirmalar/Chegirmalar";
import Contact from "./components/Contact/Contact";
import Courses from "./components/Courses/Courses";
import HeroPage from "./components/Hero/HeroPage";
import Header from "./components/Navbar/Header";
import WhyPage from "./components/Why NAF/WhyPage";

const AppPage = () => {
  return (
    <div>
      <div>
        <Header />
        <HeroPage />
        <WhyPage />
        <Courses />
        <Chegirmalar />
        <Contact />
        <BackToTopBtn />
      </div>
    </div>
  );
};

export default AppPage;
