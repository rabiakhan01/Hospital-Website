import React from "react";
import '../style/schedule.css';
import image from '../images/cta_img.png';
import 'bootstrap/dist/css/bootstrap.css';

export default function Schedual(){
    return (
        <div className="schedual">
        <div className="text-div">
        <h2>Don’t Let Your Health Take a Backseat!</h2>
        <p>Schedule an appointment with one of our experienced medical professionals today!</p>
        </div>
        <div className="img-div">
        <img src= {image} className="cta-image " alt = "nothing" />
        </div>
        
        </div>
    );
}