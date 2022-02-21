import React from 'react'
import { useWindowSize } from '../hooks/window-size';

export default function Intro({ onClickButton }) {

  const screenHeight = useWindowSize().height;

  return (
    <>
      <div className="container intro">
        <h3 className="title">Soy Enol Casielles</h3>
        <p>Desarrollo Aplicaciones móviles y Webs a medida usando tecnologías punteras. También hago proyectos de Visión Artificial y Realidad Aumentada.</p>
        <div className="button-container">
          <button className="button" onClick={onClickButton}>Saber Más</button>
        </div>
        <div className="image-container">
          <img src="images/enol.png" />
        </div>
      </div>

      <style jsx>{`
        .intro {
          padding-top: 40px;
          height: ${screenHeight - 80}px;
          position: relative;
        }
        .title {
          font-size: 20px;
          font-weight: bold;
          color: black;
          margin-bottom: 30px;
        }
        p {
          font-size: 18px;
          color: #1B1B1B;
          margin-bottom: 40px;
        }
        .image-container {
          text-align: right;
          position: absolute;
          bottom: 0;
          right: 0;
          display: flex;
        }
        .image-container img {
        }
      `}</style>
    </>
  )
}
