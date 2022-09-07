import classNames from 'classnames';
import React from 'react';
import s from './index.module.scss';
import image from '../../assets/images/mock.jpg';
import { Link } from 'react-router-dom';
import { AppRoute } from '../../types/const';

type PropsType = {
  role?: string,
}


const SideNav = ({ role }: PropsType) => {
  return (
    <aside className={classNames(role, s.root)}>
      <div className='stickyTop top-25'>
        <div className={s.logo}>
          <Link to={AppRoute.Home}>
            <img src={image} alt="Логотип" className={s.logo__image} />
          </Link>
        </div>
        <nav className={s.menu}>
          <ul className={s.menu__list}>
            <li className={s.menu__list__item}>
              <a href="#" className={s.menu__link}>
                <img src={image} alt="Иконка пункта меню" className={s.menu__list__item__image} />
                <p className={s.menu__list__item__text}>Галерея</p>
              </a>
            </li>
            <li className={s.menu__list__item}>
              <Link to={AppRoute.Offers} className={s.menu__link}>
                <img src={image} alt="Иконка пункта меню" className={s.menu__list__item__image} />
                <p className={s.menu__list__item__text}>Каталог</p>
              </Link>
            </li>
            <li className={s.menu__list__item}>
              <Link to={AppRoute.Cart} className={s.menu__link}>
                <img src={image} alt="Корзина" className={s.menu__list__item__image} />
                <p className={s.menu__list__item__text}>Корзина</p>
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </aside>
  )
}

export default SideNav
