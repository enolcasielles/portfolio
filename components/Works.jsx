import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation"
import "swiper/css/pagination"

import SwiperCore, {
  Navigation,
  Pagination
} from 'swiper';

// install Swiper modules
SwiperCore.use([Navigation, Pagination]);

export default function Works() {
  return (
    <>
      <div className="section-bg works" id="works">
        <div className="container">
          <h1 className="section-title">
            TRABAJOS RECIENTES
          </h1>
          <div className="content">
          <Swiper navigation={true} pagination={true} className="mySwiper">
            <SwiperSlide>{Work("#583C8A", "images/works/mooviment.png", "Mooviment", "App para Android e iOS desarrollada con Flutter. Incorpora Realidad Aumentada utilizando la tecnología Wikitude. Desarrollo Web con React y Angular. Base de datos en AWS con DynamoDB")}</SwiperSlide>
            <SwiperSlide>{Work("#62c9ba", "images/works/tappy.png", "Tappy", "App desarrollada con Flutter y API con Node y Typescript. Base de datos MySQL con Aurora. Panel Web desarrollado con React. Despliegue de toda la infraestructura en AWS")}</SwiperSlide>
            <SwiperSlide>{Work("#fff", "images/works/airhopping.png", "Airhopping", "App desarrollada en Flutter con más de 100K descargas en las store. Utiliza Bloc para el manejo del estado. Aplicación muy completa con mucha funcionalidad.")}</SwiperSlide>
          </Swiper>
          </div>
        </div>
      </div>
      
      <style jsx>{`
        .works {
          padding-top: 30px;
        }
        .container {
          text-align: center;
        }
        .section-title {
          color: #3a3a3a;
          margin-bottom: 34px;
        }
        .content {
        }
        .swiper-button-next { color: red; }
      `}</style>

    </>
  )
}

function Work(bgColor, image, title, descr) {
  return (
    <>
      <div className='work' >
        <div className="image" style={{backgroundColor: bgColor}}>
          <img src={image} alt="" />
        </div>
        <div className="title">
          {title}
        </div>
        <div className="descr">
          {descr}
        </div>
      </div>
      <style jsx>{`
        .work {
          display: flex;
          flex-direction: column;
          align-items: center;
          padding-bottom: 50px
        }
        .image {
          height: 200px;
          width: 340px;
          border-radius: 6px;
          background-color: #583C8A
        }
        .image img {
          object-fit: contain;
          width: 100%;
          height: 100%;
        }
        .title {
          font-weight: bold;
          font-size: 20px;
          margin-top: 25px;
          margin-bottom: 20px;
        }
        .descr {
          width: 500px;
          max-width: 100%;
          line-height: 25px;
          font-weight: 400;
        }
      `}</style>
    </>
  );
}
