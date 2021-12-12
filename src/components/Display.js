import React from "react";
import PopUp from "./PopUp";
import { useState } from "react";

function Display({ renderPhoto, photoArray, index }) {
  const [imagePop, setImagePop] = useState(false);
  const [hoverOver, setHoverOver] = useState(false);
  console.log(index);
  function getHoverOver(e) {
    e.preventDefault();
    console.log("im in");
    setHoverOver(!hoverOver);
  }

  function getPopUpData(e) {
    e.preventDefault();
    setImagePop(!imagePop);
    console.log(imagePop);
  }

  return (
    <div
      onMouseOver={!imagePop && ((e) => getHoverOver(e))}
      onMouseLeave={!imagePop && ((e) => getHoverOver(e))}
    >
      <div className="image-container" key={index}>
        {imagePop && (
          <PopUp
            photoArray={photoArray}
            photoIndex={index}
            getPopUpData={getPopUpData}
          ></PopUp>
        )}
        <div onClick={(e)=>getPopUpData(e)}>
        {!imagePop &&
          (hoverOver ? (
            <div className="hover-item">
              <h1 className="items">IMAGE {renderPhoto.id}</h1>
              <div className="items">{renderPhoto.title}</div>
            </div>
          ) : (
            <h1 className="image-name">IMAGE {renderPhoto.id}</h1>
          ))}

        <h1 className="image-name"></h1>

        <img className="image" src={renderPhoto.thumbnailUrl} alt="img"  ></img>
        </div>
      </div>
    </div>
  );
}

export default Display;
