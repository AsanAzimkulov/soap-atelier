import React from 'react';
import { Router, Routes, Route } from 'react-router';
import { BrowserRouter } from 'react-router-dom';
import './App.css';
import { AppRoutes } from './types/const';
import MainLayout from './layouts/mainLayout';
import Main from './pages/Main';
import NoFound from './pages/NoFound';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route path={AppRoutes.Home} element={<Main />} />
          <Route path='*' element={<NoFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
