import classNames from 'classnames';
import React from 'react';
import Cart from '../Cart';
import Header from '../Header';
import s from './index.module.scss';

type PropsType = {
  role?: string,
}


const SideBar = ({ role }: PropsType) => {
  return (
    <aside className={classNames(role, s.root)}>
      <div className='stickyTop top-55'>
        <Cart />
      </div>
    </aside>
  )
}

export default SideBar;
