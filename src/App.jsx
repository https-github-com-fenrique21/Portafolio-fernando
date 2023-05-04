import { useEffect, useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import '../src/assets/css/contenido.css';
import { Navbar } from './components/navbar';
import { Footer } from './components/footer';

import python from '/iconos/pyton.svg';
import sql from '/iconos/servidor-sqll.svg';
import aws from '/iconos/almacenamiento.svg';
import node from '/iconos/nodejs.svg';
import fperfil from '/iconos/fperfil.jpeg';
import fondo from '/iconos/fondo1.svg';
import axios from 'axios';
import { Link } from 'react-router-dom';

function App() {
  const [count, setCount] = useState(0);
  const [blog, setBlog] = useState([]);
  const token = import.meta.env.VITE_TOKEN_API;
  const url = import.meta.env.VITE_API_URL;
  console.log(`ruta ${url}`);
  useEffect(() => {
    llenar();
  }, []);

  async function llenar() {
    const lista = await axios.get(url, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    setBlog(lista.data.data);
  }
  return (
    <div>
      <Navbar />
      <div className="boxfirst">
        <div className="boxcontenedor1">
          <div className="boxstyle sizebox1">
            <img className="fperfil" src={fperfil}></img>
          </div>
          <div className="boxstyle sizeb3">
            <div className="stylecontenido">
              <p>Nombre:</p>
              <p>Profesión:</p>
              <p>Email:</p>
              <p>Telefono:</p>
            </div>
            <div className="stylecontenido">
              <p>Fernando Enrique Díaz Abac</p>
              <p>Ing. Informática y Sistemas</p>
              <p>fenrique.21@hotmail.com</p>
              <p>3811-3874</p>
            </div>
          </div>
        </div>
        <div className="boxstyle sizeb2">
          <p className="styletexto">
            Ingeniero en Informática y Sistemas con poca experiencia pero con
            una actitud de aprender y crecer en el aspecto personal como
            profesional, con ganas de hacer bien las cosa. Me considero una
            persona amigable, solidario y apasionada por todo lo que es
            Tecnología y estoy en el camino de aprender cualquier herramienta
            que requiera o se necesita para la elaboración de cualquier
            proyecto. Mis conocimientos en desarrollo en backend y frontend son
            pocos ya que no he realizado pocos proyectos pero si conozco las
            Tecnología que ayuden hacere el trabajo de estas más faciles de
            usar, me ha gustado mas la gestion de base de datos ya que este
            campo es muy amplio, y se puede extender.
          </p>
        </div>
      </div>
      <div className="boxtecno">
        {/* <img className="stylepage2" src={fondo}></img> */}
        <div className="boxcontenedor2">
          <div className="db">
            <p className="style-titulo">Tecnología</p>
            <div className="boxtecnologia boxstyle">
              <div className="db piz">
                <div className="dbr">
                  <img className="imgd" src={python}></img>
                  <p>Python</p>
                </div>
                <div className="dbr">
                  <img className="imgd" src={sql}></img>
                  <p>SQL</p>
                </div>
                <div className="dbr">
                  <img className="imgd" src={aws}></img>
                  <p>AWS</p>
                </div>
                <div className="dbr">
                  <img className="imgd" src={node}></img>
                  <p>Nodejs</p>
                </div>
              </div>
            </div>
          </div>
          <div className="db">
            <p className="style-titulo">Proyectos</p>
            <div className="boxstyle boxtecnologia pd blstyle">
              <p>Proyectos Cruz Roja</p>
              <a
                className="blstyle"
                href="https://github.com/Bistand/PortCRG-Cliente"
                target="_blank"
              >
                Cruz Roja
              </a>
              <a
                className="blstyle"
                href="https://drive.google.com/file/d/1EbE29lBtjmSAqkeUC04O7NWnsAGSwT6L/view?usp=sharing"
                target="_blank"
              >
                Video Cruz roja
              </a>
              <p>Blogs</p>
              <ul>
                {blog.map((titulo) => {
                  const urldato = `/blogs/${titulo.id}`;
                  return (
                    <li key={titulo.id}>
                      <Link className="blstyle" to={urldato} state={titulo}>
                        {titulo.attributes.Titulo}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
export default App;
