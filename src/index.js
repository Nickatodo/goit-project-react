import React from 'react';
import ReactDOM from 'react-dom/client';
import Navigation from 'Navigation';
import { store, persistedStore } from './redux/store/store';
import { PersistGate } from 'redux-persist/integration/react';
import { Provider } from 'react-redux';
import Modal from 'react-modal';

Modal.setAppElement('#root');

// ULTIMO CAMBIO 12-07
ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistedStore}>
      <Navigation></Navigation>
    </PersistGate>
  </Provider>
);
