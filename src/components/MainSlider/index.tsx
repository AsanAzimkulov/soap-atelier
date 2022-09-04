import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper';
import 'swiper/css';
import s from './index.module.scss';
import './index.scss';
import slideImage from '../../assets/images/mock-big.jpg';


const MainSlider = () => {
  return (
    <Swiper
      modules={[Pagination]}
      pagination={{ clickable: true }}
      spaceBetween={50}
      slidesPerView={1}
      className="mainSlider"
    >
      <SwiperSlide>
        <div className={s.slide}>
          <img src={slideImage} className={s.slide__image} alt="" />
        </div>
      </SwiperSlide>

      <SwiperSlide>
        <div className={s.slide}>
          <img src={slideImage} className={s.slide__image} alt="" />
        </div>
      </SwiperSlide>

      <SwiperSlide>
        <div className={s.slide}>
          <img src={slideImage} className={s.slide__image} alt="" />
        </div>
      </SwiperSlide>

      <SwiperSlide>
        <div className={s.slide}>
          <img src={slideImage} className={s.slide__image} alt="" />
        </div>
      </SwiperSlide>

      <SwiperSlide>
        <div className={s.slide}>
          <img src={slideImage} className={s.slide__image} alt="" />
        </div>
      </SwiperSlide>

      <SwiperSlide>
        <div className={s.slide}>
          <img src={slideImage} className={s.slide__image} alt="" />
        </div>
      </SwiperSlide>
    </Swiper >
  );
}

export default MainSlider;
