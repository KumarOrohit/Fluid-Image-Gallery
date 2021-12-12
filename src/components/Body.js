import React from "react";
import Display from "./Display";

function Body({ renderPhoto, albumNumber }) {
  return (
    <div className="display">
      {renderPhoto.map(
        (photo, index) =>
          albumNumber === photo.albumId && (
            <Display
              renderPhoto={photo}
              photoArray={renderPhoto}
              index={index}
            ></Display>
          )
      )}
    </div>
  );
}

export default Body;
