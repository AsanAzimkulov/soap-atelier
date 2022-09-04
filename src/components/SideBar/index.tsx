import React from 'react';
import Cart from '../Cart';

type PropsType = {
  role?: string,
}


const SideBar = ({ role }: PropsType) => {
  return (
    <aside className={role}>
      <div className='stickyTop top-55'>
        <Cart />
      </div>
    </aside>
  )
}

export default SideBar;
