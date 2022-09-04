import React from 'react'
import { AppRoutes } from '../../types/const'
import s from './index.module.scss';
import { Link } from 'react-router-dom';

const NoFound = () => {
  return (
    <div className={s.root}>
      <h1 className={s.title}><span className={s.code}>404</span>Страницa не найдена</h1>
      <Link to={AppRoutes.Home} className={s.link}>На главную</Link>
    </div>
  )
}

export default NoFound
