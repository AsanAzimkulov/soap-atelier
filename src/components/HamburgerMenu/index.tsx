import React, { useState, useRef } from 'react';
import s from './index.module.scss';
import Hamburger from 'hamburger-react';


type PropsType = {
  onClick: () => void,
}

const HamburgerMenu = ({ onClick }: PropsType) => {
  const isMounted = useRef<boolean>(false);

  const [isOpen, setOpen] = useState(false)

  if (isMounted.current) {
    onClick();
  } else {
    isMounted.current = true;
  }
  return (
    < Hamburger toggled={isOpen} toggle={setOpen} />
  )
}

export default HamburgerMenu
