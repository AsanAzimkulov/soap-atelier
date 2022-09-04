import React from 'react';
import s from './index.module.scss';

const Cart = () => {
  return (
    <div className={s.root}>
      <p className={s.title}>Ваша корзина пуста.</p>
      <p className={s.text}>Добавьте же скорее что-нибудь!</p>
      <p className={s.textHighlighted}>Бесплатная доставка от 800 СОМ</p>
    </div>
  )
}

export default Cart
