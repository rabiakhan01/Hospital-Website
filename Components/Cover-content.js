import React from "react";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { faPlayCircle } from "@fortawesome/free-solid-svg-icons";
import '../style/body.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import InfoData from '../data/info-data';
import Info from "./info";
export default function CoverContent() {
    const data = InfoData.map((info_data)=> {
            return(
               <Info 
               {...info_data}
               />
            );
    })
    return (
        <div className="background-styling-home">
            <div className='responsive'>
                <h1 className='cover-header'>Your Partner in <br />Health and Wellness</h1>
                <p className='cover-para'>We are committed to providing you with the best medical <br />and healthcare services to help you live healthier and <br /> happier.</p>
                <span className='play-styling'><FontAwesomeIcon icon={faPlayCircle} className='play-styling' /> See how we work </span>
                <div className="info-styling">
                {data}
                <button className="book-button">Book Now  <FontAwesomeIcon icon={faArrowRight} className="info-arrow-style"/></button>
                </div>
            </div>
        </div>
    );
}