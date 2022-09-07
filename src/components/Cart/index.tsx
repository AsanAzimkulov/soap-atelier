import React, { useEffect, useRef } from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { selectUser } from '../../store/user/selectors';
import { TCartOffer } from '../../types/offer';
import CartItem from '../CartItem';
import { LS } from '../../types/const';
import s from './index.module.scss';

const Cart = () => {
  const isMounted = useRef<boolean>(false);
  const { items } = useAppSelector(selectUser);


  useEffect(() => {
    const json = JSON.stringify(items);
    window.localStorage.setItem(LS.CART, json);
  }, [items])

  if (items.length !== 0) {
    return (
      <div className={s.root}>
        <>
          <p className={s.title}>Корзина</p>
          {
            items.map(item => <CartItem item={item} key={item.id} />)
          }
        </>
      </div>
    );
  }



  return (
    <div className={s.root}>
      <p className={s.title}>Ваша корзина пуста.</p>
      <p className={s.text}>Добавьте же скорее что-нибудь!</p>
      <p className={s.textHighlighted}>Бесплатная доставка от 800 СОМ</p>
    </div>
  );
}

export default Cart
