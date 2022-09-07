import React from 'react';
import { Router, Routes, Route } from 'react-router';
import { BrowserRouter } from 'react-router-dom';
import './App.css';
import CustomRouter from './components/Customs/CustomRouter';
import { AppRoute } from './types/const';
import MainLayout from './layouts/mainLayout';
import Main from './pages/Main';
import NoFound from './pages/NoFound';
import Catalog from './pages/Catalog';
import Offer from './pages/Offer';
import Cart from './pages/Cart';
import browserHistory from './browserHistory';
import Reviews from './pages/Reviews';
import Checkout from './pages/Checkout';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <CustomRouter history={browserHistory}>
      <ToastContainer />
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route path={AppRoute.Home} element={<Main />} />
          <Route path={AppRoute.Offers} element={<Catalog />} />
          <Route path={AppRoute.Offer} element={<Offer />} />
          <Route path={AppRoute.Cart} element={<Cart />} />
          <Route path={AppRoute.Reviews} element={<Reviews />} />
          <Route path={AppRoute.Checkout} element={<Checkout />} />
          <Route path='*' element={<NoFound />} />
        </Route>
      </Routes>
    </CustomRouter>
  );
}

export default App;
