import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

import NavBar from '../components/NavBar';
import DiscordBotInfo from '../components/DiscordBotInfo';
import NemesisBotInfo from '../components/NemesisBotInfo';
import AlexaSkillInfo from '../components/AlexaSkillInfo';
import apex_bullet from '../resources/apex-legends-symbol_2.png';
import apex_ss_map from '../resources/WINGMAN_SS_1.png'
import apex_ss_status from '../resources/wingman_nemesis_discord_map.png'


import banner from '../resources/wingman-banner-2.png';

import '../App.css';


const Home = () => {

  const discordLink = 'https://discord.com/oauth2/authorize?client_id=951349733211930654&permissions=19327446016&scope=bot';
  const AlexaLink = 'https://www.amazon.com/CB-WINGMAN-Apex-Legends-Info/dp/B0BTNZSF5N';


  return (
    <div style={{ background: '#332A2B', minHeight: '100vh', color: 'white' }}>
      <NavBar />
      <div className="App"><div style={{ position: 'relative', width: '100%', height: '100%' }}>
        <img src={banner} alt="Banner" className="App-banner" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />

        <div style={{
          position: 'absolute',
          bottom: '40px',
          left: '50%',
          transform: 'translateX(-50%)',
          color: 'white',
          fontSize: '32px',
          zIndex: '1',
          textAlign: 'center',
          textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)',
          width: '100%',
        }}>

          <img src={apex_bullet} alt="Logo" style={{ width: '80px' }} />

          <div style={{ paddingTop: '30px' }}>
            Try Our Exclusive<br />
          </div>

          <div style={{ paddingTop: '10px' }}>
            <a href='#section-main' style={{ color: '#CCCCCC', textDecoration: 'none', fontWeight: 'bold' }}>
              Discord Bot
            </a>{' '}
            or{' '}
            <a href='#section-main' target="_blank" rel="noopener noreferrer" style={{ color: '#CCCCCC', textDecoration: 'none', fontWeight: 'bold' }}>
              Alexa Skill
            </a>
          </div>
        </div>
      </div>


        <div id='section-main' style={{ display: 'flex', justifyContent: 'center', fontSize: '30px', paddingTop: '30px' }}>
          The Ultimate Companion for Apex Legends Enthusiasts
        </div>
        <div style={{ display: 'flex', justifyContent: 'center', padding: '30px', fontSize: '18px' }}>
          WINGMAN truly proves to be an indispensable companion for all Apex Legends enthusiasts, <br />
          streamlining information and enhancing the overall gaming experience. <br /></div>



        <div style={{ display: 'flex', justifyContent: 'center', width: '100%', background: '#4D3F41', padding: '30px' }}>
          <div style={{ marginLeft: '90px' }}>
            <DiscordBotInfo />
          </div>
          <div style={{ marginRight: '90px' }}>
            <AlexaSkillInfo />
          </div>
        </div>



        <div style={{ paddingTop: '30px', fontSize: '22px', paddingBottom: '10px' }}>
          <div style={{ fontSize: '30px', fontWeight: 'bold' }}>Featuring  </div>
          <div style={{ paddingTop: '30px ', fontSize: '18px', display: 'flex', justifyContent: 'center' }}>
            <ul style={{ listStyleType: 'none  ', paddingLeft: '20px' }}>
              <li>
                <img src={apex_bullet} alt="Logo" style={{ width: '20px', verticalAlign: 'top' }} />
                <span style={{ paddingLeft: '10px' }}>Up-to-date player statistics.</span>
              </li>

              <li style={{ paddingTop: '5px' }}>
                <img src={apex_bullet} alt="Logo" style={{ width: '20px', verticalAlign: 'top' }} />
                <span style={{ paddingLeft: '10px' }}>Real-time status updates to stay informed about the current map and its duration.</span>
              </li>

              <li style={{ paddingTop: '5px' }}>
                <img src={apex_bullet} alt="Logo" style={{ width: '20px', verticalAlign: 'top' }} />
                <span style={{ paddingLeft: '10px' }}>Random drop locations for added excitement.</span>
              </li>
              <li style={{ paddingTop: '5px' }}>
                <img src={apex_bullet} alt="Logo" style={{ width: '20px', verticalAlign: 'top' }} />
                <span style={{ paddingLeft: '10px' }}>Stay informed about the current craft rotation items.</span>
              </li>
              <li style={{ paddingTop: '5px' }}>
                <img src={apex_bullet} alt="Logo" style={{ width: '20px', verticalAlign: 'top' }} />
                <span style={{ paddingLeft: '10px' }}>Get latest news and status information, ensuring you never miss important updates.</span>
              </li>
              <li style={{ paddingTop: '5px' }}>
                <img src={apex_bullet} alt="Logo" style={{ width: '20px', verticalAlign: 'top' }} />
                <span style={{ paddingLeft: '10px' }}>Challenges that offer random legend and weapon combinations.</span>
              </li>
            </ul>
          </div>
        </div>


        <div style={{ marginTop: '40px', fontSize: '22px', padding: '20px', background: '#4D3F41', }}>
          For real time Ranked Map rotation status try out <strong>NEMESIS</strong>,<br /> another helpful Discord bot that works alongside WINGMAN. <br />
        </div>

        <div style={{ display: 'flex', justifyContent: 'center', width: '100%', background: '#4D3F41', padding: '30px' }}>
          <div >
            <NemesisBotInfo />
          </div>
        </div>

        <div style={{ fontSize: '30px', fontWeight: 'bold', paddingTop: '20px' }}>About  </div>

        <div style={{ display: 'flex', justifyContent: 'center', width: '100%', padding: '40px', borderBottom: '1px solid #4D3F41' }}>

          <div style={{ marginLeft: '90px', width: '40%' }}>
            <img src={apex_ss_status} alt="Logo" style={{ verticalAlign: 'top' }} />
          </div>
          <div style={{ marginRight: '90px', width: '40%' }}>
            Real time status for map rotation including the current map and the minutes remaining.<br /><br />
            WINGMAN provides pubs map information <br /> NEMESIS provides ranked map information.<br /> Add them both to your server to provide the full experience.

          </div>
        </div>

        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100%', padding: '30px' }}>
          <div style={{ marginLeft: '90px', width: '40%' }}>
            Type '/map' to find out the current map, its duration and what map will be next for all game modes including pubs, ranked or LTM (Limited Time Mode).
          </div>
          <div style={{ marginRight: '90px', width: '40%' }}>
            <img src={apex_ss_map} alt="Logo" style={{ verticalAlign: 'top' }} />
          </div>
        </div>



      </div>

    </div>
  );
};

export default Home;