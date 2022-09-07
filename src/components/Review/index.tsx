import React from 'react';
import { TReview } from '../../types/review';
import s from './index.module.scss';

const Review = ({title, date, text}: TReview) => {
  return (
    <div className={s.root}>
      <div className={s.top}>
        <p className={s.title}>
          {title}
        </p>
        <time className={s.date}>
        {date}
        </time>
      </div>
      <div className={s.down}>
        <p className={s.text}>
          {text}
        </p>
      </div>
    </div>
  )
}

export default Review
