import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import { disableReactDevTools } from '@fvilers/disable-react-devtools';
import App from './App';
import NavBar from './NavBar';
import Disease from './Disease';

if (process.env.NODE_ENV == 'production') disableReactDevTools()
// When you run npm start or yarn start, CRA automatically sets NODE_ENV to 'development'
// When you run npm test or yarn test, CRA sets NODE_ENV to 'test'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <NavBar/>
      <Routes>
      <Route path='/' element = {<App />}/>
      <Route path='/:type' element = {<Disease />}/>
      </Routes>
    </Router>
  </React.StrictMode>
);