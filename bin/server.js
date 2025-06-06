import http from 'http'
import debug from 'debug'
import express from 'express'
import app from '../src/app.js'

import dotenv from 'dotenv';
dotenv.config();

const port = 3122
app.set('port', port)

const server = http.createServer(app)
server.listen(port);
