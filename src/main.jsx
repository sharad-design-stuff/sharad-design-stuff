import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from './App.jsx'
import './index.css'
import Friends from './components/Mates.jsx'
import BottomNav from './components/BottomNav.jsx';
import Tap from './components/Tap.jsx';
import Airdrop from './components/Stats.jsx';

import './assets/css/style.scss'
import Layout from './components/Layout.jsx';
import Task from './components/Task.jsx';
import Boost from './components/Boost.jsx';
import Stats from './components/Stats.jsx';
import Mates from './components/Mates.jsx';
import Claim from './components/Claim.jsx';
import LeaderBoard from './components/LeaderBoard.jsx';


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout/>}>
          <Route index element={<Mates/>} />
          <Route path="task" element={<Task/>} />
          <Route path="mates" element={<Mates/>} />
          <Route path="tap" element={<Tap/>} />
          <Route path="boost" element={<Boost/>} />
          <Route path="stats" element={<Stats/>} />
          <Route path="claim" element={<Claim/>} />
          <Route path="leaderboard" element={<LeaderBoard/>} />

          
        </Route>
      </Routes>
    </BrowserRouter>
    <App />
  </React.StrictMode>,
)
