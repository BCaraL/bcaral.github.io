import React, { useState } from 'react';
import '../App.css';

const Login = () => {
  const [playerName, setPlayerName] = useState('');
  const [message, setMessage] = useState('');

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("SUBMIT")
    const URL = 'https://tgjqek8cia.execute-api.us-east-1.amazonaws.com/'
    console.log(URL)

    try {
      const response = await fetch(URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ playerName }),
      });

      const result = await response.json();
      console.log(result)

      if (response.ok) {
        setMessage('Player name saved successfully!');
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
        <p>Enter your player name below to link it with your Alexa skill:</p>
        <form onSubmit={handleSubmit}>
          <div style={{ marginBottom: '10px' }}>
            <label htmlFor="playerName">Player Name</label>
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
