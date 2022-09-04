import classNames from 'classnames';
import React from 'react';
import s from './index.module.scss';
import whatsapp from '../../assets/images/icons/whatsapp.svg';
import telegram from '../../assets/images/icons/telegram.svg';
import instagram from '../../assets/images/icons/instagram.svg';

type PropsType = {
  role?: string,
}

const Footer = ({ role }: PropsType) => {
  return (
    <footer className={classNames(role, s.root)}>
      <div className={s.links}>
        <a href="#" className={s.links__link}>О компании</a>
        <a href="#" className={s.links__link}>Доставка и оплата</a>
        <a href="#" className={s.links__link}>Лента материалов</a>
        <a href="#" className={s.links__link}>Политика возврата</a>
      </div>
      <div className={s.socials}>
        <p className={s.socials__title}>Выбери удобный мессенджер для общения</p>
        <div className={s.socials__images}>
          <a href='#' className={s.socials__link}>
            <img src={whatsapp} alt="Вотсап" className={s.socials__image} />
          </a>
          <a href="#" className={s.socials__link}>
            <img src={telegram} alt="Телеграм" className={s.socials__image} />
          </a>
          <a href="#" className={s.socials__link}>
            <img src={instagram} alt="Инстаграм" className={s.socials__image} />
          </a>
        </div>
      </div>
      <div className={s.info}>
        <p className={s.info__paragraph}>Тел:<a href='tel:+996779168175' className={s.info__link}>+996 779 168 175</a></p>
        <p className={s.info__paragraph}>Тел:<a href='tel:+996779168175' className={s.info__link}>+996 779 168 175</a></p>
        <p className={s.info__paragraph}>Адрес:Бакаева 126</p>
      </div>
    </footer>
  )
}

export default Footer
