import React from 'react';
import s from './index.module.scss';
import classNames from 'classnames';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper';
import { useAppSelector } from '../../hooks/redux';
import { selectData } from '../../store/data/selectors';
import Offer from '../Offer';


const CatalogSlider = () => {
  const { offers } = useAppSelector(selectData);
  return (
    <div className={s.root}>
      <div className={s.filters}>
        <a href="#" className={classNames(s.products__item__buttonfilters__item, s.filters__item_active)}>Новинки</a>
        <a href="#" className={s.filters__item}>Популярное</a>
      </div>
      <button className={classNames(s.slider_navButton, s.slider_navButton_prev)}><svg xmlns="http://www.w3.org/2000/svg" width="15" height="29" viewBox="0 0 15 29" fill="none">
        <path d="M14 1L1 14.5L14 28" stroke="#F2F2F2" stroke-linecap="round" />
      </svg></button>

      <button className={classNames(s.slider_navButton, s.slider_navButton_next)}><svg xmlns="http://www.w3.org/2000/svg" width="15" height="29" viewBox="0 0 15 29" fill="none">
        <path d="M14 1L1 14.5L14 28" stroke="#F2F2F2" stroke-linecap="round" />
      </svg></button>
      <Swiper
        modules={[Navigation, Autoplay]}
        navigation={true}
        className={s.products}
        slidesPerView={1}
        spaceBetween={30}
        loop={true}
        autoplay={{
          delay: 3500,
          disableOnInteraction: true
        }}
        breakpoints={{
          1700: {
            'slidesPerView': 3,
          },
          768: {
            'slidesPerView': 2,
          },
          320: {
            'slidesPerView': 1,
          }
        }}
      >
        {
          offers.map(offer => (
            <SwiperSlide key={offer.id}>
              <Offer offer={offer} />
            </SwiperSlide>
          ))
        }
      </Swiper>

    </div>
  )
}

export default CatalogSlider;
