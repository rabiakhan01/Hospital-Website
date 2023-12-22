import React from "react";
import awardData from "../data/awardData";
import '../style/award.css';
export default function Award(){
    const awards = awardData.map((award) =>{
       return(
        <div className="awards">
        <div className="head-div">
        <div className="image-part"><img src = {require('../images/'+ award.img_src)}/></div>
        <div className="heading-part"><span>{award.heading}</span></div>
        </div>
        <span className="content-styling">{award.content}</span>
        </div>
       )
    })
    return (
        <div className="Award">{awards}</div>
    )
}