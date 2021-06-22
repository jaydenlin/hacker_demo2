const express = require('express');
const dev = process.env.NODE_ENV !== 'production';
const path = require('path');
const dotenv = require('dotenv').config();
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const next = require('next');
const { decorateApp } = require('@awaitjs/express');
const port = parseInt(process.env.PORT, 10) || 80;
const app = next({ dev });
const handle = app.getRequestHandler();
const apiHost = process.env.API_HOST || 'http://game-api.com';
const apiRoutes = require('./routes/api')
const db = require('../db/index')
app.prepare()
  .then(async () => {

    const server = decorateApp(express());
    server.use(cookieParser());
    server.use(bodyParser());
    await db.init();
    apiRoutes.setRoutes(server, apiHost);


    server.get('*', (req, res) => {
      return handle(req, res);
    })

    const ready = await server.listen(port);
    console.log(`> Ready on http://localhost:${port}`);

  })
