import React from "react";
import {
  Facebook,
  Twitter,
  LinkedIn,
  Public,
  YouTube,
} from "@material-ui/icons";

function Columns() {
  return (
    <div className="columns">
      <div className="background">
        <div className="row-1">
          <div className="card">
            <h1>Lorem Ipsum </h1>
            <div>
              es simplemente el texto de relleno de las imprentas y archivos de
              texto. Lorem Ipsum ha sido el texto de relleno estándar de las
              industrias desde el año 1500, cuando un impresor (N. del T.
              persona que se dedica a la imprenta) desconocido usó una.
            </div>
          </div>
          <div className="card">
            <h1>Lorem Ipsum </h1>
            <div>
              es simplemente el texto de relleno de las imprentas y archivos de
              texto. Lorem Ipsum ha sido el texto de relleno estándar de las
              industrias desde el año 1500, cuando un impresor (N. del T.
              persona que se dedica a la imprenta) desconocido usó una.
            </div>
          </div>
          <div className="card">
            <h1>Lorem Ipsum </h1>
            <div>
              es simplemente el texto de relleno de las imprentas y archivos de
              texto. Lorem Ipsum ha sido el texto de relleno estándar de las
              industrias desde el año 1500, cuando un impresor (N. del T.
              persona que se dedica a la imprenta) desconocido usó una.
            </div>
          </div>
        </div>
        <div className="row-2">
          <div className="card">
            <h1>Lorem Ipsum </h1>
            <div>
              es simplemente el texto de relleno de las imprentas y archivos de
              texto. Lorem Ipsum ha sido el texto de relleno estándar de las
              industrias desde el año 1500, cuando un impresor (N. del T.
              persona que se dedica a la imprenta) desconocido usó una galería
              de textos y los mezcló de tal manera que logró hacer un libro de
              textos especimen.No sólo sobrevivió 500 años, sino que tambien
              ingresó como texto de relleno.
            </div>
          </div>
          <div className="card">
            <h1>Lorem Ipsum </h1>
            <div>
              es simplemente el texto de relleno de las imprentas y archivos de
              texto. Lorem Ipsum ha sido el texto de relleno estándar de las
              industrias desde el año 1500, cuando un impresor (N. del T.
              persona que se dedica a la imprenta) desconocido usó una galería
              de textos y los mezcló de tal manera que logró hacer un libro de
              textos especimen.No sólo sobrevivió 500 años, sino que tambien
              ingresó como texto de relleno.
            </div>
          </div>
        </div>
        <div className="card">
          <h1>Lorem Ipsum </h1>
          <div>
            es simplemente el texto de relleno de las imprentas y archivos de
            texto. Lorem Ipsum ha sido el texto de relleno estándar de las
            industrias desde el año 1500, cuando un impresor (N. del T. persona
            que se dedica a la imprenta) desconocido usó una galería de textos y
            los mezcló de tal manera que logró hacer un libro de textos
            especimen.No sólo sobrevivió 500 años, sino que tambien ingresó como
            texto de relleno en documentos electrónicos, quedando esencialmente
            igual al original. Fue popularizado en los 60s con la creación de
            las hojas "Letraset", las cuales contenian pasajes de Lorem Ipsum, y
            más recientemente con software de autoedición, como por ejemplo
            Aldus PageMaker, el cual incluye versiones de Lorem Ipsum.
          </div>
        </div>
        <div className="row-4">
          <Facebook style={{ fontSize: 40 }} />
          <Twitter style={{ fontSize: 40 }} />
          <LinkedIn style={{ fontSize: 40 }} />
          <Public style={{ fontSize: 40 }} />
          <YouTube style={{ fontSize: 40 }} />
        </div>
      </div>
    </div>
  );
}

export default Columns;
