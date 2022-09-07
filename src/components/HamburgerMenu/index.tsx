import React, { useState, useRef } from 'react';
import s from './index.module.scss';
import Hamburger from 'hamburger-react';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { selectUserInterface } from '../../store/interface/selectors';
import { setIsMobileMenuOpened } from '../../store/interface/slice';


type PropsType = {

}

const HamburgerMenu = ({ }: PropsType) => {
  const { isMobileMenuOpened } = useAppSelector(selectUserInterface);
  const dispatch = useAppDispatch();
  const onToggle = (flag: any) => dispatch(setIsMobileMenuOpened(flag));
  return (

    < Hamburger toggled={isMobileMenuOpened} toggle={onToggle} />

  )
}

export default HamburgerMenu
