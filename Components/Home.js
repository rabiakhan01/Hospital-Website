import React from "react";
import Header from "./Header"
import CoverContent from './Cover-content';
import OurValues from './values';
import valueData from '../data/value-data';
import FAQ from "./FAQ";
import '../style/body.css';
import About from './About'
import Department from './Department';
import Award from './Awards';
import Reviews from './Reviews';
import Schedual from './Schedule';
import Blog from './Blog';
import Appointment from './Appointment';
import Footer from './Footer';
export default function Home(){
    const values = valueData.map((val)=>{
        return (
          <OurValues 
          {...val}
          />
        );
      });
      return (
        <div>
        <div className='body-styling'>
        <Header />
        <CoverContent />
        <div className='value-div'>
        <p className='value-div-para'>Our Values</p>
        <div className='value-div-style'>{values}</div>
        </div>
        </div>
        <About />
        <Department />
        <Award />
        <Reviews />
        <Schedual />
        <Blog />
        <Appointment />
        <FAQ />
        <Footer />
        </div>
      );
}