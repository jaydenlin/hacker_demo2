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
    //設定Cookie簽章
    server.use(cookieParser('secret_12345'));
    server.use(bodyParser());
    await db.init();
    apiRoutes.setRoutes(server, apiHost);

    //回傳Cookie
    server.use((req, res, next) => {
      res.cookie('signed_cookie', 'hello', {
          path: '/',
          signed: true
      });
      next();
    });
    server.getAsync('/api/cookie', async (req, res) => {
      //印出已簽章的 Cookies
      console.log('Signed Cookies: ', req.signedCookies.signed_cookie);
      if(req.signedCookies.signed_cookie) {
        return res.send({ result: 'ok'});
      } else {
        return res.send({ result: 'not ok'});
      }
      
    })
    server.get('*', (req, res) => {
      return handle(req, res);
    })

    const ready = await server.listen(port);
    console.log(`> Ready on http://localhost:${port}`);

  })
