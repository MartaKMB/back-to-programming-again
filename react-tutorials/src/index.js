import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import AppTicTacToe from './AppTicTacToe';
import AppForm from './AppForm';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <AppTicTacToe /> */}
    <AppForm />
  </React.StrictMode>
);
