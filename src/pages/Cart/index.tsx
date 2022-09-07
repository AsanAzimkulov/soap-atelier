import React from 'react'
import s from './index.module.scss';
import CartComp from '../../components/Cart/index';

const Cart = () => {
  return (
    <div className={s.root}>
      <CartComp />
    </div>
  )
}

export default Cart
