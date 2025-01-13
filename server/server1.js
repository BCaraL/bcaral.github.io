const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const PORT = 5000;

// Middleware
app.use(bodyParser.json());
app.use(cors());

// Example route
app.get('/', (req, res) => {
  res.send('Backend is running!');
});

// Save player name
app.post('/save-player-name', (req, res) => {
  const { playerName } = req.body;

  if (!playerName) {
    return res.status(400).send({ message: 'Player name is required' });
  }

  console.log(`Player name received: ${playerName}`);
  // Save to a database here (if needed)
  res.status(200).send({ message: 'Player name saved successfully' });
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
