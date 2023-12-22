import React from "react";
import '../style/About.css';
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import aboutImage from '../images/about.png'
export default function About(){
    return (
        <div className="about">
        <div className="right-about">
        <h1>About Us</h1>
        <h2>PRO HEALTH</h2>
        <div className="about-right-styling">
        <div><FontAwesomeIcon icon={faArrowRight} className="icon-style"/></div>
        <div className="detail-styling">
        <p>ProHealth is a team of<br></br> experienced medical<br></br> professionals</p>
        <span>Dedicated to providing top-quality healthcare services. We believe in a holistic approach
         to healthcare that focuses on treating the whole person, not just the illness or symptoms.</span>
        </div>
         </div>
        </div>
        <div className="left-about">
         <img src = {aboutImage} alt = "about"  className="image-styling"/>
        </div>
        </div>
    )
}