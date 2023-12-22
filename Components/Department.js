
import React,{useState}from "react";
import '../style/department.css'
import data from '../data/departmentData'
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Department = () => {
  const [startIndex, setStartIndex] = useState(0);
  const divisionsToShow = 4; // Adjust the number of divisions to display

  const handleMoveRight = () => {
    if (startIndex < data.length - divisionsToShow) {
      setStartIndex(startIndex + 1);
    }
  };

  const handleMoveLeft = () => {
    if (startIndex > 0) {
      setStartIndex(startIndex - 1);
    }
  };

  return (
    <div className="department" id="department">
    <h1 className="depart-name-styling">Departments</h1>
    <div className="slider-container ">
    <button className="slider-button arrow-left" onClick={handleMoveLeft}>
      <FontAwesomeIcon icon={faArrowLeft} className="left"/>
      </button>
      <div className="slider depart-part">
        {data.slice(startIndex, startIndex + divisionsToShow).map((department) => (
          <div key={department.id} className="slider-item">
          <img src = {require('../images/'+ department.img_src +'.svg')} className="img-styling" alt=""/>
           <span className="heading-style"> {department.depart_name}</span>
          </div>
        ))}
      </div>
      <button className="slider-button arrow-right" onClick={handleMoveRight}>
      <FontAwesomeIcon icon={faArrowRight} className="right"/>
      </button>
    </div>
    </div>
  );
};

export default Department;
