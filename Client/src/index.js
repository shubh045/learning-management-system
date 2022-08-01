import React from 'react';
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
// import './index.css';
import App from './App';
import Navbar from './component/Navbar/navbar';
import Profile from './component/Profile/Profile';
import Team from './component/Team/Team';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
  <BrowserRouter>
    <App/>
  </BrowserRouter>
</React.StrictMode>
);

