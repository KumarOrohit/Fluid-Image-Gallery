import React from "react";
import { ArrowRight, ArrowLeft, Close } from "@material-ui/icons";
import { useState } from "react";

function PopUp({ photoArray,photoIndex, getPopUpData }) {
    const [indexPhoto, setIndexPhoto] = useState(photoIndex);
    function rightArrow()
    {
        if(photoIndex<50)
        {
            setIndexPhoto(indexPhoto+1);
            console.log(indexPhoto);
        }
    }
    function leftArrow()
    {
        if(photoIndex>0)
        {
            setIndexPhoto(indexPhoto-1);
            console.log(indexPhoto);
        }
    }
  return (
    <div className="overlay">
      <div className="left-arrow">
        <ArrowLeft onClick={leftArrow} style={{ paddingTop:350, color:"white", fontSize:100, cursor:"pointer"}}/>
      </div>
      <div className="popup">
        <div className="content">
          <Close className="close" onClick={getPopUpData} />
          <img
            className="img content-img"
            src={photoArray[indexPhoto].url}
            alt="img"
          ></img>
        </div>
      </div>
      <div></div>
      <div className="right-arrow">
        <ArrowRight onClick={rightArrow} style={{ paddingTop:350, color:"white", fontSize:100, cursor:"pointer"}} />
      </div>
    </div>
  );
}

export default PopUp;
