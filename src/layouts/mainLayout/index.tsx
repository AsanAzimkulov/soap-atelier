import classNames from 'classnames';
import React, { useState } from 'react';
import { Outlet } from 'react-router';
import FixedCart from '../../components/FixedCart';
import Footer from '../../components/Footer';
import Header from '../../components/Header';
import SideBar from '../../components/SideBar';
import SideNav from '../../components/SideNav';
import styles from './index.module.scss';
import debounce from 'debounce';
import { useAppSelector } from '../../hooks/redux';
import { selectUserInterface } from '../../store/interface/selectors';


const MainLayout = () => {

  const { isMobileMenuOpened, isMobileCartOpened } = useAppSelector(selectUserInterface)




  const rootClasses = classNames(
    styles.layout,
    {
      [styles.layout_cartOpened]: isMobileCartOpened,
      [styles.layout_sideNavActive]: isMobileMenuOpened
    }
  )

  return (
    <div className={rootClasses} >
      <Header role={styles.header} />
      <SideNav role={styles.sideNav} />
      <SideBar role={styles.sideBar} />
      <div className={styles.pageWrapper}>
        <main className={styles.pageContent}>
          <Outlet />
        </main>
        <Footer role={styles.footer} />
      </div>
      <FixedCart />
    </div>
  )
}

export default MainLayout;
