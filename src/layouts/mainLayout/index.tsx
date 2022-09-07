import classNames from 'classnames';
import React, { useState } from 'react';
import { Outlet } from 'react-router';
import FixedCart from '../../components/FixedCart';
import Footer from '../../components/Footer';
import Header from '../../components/Header';
import SideBar from '../../components/SideBar';
import SideNav from '../../components/SideNav';
import styles from './index.module.scss';


const MainLayout = () => {

  const [isSideNavOpened, setIsSideNavOpened] = useState<boolean>(true);
  const [isCartOpened, setIsCartOpened] = useState<boolean>(false);

  const onClickMenu = () => setIsSideNavOpened(prev => !prev)
  const onClickCart = () => setIsCartOpened(prev => !prev)


  const rootClasses = classNames(
    styles.layout,
    {
      [styles.layout_cartOpened]: isCartOpened,
      [styles.layout_sideNavActive]: isSideNavOpened
    }
  )

  return (
    <div className={rootClasses} >
      <Header role={styles.header} onOpenMenu={onClickMenu} />
      <SideNav role={styles.sideNav} />
      <SideBar role={styles.sideBar} />
      <div className={styles.pageWrapper}>
        <main className={styles.pageContent}>
          <Outlet />
        </main>
        <Footer role={styles.footer} />
      </div>
      <FixedCart onClick={onClickCart} />
    </div>
  )
}

export default MainLayout;
