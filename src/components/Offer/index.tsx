import React from 'react';
import { generatePath, useNavigate } from 'react-router';
import image from '../../assets/images/mock.jpg';
import { AppRoute } from '../../types/const';
import { TOffer } from '../../types/offer';
import { Link } from 'react-router-dom';
import s from './index.module.scss';
import { useAppDispatch } from '../../hooks/redux';
import { addItem } from '../../store/user/slice';

type PropsType = {
  offer: TOffer
}

const Offer = ({ offer }: PropsType) => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const { name, description, fullDescription, price, id } = offer;

  const onAddToCart = (e: React.MouseEvent) => {
    e.stopPropagation();
    dispatch(addItem({ ...offer, id: +offer.id }));
  }
  return (
    <div className={s.root}>
      <Link to={generatePath(AppRoute.Offer, { id: id.toString() })} style={{ textDecoration: 'none' }}>
        <div>
          <img src={image} alt={`Изображение товара ${name}`} className={s.image} />
        </div>
        <h3 className={s.name}>{name}</h3>
        <h4 className={s.info}>{description}</h4>
      </Link>
      <div className={s.downBar}>
        <strong className={s.price}>{price} сом</strong>
        <button className={s.button} onClick={onAddToCart}>В корзину</button>
      </div>
    </div>
  )
}

export default Offer
