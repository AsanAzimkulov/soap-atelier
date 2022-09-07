import React, { useRef } from 'react';
import { useForm } from 'react-hook-form';
import emailjs from '@emailjs/browser';
import s from './index.module.scss';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { selectUser } from '../../store/user/selectors';
import getMinifyCartString from '../../utils/cart/getMinifyCartString';
import { toast } from 'react-toastify';
import { setCart } from '../../store/user/slice';

const ON_ERROR = 'Произошла неизвестная ошибка, попробуйте ещё раз или свяжитесь с администратором сайта.'

const ON_SUCCESS = 'Вы успешно совершили заказ! Скоро с вами свяжутся.'

const Checkout = () => {
  const dispatch = useAppDispatch();
  const { items, totalPrice } = useAppSelector(selectUser);
  const cart = getMinifyCartString({ items, totalPrice });
  const formRef = useRef<HTMLFormElement>(null);

  const { register, handleSubmit, watch, formState: { errors }, setValue } = useForm();

  const onSubmit = async (data: any) => {
    if (!formRef.current) return;

    setValue('cart', cart, { shouldValidate: false })

    try {
      await emailjs.sendForm('service_4388y1z', 'template_87bu2tl', formRef.current, 'f4nenO6KNVQQZj7W_')
        .then((result) => {
          console.log(result.text);
        }, (error) => {
          console.log(error.text);
        });
      toast.success(ON_SUCCESS);
      console.log(cart)
      dispatch(setCart([]));
    } catch (error) {
      toast.error(ON_ERROR);
    }
  }
  return (
    <div className={s.root}>
      <h1 className={s.title}>Сделать заказ</h1>
      <p className={s.text}>Заполните форму, и мы свяжемся с вами!</p>
      <form onSubmit={handleSubmit(onSubmit)} ref={formRef} className={s.form}>
        <input type="text" required placeholder={'Способ связи(почта, номер, соц.сеть)'} {...register('connectWay', { required: 'Необходимо указать способ связи', minLength: 5 })} name='connectWay' className={s.input} />
        {errors.connectWay && <p className={s.error_required}>{'Необходимо указать способ связи'}</p>}
        <input type="text" placeholder={'Комментарий к заказу'} {...register('comment')} name='comment' className={s.input} />
        <input type="text" {...register('cart')} className={s.input_hidden} />
        <input type="submit" value="Заказать" className={s.submit} />
      </form>
    </div>
  )
}

export default Checkout
