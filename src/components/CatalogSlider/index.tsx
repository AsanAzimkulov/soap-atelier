import React from 'react';
import s from './index.module.scss';
import image from '../../assets/images/mock.jpg';
import classNames from 'classnames';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper';
import { useAppSelector } from '../../hooks/redux';
import { selectData } from '../../store/data/selectors';


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
        modules={[Navigation]}
        navigation={true}
        className={s.products}
        slidesPerView={3}
        spaceBetween={30}
        loop={true}
      >
        {
          offers.map(offer => (
            <SwiperSlide>
              <div className={s.products__item}>
                <div>
                  <img src={image} alt={`Изображение товара ${offer.name}`} className={s.products__item__image} />
                </div>
                <h3 className={s.products__item__name}>{offer.name}</h3>
                <h4 className={s.products__item__info}>{offer.description}</h4>
                <div className={s.products__item__downBar}>
                  <strong className={s.products__item__price}>{offer.price} сом</strong>
                  <a href="#" className={s.products__item__button}>В корзину</a>
                </div>
              </div>
            </SwiperSlide>
          ))
        }
      </Swiper>

    </div>
  )
}

export default CatalogSlider;
