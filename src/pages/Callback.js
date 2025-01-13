import { useEffect } from 'react';

const Callback = () => {
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const code = params.get('code');

    if (code) {
      fetch('http://localhost:5000/token', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          grant_type: 'authorization_code',
          code,
          redirect_uri: 'http://localhost:3000/callback',
          client_id: 'YOUR_CLIENT_ID',
          client_secret: 'YOUR_CLIENT_SECRET',
        }),
      })
        .then((res) => res.json())
        .then((data) => {
          console.log('Access Token:', data.access_token);
          // Save the token in localStorage or context for later use
        })
        .catch((err) => console.error(err));
    }
  }, []);

  return <h2>Logging you in...</h2>;
};

export default Callback;
