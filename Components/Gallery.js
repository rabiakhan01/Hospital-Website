import React from "react";
import '../style/covercontentInformation.css';
import '../style/BlogPage.css'
import Header from "./Header";
import Footer from "./Footer";
import gallery from '../images/gallery.png';
export default function Gallery() {
    
  return (
    <div className="background-styling-contact">
    <Header />
      <div className="responsive">
        <h1 className="cover-header">
        Welcome to
        ProHealth Gallery
        </h1>
        <p className="cover-para">
        The special moment of our hospital
        </p>
      </div>
      <div className="gallery-div">
        <img src={gallery} alt="" />
        </div>
      <div className="last-blog-div">
        <div className="last-blog-content">
        <h1 className= "head">Don’t Let Your Health
        Take a Backseat!</h1>
        <p className="para">Schedule an appointment with one of our experienced
        medical professionals today!
        </p>
        </div>
        </div>
      <Footer />
    </div>
  );
}
