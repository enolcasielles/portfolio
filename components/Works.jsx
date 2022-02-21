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
            TRABAJOS
          </h1>
          <div className="content">
          <Swiper navigation={true} pagination={true} className="mySwiper">
            <SwiperSlide>{Work(null, "Mooviment", "App para Android e iOS desarrollada con Flutter. Incorpora Realidad Aumentada utilizando la tecnología Wikitude.")}</SwiperSlide>
            <SwiperSlide>{Work()}</SwiperSlide>
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

function Work(image, title, descr) {
  return (
    <>
      <div className='work' >
        <div className="image">
          
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
