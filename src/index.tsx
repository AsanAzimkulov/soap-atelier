import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
import { setupStore } from './store/store';
import { createAPI } from './services/api';
import { ThunkAppDispatch } from './types/action';
import { fetchOffersAction } from './store/actions/api-actions';

const api = createAPI();

const store = setupStore(api);

(store.dispatch as ThunkAppDispatch)(fetchOffersAction());

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
