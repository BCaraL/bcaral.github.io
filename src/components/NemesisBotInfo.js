import React from 'react';
import discordlogo from '../resources/nemesis-logo.png';

const NemesisBotInfo = () => {
  const inviteLink = 'https://discord.com/oauth2/authorize?client_id=951349733211930654&permissions=19327446016&scope=bot';
  return (
    <div>
        <img src={discordlogo} alt="Logo" style={{ width: '100px' }} />
      <h2 style={{ paddingTop: '20px' }} >NEMESIS</h2>
      <p style={{ paddingTop: '20px', paddingBottom: '20px', width: '500px' }}>Use NEMESIS alongside WINGMAN to provide real time <strong>ranked</strong> map rotation. </p>
      <a 
        href={inviteLink}
        target="_blank"
        rel="noopener noreferrer"
        style={{
          display: 'inline-block',
          padding: '10px 20px',
          background: '#7289DA',
          color: '#FFFFFF',
          textDecoration: 'none',
          borderRadius: '5px',
          fontWeight: 'bold',
          textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)',
        }}
      >
        Invite to Your Server
      </a>

    </div>
  );
};  

export default NemesisBotInfo;