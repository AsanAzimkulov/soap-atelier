import React from 'react';
import s from './index.module.scss';
import image from '../../assets/images/mock-gallery.png';

const Gallery = () => {
  return (
    <div className={s.root}>
      <figure className={s.block}>
        <img src={image} className={s.block__image} alt="Изображение мыла" />
        <figcaption className={s.block__caption}>Название продукции</figcaption>
      </figure>
      <figure className={s.block}>
        <img src={image} className={s.block__image} alt="Изображение мыла" />
        <figcaption className={s.block__caption}>Название продукции</figcaption>
      </figure>
      <figure className={s.block}>
        <img src={image} className={s.block__image} alt="Изображение мыла" />
        <figcaption className={s.block__caption}>Название продукции</figcaption>
      </figure>
      <figure className={s.block}>
        <img src={image} className={s.block__image} alt="Изображение мыла" />
        <figcaption className={s.block__caption}>Название продукции</figcaption>
      </figure>
      <figure className={s.block}>
        <img src={image} className={s.block__image} alt="Изображение мыла" />
        <figcaption className={s.block__caption}>Название продукции</figcaption>
      </figure>
    </div>
  )
}

export default Gallery;
