import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import AppTicTacToe from './AppTicTacToe';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <AppTicTacToe />
  </React.StrictMode>
);
