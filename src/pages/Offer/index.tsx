import React, { useEffect, useRef, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate, useParams } from 'react-router';
import CatalogSlider from '../../components/CatalogSlider';
import { useAppSelector } from '../../hooks/redux';
import { fetchOfferAction } from '../../store/actions/api-actions';
import { selectData } from '../../store/data/selectors';
import { selectUser } from '../../store/user/selectors';
import { ThunkAppDispatch } from '../../types/action';
import { AppRoute } from '../../types/const';
import image from '../../assets/images/mock.jpg';
import s from './index.module.scss';
import { addItem, decrementItem } from '../../store/user/slice';
import { setOffer } from '../../store/data/slice';
import browserHistory from '../../browserHistory';

const Offer = () => {
  const { id } = useParams() as unknown as { id: string };
  const isMounted = useRef<boolean>(false);

  const { items } = useAppSelector(selectUser);


  const [amount, setAmount] = useState<number>(0);

  useEffect(() => {
    if (!isMounted.current) {
      const amount = items.find(item => +item.id === +id)?.amount || 0;
      setAmount(amount);
    } 
  }, [items])


  const navigate = useNavigate();
  const dispatch = useDispatch() as ThunkAppDispatch;

  const onClearOffer = () => {
    dispatchCommon(setOffer(undefined));
    isMounted.current = false;
  }

  const dispatchCommon = useDispatch();

  const { offer } = useAppSelector(selectData);

  useEffect(() => {
    if (id) {
      dispatch(fetchOfferAction(id));
    }
    const unlisten = browserHistory.listen(onClearOffer);
    return unlisten;
  }, [id])


  if (offer) {
      isMounted.current = true;
    const { name, imageUrl, price, description, fullDescription, weight, composition } = offer;

    const onIncrement = () => {
      setAmount(prev => ++prev)
      dispatch(addItem({ ...offer, id: +id }));
    };
    const onDecrement = () => {
      if (amount === 0) return;
      if (id) {
        setAmount(prev => --prev)
        dispatchCommon(decrementItem(+id));
      }
    };
    return (
      <>
        <div className={s.root}>
          <div className={s.picture}>
            <img src={image} alt={`Изображение ${name}`} className={s.image} />
          </div>
          <div className={s.content}>
            <h1 className={s.name}>{name}</h1>
            <p className={s.weight}>{weight}</p>
            <div className={s.downBar}>
              <div className={s.downBar__bold}>
                <strong className={s.price}>
                  {price} СОМ
                </strong>
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
              </div>

              <p className={s.compositionTitle}>Состав</p>
              <p className={s.composition}>{composition}</p>
              <button className={s.button}>Заказать</button>
            </div>
          </div>
        </div>
        <CatalogSlider />
      </>
    );
  }

  return <></>;

}

export default Offer
