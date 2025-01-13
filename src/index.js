import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import reportWebVitals from './reportWebVitals';



import { HashRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import DiscordBot from "./pages/DiscordBot";
import Login from "./pages/Login";


export default function App() {
  return (
    <HashRouter>
      <Routes>
       
      <Route path="/" element={<Home />} ></Route>
      <Route path="discordbot" element={<DiscordBot />} ></Route>
      <Route path="login" element={<Login />} ></Route>

   
      </Routes>
      </HashRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />); 

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
