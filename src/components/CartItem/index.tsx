import React, { useState } from 'react';
import { TCartOffer } from '../../types/offer';
import s from './index.module.scss';
import image from '../../assets/images/mock.jpg';
import { useAppDispatch } from '../../hooks/redux';
import { addItem, decrementItem, removeItem } from '../../store/user/slice';
import { Link, generatePath } from 'react-router-dom';
import { AppRoute } from '../../types/const';

type PropsType = {
  item: TCartOffer
}

const CartItem = ({ item }: PropsType) => {
  const { id, name, imageUrl, price, description, fullDescription, amount } = item;

  // const [amount, setAmount] = useState<number>(amountItems);

  const dispatch = useAppDispatch();
  const onIncrement = () => {
    // setAmount(prev => ++prev);
    dispatch(addItem({ ...item, id: +id }));
  };
  const onDecrement = () => {
    // setAmount(prev => --prev);
    dispatch(decrementItem(+id));
  }

  const onRemove = () => {
    dispatch(removeItem(+id));
  }

  let nameCropped = name;
  if (name.length >= 16) {
    nameCropped = name.slice(0, 17) + '...';
  }
  return (
    <div className={s.root}>
      <div className={s.picture}>
        <Link to={generatePath(AppRoute.Offer, { id: id.toString() })}>
          <img className={s.image} src={image} alt={`изображение товара ${name}`} />
        </Link>
      </div>
      <div className={s.info}>
        <h4 className={s.title}>{nameCropped}<button className={s.remove} onClick={onRemove}>x</button></h4>
        <div className={s.downBar}>
          <div className={s.controls}>
            <button
              className={s.decrement}
              onClick={onDecrement}
            ></button>
            <input
              type="number"
              className={s.input}
              value={amount}
              onChange={(e) => e.preventDefault}
              min='1'
            />
            <button
              className={s.increment}
              onClick={onIncrement}
            ></button>
          </div>
          <strong className={s.price}>
            {price} СОМ
          </strong>
        </div>
      </div>
    </div>
  )
}

export default CartItem

