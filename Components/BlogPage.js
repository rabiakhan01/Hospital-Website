import React from "react";
import Header from "./Header";
import '../style/BlogPage.css'
import 'bootstrap/dist/css/bootstrap.css';
import '../style/Blog.css';
import BlogPageData from "../data/BlogPageData";
/* Add the following imports to your main CSS or SCSS file */
import '@fortawesome/fontawesome-free/css/all.css';
import Footer from "./Footer";
export default function Award(){
    const blogs = BlogPageData.map((blog) =>{
       return(
        <div className="blogs">
        <div className="head-blog">
        <div className="blog-image-style"><img src = {require('../images/'+blog.img_src+ '.jpeg')} alt=""/></div>
        <div className="date-style" style={{marginTop: "40px"}}>
        <div className="btn-group-style">
        <div>
        <span>{blog.date}</span> 
        </div>
        <div className="buttons-style">
        <button type="button" class="btn btn-outline-primary " style={{borderRadius: "50%", height: "40px", width: "40px"}}><i class="fa-brands fa-linkedin-in"></i></button>
        <button type="button" class="btn btn-outline-primary" style={{borderRadius: "20px"}}><i class="fa-brands fa-facebook-f"></i></button>
        <button type="button" class="btn btn-outline-primary" style={{borderRadius: "20px"}}><i className="fab fa-twitter"></i></button>
        </div>
        </div>
        </div>
        </div>
        <span className="blog-content-styling">{blog.content}</span>
        </div>
       )
    })
    return (
        <div>
        <Header />
        <div className="Blog">
        <span style={{color: "darkblue", fontSize: "50px", fontWeight: "700",}}>Psychology and Life Style</span>
        <div className="cards">
        {blogs}
        </div>
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
    )
}