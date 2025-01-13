const express = require('express');
const bodyParser = require('body-parser');
const OAuth2Server = require('oauth2-server');

const app = express();
app.use(bodyParser.json());

const oauth = new OAuth2Server({
  model: require('./oauthModel'), // Custom model for storing tokens and users
  accessTokenLifetime: 3600,
  allowBearerTokensInQueryString: true,
});

// Middleware for token authentication
app.post('/authorize', (req, res, next) => {
  const options = {
    authenticateHandler: {
      handle: (req) => {
        // Return the authenticated user
        return { username: req.body.username };
      },
    },
  };
  return oauth.authorize(options)(req, res, next);
});

// Token endpoint
app.post('/token', (req, res, next) => {
  return oauth.token()(req, res, next);
});

// Protected route (example)
app.get('/user', (req, res, next) => {
  oauth.authenticate()(req, res, next).then((token) => {
    res.json({ message: 'Authenticated!', user: token.user });
  }).catch(next);
});

// Start the server
app.listen(5000, () => {
  console.log('OAuth server is running on http://localhost:5000');
});
