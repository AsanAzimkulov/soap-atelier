import React, { useEffect } from 'react';
import Review from '../../components/Review';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { fetchReviewsAction } from '../../store/actions/api-actions';
import { selectData } from '../../store/data/selectors';
import { ThunkAppDispatch } from '../../types/action';
import s from './index.module.scss';

const Reviews = () => {
  const dispatch = useAppDispatch() as ThunkAppDispatch;
  const { reviews } = useAppSelector(selectData);
  useEffect(() => {
    dispatch(fetchReviewsAction());
  }, [])
  return (
    <div className={s.root}>
      <h1 className={s.title}>Отзывы</h1>
      <ul className={s.list}>
        {
          reviews.map(review =>
            <li className={s.list_item} key={review.id}>
              <Review {...review} />
            </li>
          )
        }
      </ul>
    </div>
  )
}

export default Reviews
