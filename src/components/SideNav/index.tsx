import classNames from 'classnames';
import React, { useState } from 'react';
import s from './index.module.scss';
import image from '../../assets/images/mock.jpg';
import { Link } from 'react-router-dom';
import { AppRoute } from '../../types/const';
import Header from '../Header'
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { selectUserInterface } from '../../store/interface/selectors';
import { setIsMobileMenuOpened } from '../../store/interface/slice';

type PropsType = {
  role?: string,
}


const SideNav = ({ role }: PropsType) => {
  const { isMobileMenuOpened } = useAppSelector(selectUserInterface);
  const dispatch = useAppDispatch();

  const onToggleMenu = () => {
    dispatch(setIsMobileMenuOpened(!isMobileMenuOpened));
  }

  return (
    <aside className={classNames(role, s.root)}>
      <div className='stickyTop top-25'>
        <div className={s.logo}>
          <Link to={AppRoute.Home} onClick={onToggleMenu}>
            <img src={image} alt="Логотип" className={s.logo__image} />
          </Link>
        </div>
        <nav className={s.menu}>
          <ul className={s.menu__list}>
            <li className={s.menu__list__item}>
              <a href="#" className={s.menu__link}>
                <img src={image} alt="Галерея" className={s.menu__list__item__image} />
                <p className={s.menu__list__item__text}>Галерея</p>
              </a>
            </li>
            <Link to={AppRoute.Reviews} className={s.menu__link} onClick={onToggleMenu}>
              <img src={image} alt="Отзывы" className={s.menu__list__item__image} />
              <p className={s.menu__list__item__text}>Отзывы</p>
            </Link>
            <li className={s.menu__list__item}>
              <Link to={AppRoute.Reviews} className={s.menu__link} onClick={onToggleMenu}>
                <img src={image} alt="Каталог" className={s.menu__list__item__image} />
                <p className={s.menu__list__item__text}>Каталог</p>
              </Link>
            </li>
            <li className={s.menu__list__item}>
              <Link to={AppRoute.Cart} className={s.menu__link} onClick={onToggleMenu}>
                <img src={image} alt="Корзина" className={s.menu__list__item__image} />
                <p className={s.menu__list__item__text}>Корзина</p>
              </Link>
            </li>
            <Link to={AppRoute.Checkout} className={s.menu__link} onClick={onToggleMenu}>
              <img src={image} alt="Сделать заказ" className={s.menu__list__item__image} />
              <p className={s.menu__list__item__text}>Заказать</p>
            </Link>
          </ul>
          <Header role={s.mobileMenu} />
        </nav>
      </div>
    </aside>
  )
}

export default SideNav
