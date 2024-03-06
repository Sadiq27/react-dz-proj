import React from "react";
import { Header } from "./Components/Header/Header";
import { SliderElement } from "./Components/SliderElement/SliderElement";
import { Reputation } from "./Components/Reputation/Reputation";
import { AboutUs } from "./Components/AboutUs/AboutUs";
import { ServicesCard } from "./Components/ServicesCard/ServicesCard";
import { FeedBack } from "./Components/FeedBack/FeedBack";
import { Projects } from "./Components/Projects/Projects";
import { Connection } from "./Components/Connection/Connection";
import { Footer } from "./Components/Footer/Footer";

export const App = () => {
  return (
    <div className='app'>
      <Header />
      <SliderElement/>
      <Reputation/>
      <AboutUs/>
      <ServicesCard/>
      <FeedBack/>
      <Projects/>
      <Connection/>
      <Footer/>
      <div className="copy-right">
        <div className="container">
            TheBox Company © 2022. All Rights Reserved
        </div>
      </div>
    </div>
  ) 
}