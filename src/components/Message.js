import React from "react";
import Map from "./Map";
import {
  Facebook,
  Twitter,
  LinkedIn,
  Public,
  YouTube,
} from "@material-ui/icons";

function Message() {
  return (
    <div className="msg">
      <div className="message">
        <div className="msg-card">
          <div className="text-head">Feel Free to say Hi!</div>
          <div className="text">
            Es un hecho establecido hace demasiado tiempo que un lector se
            distraerá con el contenido del texto de un sitio mientras que mira
            su diseño.
          </div>
          <div className="pad">
            <input className="input-msg" placeholder="Name"></input>
          </div>
          <div className="pad">
            <input className="input-msg" placeholder="Email"></input>
          </div>
          <div className="pad">
            <input className="input-msg box" placeholder="Message"></input>
          </div>
          <div className="pad">
            <button className="button-send"> Send</button>
          </div>
        </div>
        <div className="msg-card">
          <Map />
        </div>
      </div>
      <div className="row-map">
        <Facebook style={{ fontSize: 40 }} />
        <Twitter style={{ fontSize: 40 }} />
        <LinkedIn style={{ fontSize: 40 }} />
        <Public style={{ fontSize: 40 }} />
        <YouTube style={{ fontSize: 40 }} />
      </div>
    </div>
  );
}

export default Message;
