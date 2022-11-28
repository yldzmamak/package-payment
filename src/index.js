import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './App';
import reportWebVitals from './reportWebVitals';

// persist
import { PersistGate } from 'redux-persist/integration/react';

//redux
import { Provider as ReduxProvider } from 'react-redux';
import { store, persistor } from './redux/configureStore';

// router dom
import { BrowserRouter as RouterProvider } from 'react-router-dom';

// styles
import './index.scss';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <ReduxProvider store={store}>
      <PersistGate loading={undefined} persistor={persistor}>
        <RouterProvider basename="/">
          <App />
        </RouterProvider>
      </PersistGate>
    </ReduxProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
