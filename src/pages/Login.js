import React, { useState, useEffect } from 'react';
import '../App.css';

const Login = () => {
  const [playerName, setPlayerName] = useState('');
  const [platform, setPlatform] = useState('PC'); // Default to PC
  const [id, setUserId] = useState('');
  const [message, setMessage] = useState('');

  useEffect(() => {
    const hash = window.location.hash;
    console.log("Window location hash:", hash);
  
    const queryString = hash.includes('?') ? hash.split('?')[1] : '';
    console.log("Query string from hash:", queryString);
  
    const params = new URLSearchParams(queryString);
    const extractedUserId = params.get('id');
    console.log("Extracted User ID:", extractedUserId);
  
    if (extractedUserId) {
      setUserId(extractedUserId);
    } else {
      setMessage('ID not found in the URL. Please try again.');
    }
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const URL = 'https://tgjqek8cia.execute-api.us-east-1.amazonaws.com/';

    try {
      const response = await fetch(URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ playerName, platform, id }),
      });

      const result = await response.json();
      if (response.ok) {
        setMessage('Player name and platform saved successfully!');
      } else {
        setMessage('Error: ' + result.message);
      }
    } catch (error) {
      console.error('Error:', error);
      setMessage('Failed to connect to the server.');
    }
  };

  return (
    <div style={{ background: '#332A2B', minHeight: '100vh', color: 'white' }}>
      <div style={{ padding: '20px', maxWidth: '400px', margin: 'auto' }}>
        <h2>Link Your Player Name</h2>
        <br/>
        <p>Enter your player name below to link it with your Alexa skill:</p>
        <br/>
        <form onSubmit={handleSubmit}>
          <div style={{ marginBottom: '10px' }}>
            <label htmlFor="playerName">Player Name</label>
            <br/>
            <input
              type="text"
              id="playerName"
              value={playerName}
              onChange={(e) => setPlayerName(e.target.value)}
              style={{ width: '100%', padding: '8px', margin: '5px 0', borderRadius: '4px' }}
              placeholder="Enter your player name"
              required
            />
          </div>
          <div style={{ marginBottom: '10px' }}>
            <label htmlFor="platform">Platform</label>
            <select
              id="platform"
              value={platform}
              onChange={(e) => setPlatform(e.target.value)}
              style={{ width: '100%', padding: '8px', margin: '5px 0', borderRadius: '4px' }}
            >
              <option value="PC">PC (Origin or Steam)</option>
              <option value="Playstation">PlayStation</option>
              <option value="Xbox">Xbox</option>
            </select>
          </div>
          <button
            type="submit"
            style={{
              width: '100%',
              padding: '10px',
              backgroundColor: '#007BFF',
              color: 'white',
              border: 'none',
              borderRadius: '4px',
              cursor: 'pointer',
            }}
          >
            Save Player Name
          </button>
        </form>
        {message && <p style={{ marginTop: '10px', color: 'yellow' }}>{message}</p>}
      </div>
    </div>
  );
};

export default Login;
