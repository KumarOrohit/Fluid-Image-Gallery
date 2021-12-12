import React from "react";
import axios from "axios";
import { useState } from "react";
import "../style.scss";

function Header({
  setRenderPhoto,
  setAlbumNumber,
  albumNumber,
  page,
  setPage,
}) {
  const [image, setImage] = useState({
    page1: false,
    page2: false,
    page3: false,
  });

  const handleClick = () => {
    axios.get("https://jsonplaceholder.typicode.com/photos").then((res) => {
      console.log("IN HANDLE CLICK", res.data);
      setRenderPhoto(res.data);
      setPage({
        mainPage: false,
        columns: false,
        message: false,
        imagePages: true,
      });
    });
  };

  const handleColumns = () => {
    setImage({
      page1: false,
      page2: false,
      page3: false,
    });
    setPage({
      mainPage: false,
      columns: true,
      message: false,
      imagePages: false,
    });
  };

  const handleMessage = () => {
    setImage({
      page1: false,
      page2: false,
      page3: false,
    });
    setPage({
      mainPage: false,
      columns: false,
      message: true,
      imagePages: false,
    });
  };

  return (
    <div className="header">
      <div className="left">
        <h1>Fluid Gallery</h1>
      </div>
      <div className="right">
        <div
          className="cols col1"
          onClick={() => {
            setAlbumNumber(1);
            handleClick();
            setImage({
              page1: true,
              page2: false,
              page3: false,
            });
          }}
          style={{ backgroundColor: image.page1 ? "#60D0FC" : "" }}
        >
          1st Fluid
        </div>
        <div
          className="cols col2"
          onClick={() => {
            setAlbumNumber(2);
            handleClick();
            setImage({
              page1: false,
              page2: true,
              page3: false,
            });
          }}
          style={{ backgroundColor: image.page2 ? "#F87F6A" : "" }}
        >
          2nd Fluid
        </div>
        <div
          className="cols col3"
          onClick={() => {
            setAlbumNumber(3);
            handleClick();
            setImage({
              page1: false,
              page2: false,
              page3: true,
            });
          }}
          style={{ backgroundColor: image.page3 ? "#FCDB55" : "" }}
        >
          3rd Fluid
        </div>
        <div
          className="cols clickcol"
          onClick={handleColumns}
          style={{ backgroundColor: page.columns ? "#66CECE" : "" }}
        >
          Columns
        </div>
        <div
          className="cols map"
          onClick={handleMessage}
          style={{ backgroundColor: page.message ? "#68A9CD" : "" }}
        >
          Message
        </div>
      </div>
    </div>
  );
}

export default Header;
