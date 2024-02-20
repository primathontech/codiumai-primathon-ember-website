const FastBootAppServer = require('fastboot-app-server');
const express = require('express');

const app = express();
const server = new FastBootAppServer({
  distPath: 'dist',
  gzip: true
});

app.get('/*', server.middleware());
