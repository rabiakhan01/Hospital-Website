import React from "react";
import '../style/info.css';
export default function Info(props){
    return (
        <div className="info-div">
        <div className="info-icon">
        <div>
        <img src = {require('../images/'+ props.img_src +'.png')} alt=""/>
        </div>
        </div>
        <div className="info-content">
        <p>{props.name}</p>
        <span>{props.detail}</span>
        </div>
        </div>
    );
}