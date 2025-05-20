import React from "react";
import HeaderBanner from "../../components/banner";
// import Navbar from "../../components/navbar";

import AboutSchool from "../../components/aboutSchool";
import Courses from "../../components/courses";
import News from "../../components/news";
import Teachers from "../../components/teachers";
import Gallery from "../../components/galeriya";
import { LangProvider } from "../../context/languageConext";

function HomePage() {
  return (
    <>
      <LangProvider>
        <HeaderBanner />
        <div className="container">
          <div className="home__card">
            {" "}
            <AboutSchool />
            <News />
          </div>
          <Courses />
          <Teachers />
          <Gallery />
        </div>
      </LangProvider>
    </>
  );
}

export default HomePage;
