import React from 'react';
import '../style/value.css'
export default function OurValues(props){
   const [isHover, setisHover] = React.useState(false);
   const handelMouseEnter = () => {
      setisHover(true);
   }
   const handelMouseLeave = () => {
      setisHover(false);
   }
   const setStyle = {
      backgroundColor: isHover ? ' rgb(126, 168, 231)' :null,
      borderRadius : isHover ? '10px' : '0px',
      transition: isHover ? 'all 2s ease': null,
   }
return (
   <div className='values-div-style'>
   <div className='value-head-style' onMouseEnter={handelMouseEnter} onMouseLeave={handelMouseLeave} style={setStyle}>
   <div className='value-image-style'>
   <img src = {require('../images/'+ props.image_src +'.png')} />
   </div>
  <div className='value-para-style'> <span>{props.name}</span></div>
   </div>
  <p>{props.detail}</p>
   </div>

);
}