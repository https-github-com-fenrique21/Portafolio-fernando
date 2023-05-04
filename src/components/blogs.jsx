import Backend from '/image/2.jpg';
import Frontend from '/image/1.jpg';
import Movil from '/image/3.jpg';
import '../assets/css/blg.css';
import { useLocation, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';
export function Blogs() {
  const location = useLocation();
  const blog = location.state;
  console.log(blog.attributes);

  const imagenes = {
    Backend: Backend,
    Frontend: Frontend,
    Movil: Movil,
  };
  return (
    <div>
      <div className="positiontitulo">
        <p className="styletitulo">{blog.attributes.Titulo}</p>
      </div>
      <div className="boxpag3">
        <div className="blgsize stylepag3">
          <p className="styleb">{blog.attributes.Contenido}</p>
        </div>
        <div className="displayf">
          <img
            className="stylepag3 boximag"
            src={imagenes[blog.attributes.Titulo]}
          ></img>
        </div>
      </div>
    </div>
  );
}
