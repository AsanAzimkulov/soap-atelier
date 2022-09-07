import React from 'react'
import { useAppSelector } from '../../hooks/redux';
import { selectData } from '../../store/data/selectors';
import Offer from '../../components/Offer';
import s from './index.module.scss';

const Catalog = () => {
  const { offers } = useAppSelector(selectData);
  return (
    <div className={s.root}>
      <h1 className={s.title}>Каталог</h1>
      <ul className={s.list}>
        {
          offers.map(offer =>
            <li className={s.list_item} key={offer.id}>
              <Offer offer={offer} />
            </li>
          )
        }
      </ul>
    </div>
  )
}

export default Catalog;
