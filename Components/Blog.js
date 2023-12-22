import React from "react";
import BlogData from "../data/BlogData";
import '../style/Blog.css';
/* Add the following imports to your main CSS or SCSS file */
import '@fortawesome/fontawesome-free/css/all.css';

import FaceBookIcon from '@mui/icons-material/FacebookSharp';
export default function Award(){
    const blogs = BlogData.map((blog) =>{
       return(
        <div className="blogs">
        <div className="head-blog">
        <div className="blog-image-style"><img src = {require('../images/'+blog.img_src+ '.jpeg')}/></div>
        <div className="date-style">
        <div className="btn-group-style">
        <div>
        <span>{blog.date}</span> 
        </div>
        <div className="buttons-style">
        <button type="button" class="btn btn-outline-primary btn-styling"><i class="fa-brands fa-linkedin-in"></i></button>
        <button type="button" class="btn btn-outline-primary btn-styling"><i class="fa-brands fa-facebook-f"></i></button>
        <button type="button" class="btn btn-outline-primary btn-styling"><i className="fab fa-twitter"></i></button>
        </div>
        </div>
        </div>
        </div>
        <span className="blog-content-styling">{blog.content}</span>
        </div>
       )
    })
    return (
        <div className="Blog">
        <span className="blog-head">BLOG POSTS</span>
        <span className="blog-latest">Latest Update</span>
        <div className="cards">
        {blogs}
        </div>
        </div>
    )
}