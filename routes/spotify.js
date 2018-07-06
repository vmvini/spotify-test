const request = require('request');
const express = require('express');
const router = express.Router();
const scopes = 'user-read-private user-read-email';
const baseUrl = 'https://accounts.spotify.com/authorize';
const getTokenUrl = 'https://accounts.spotify.com/api/token';
const keys = require('./../key');

const urlGenerator = (clientId, scopes, redirect_uri) => {
  return `${baseUrl}?response_type=code&client_id=${clientId}${getScope()}` +
    `&redirect_uri=${encodeURIComponent(redirect_uri)}`;

  function getScope() {
      return scopes ? `&scope=${encodeURIComponent(scopes)}` : '';
  }
};

const tokenRequestDataFactory = () => {
  return {
    method : "POST",
    url : getTokenUrl,
    json : true,
    headers : 
    {
        "Content-Type" : "application/x-www-form-urlencoded",
        "Authorization" : "Basic " + new Buffer(keys.clientId+":"+keys.clientSecret).toString('base64')
    },
    body : "grant_type=client_credentials"
  };
};

const url = urlGenerator(keys.clientId, scopes, keys.redirect_uri);

router.get('/login', (req, res, next) => {
  res.redirect(url);
});

router.get('/callback', (req, res, next) => {
  const requestData = tokenRequestDataFactory();
  request(requestData, (err, response, body) => {
    if (err) {
      res.redirect(`http://localhost:3000/error`);
      return;
    }
    res.redirect(`http://localhost:3000/list/${body.access_token}`);
  });
});


module.exports = router;