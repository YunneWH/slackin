const slackin = require('slackin');
const express = require('express');
const redirectToHTTPS = require('./redirect');

const app = express()
      .enable('trust proxy')
      .use(redirectToHTTPS);

app.use(slackin.default({
  token: process.env.SLACK_TOKEN,
  interval: 600000,
  org: 'cardstack'
}).app);

app.listen(3000);
