import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.jsx';
import { configureFakeBackend } from './helpers/fake-backend.js'


window.onload = () => {
  configureFakeBackend();
  ReactDOM.render(<App />, document.getElementById('root'));
};
