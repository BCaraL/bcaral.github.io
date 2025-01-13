import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

import NavBar from './components/NavBar';
import DiscordBotPage from './pages/DiscordBot';

import banner from './resources/wingman-banner-2.png';

import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <NavBar />
        <div className="banner-container">
          <img src={banner} alt="Banner" className="App-banner" />


          <div style={{
            paddingTop: '10px', position: 'absolute',
            top: '54%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            color: 'white',
            fontSize: '32px',
            zIndex: '1',
          }}>

            <p>

              The Ultimate Companion for Apex Legends Enthusiasts <br />
              Try Our Exclusive<br />
            </p>
            <div style={{ paddingTop: '10px' }}>
            <Link
              to="/discordbot"
              style={{
                color: '#CCCCCC',
                textDecoration: 'none',
                fontWeight: 'bold',
                textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)',
              }}
            >
              Discord Bot
            </Link>{' '}
              or{' '}
              <Link
                href="https://discord.com/"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  color: '#CCCCCC',
                  textDecoration: 'none', // Remove the underline
                  fontWeight: 'bold',
                  textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)',
                }}
              >
                Alexa Skill
              </Link>
            </div>
          </div>

        </div>
        <Routes>
          {/* Define the route to the Discord Bot page */}
          <Route path="/discordbot" element={<DiscordBotPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
