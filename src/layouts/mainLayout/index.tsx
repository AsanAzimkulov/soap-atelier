import React from 'react';
import { Outlet } from 'react-router';
import Footer from '../../components/Footer';
import Header from '../../components/Header';
import SideBar from '../../components/SideBar';
import SideNav from '../../components/SideNav';
import styles from './index.module.scss';


const MainLayout = () => {
  return (
    <div className={styles.layout}>
      <Header role={styles.header} />
      <SideNav role={styles.sideNav} />
      <SideBar role={styles.sideBar} />
      <div className={styles.pageWrapper}>
        <main className={styles.pageContent}>
          <Outlet />
        </main>
        <Footer role={styles.footer} />
      </div>
    </div>
  )
}

export default MainLayout;
