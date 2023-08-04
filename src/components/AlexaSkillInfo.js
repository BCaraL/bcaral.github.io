import React from 'react';
import discordlogo from '../resources/alexa_logo_3.png';

const AlexaSkillInfo = () => {
  const inviteLink = 'https://www.amazon.com/CB-WINGMAN-Apex-Legends-Info/dp/B0BTNZSF5N';
  return (
    <div>
        <img src={discordlogo} alt="Logo" style={{ width: '100px' }} />
      <h2 style={{ paddingTop: '20px' }} >WINGMAN</h2>
      <p style={{ paddingTop: '20px', paddingBottom: '20px', width: '500px' }}>Prefer a hands free voice experience? Then get WINGMAN for the Alexa. </p>
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
        Get the Skill
      </a>

    </div>
  );
};  

export default AlexaSkillInfo;