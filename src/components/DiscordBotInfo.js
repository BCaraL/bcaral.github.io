import React from 'react';
import discordlogo from '../resources/discord_logo.png';

const DiscordBotInfo = () => {
  const inviteLink = 'https://discord.com/oauth2/authorize?client_id=951349733211930654&permissions=19327446016&scope=bot';
  return (
    <div>
        <img src={discordlogo} alt="Logo" style={{ width: '100px' }} />
      <h2 style={{ paddingTop: '20px' }} >WINGMAN</h2>
      <p style={{ paddingTop: '20px', paddingBottom: '20px', width: '500px' }}>Take your Discord server to the next level and get the latest Apex Legends updates with this bot. </p>
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
    transition: 'box-shadow 0.3s ease', /* Adding a transition for smooth hover effect */
  }}
  onMouseOver={(e) => e.target.style.boxShadow = '4px 4px 8px rgba(0, 0, 0, 0.7)'} /* Shadow effect on hover */
  onMouseOut={(e) => e.target.style.boxShadow = '2px 2px 4px rgba(0, 0, 0, 0.5)'} /* Reset shadow on hover out */
>
        Invite to Your Server
      </a>

    </div>
  );
};  

export default DiscordBotInfo;