import React from "react";
import { useState, useEffect } from "react";
import Body from "./Body";
import Display from "./Display";
import Columns from "./Columns";
import axios from "axios";
import Header from "./Header";
import Message from "./Message";

function Main() {
  const [renderPhoto, setRenderPhoto] = useState(null);
  const [albumNumber, setAlbumNumber] = useState(0);
  const [bodyContent, setbodyContent] = useState([]);
  const [page, setPage] = useState({
    mainPage: true,
    columns: false,
    message: false,
    imagePages: false,
  });

  const bodyDisplay = () => {
    axios.get("https://jsonplaceholder.typicode.com/photos").then((res) => {
      console.log("IN body CLICK", res.data);
      setbodyContent(res.data);
    });
  };

  window.onload = () => {
    bodyDisplay();
  };

  return (
    <div className="main-page">
      <Header
        setRenderPhoto={setRenderPhoto}
        setAlbumNumber={setAlbumNumber}
        albumNumber={albumNumber}
        page={page}
        setPage={setPage}
      />

      {page.mainPage && (
          <div className="display">
          {bodyContent.map(
            (photo, index) =>
              photo.id % 50 === 1 && (
                <Display
                  renderPhoto={photo}
                  photoArray={bodyContent}
                  index={index}
                ></Display>
              )
          )}
        </div>
      ) }
       {page.imagePages && <Body renderPhoto={renderPhoto} albumNumber={albumNumber} />}
       {page.columns && <Columns /> }
       {page.message && <Message /> }
      
    </div>
  );
}

export default Main;
