import React from "react";
import Header from "./Header";
import '../style/Doctor.css';
import '../style/Blog.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import doctorData from '../data/doctorData';
import '@fortawesome/fontawesome-free/css/all.css';
import Footer from "./Footer";
export default function Doctors(){
    const doctors = doctorData.map((doctor) =>{
        return(
        <div className=" doctor-div blogs" id="doctor">
        <div className="head-blog">
        <div className="blog-image-style"><img src = {require('../images/'+doctor.dr_img+ '.png')} alt=""/></div>
        <div className="date-style">
        <div className="btn-group-style">
        <div className="dep-name">
        <span>{doctor.dep_name}</span> 
        </div>

        </div>
        </div>
        </div>
        <div className="doctor-info">
        <span className="dr-name">{doctor.dr_name}</span>
        <span className="dr-specialist">{doctor.specialist}</span>
        <span className="dr-content">{doctor.content}</span>
        </div>
        <div className="buttons-style">
        <button type="button" class="btn btn-outline-primary btn-styling"><i class="fa-brands fa-linkedin-in"></i></button>
        <button type="button" class="btn btn-outline-primary btn-styling"><i class="fa-brands fa-facebook-f"></i></button>
        <button type="button" class="btn btn-outline-primary btn-styling"><i className="fab fa-twitter"></i></button>
        </div>
        </div>
        )
    })
return(

    <div>
    <Header />
    <div className="background-styling-doctor">
    <div className="responsive">
    <h1 className="header-style">Introduce You to
    Our Experts</h1>
    <p className="para-style">The list of certified doctors with years of
    professional experiences</p>
    </div>
    </div>
    <h2 className="our-doctor">Our Doctors</h2>
    <div className="doctors">{doctors}</div>
    <div className="last-div">
    <div className="back-div-2">
    <h2 className="back-heading-1">Don’t Let Your Health
     Take a Backseat!</h2>
     <p className="back-heading-2">Schedule an appointment with one of our experienced
     medical professionals today!</p>
    </div>
    <Footer />
    </div>
    </div>
)
}