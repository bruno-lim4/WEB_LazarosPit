import express from 'express';
import bodyParser from 'body-parser';
import index from './routes/index.js';
import product from './routes/product.js';
import client from './routes/client.js';
import mongoose from 'mongoose';
import admin from './routes/admin.js';
import Product from './models/product.js';
import cart from './routes/cart.js';
import tag from './routes/tag.js';
import cors from 'cors';

const app = express();
mongoose.connect('mongodb://localhost:27017/lazarospit');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(cors());
app.use('/', index);
app.use('/product', product);
app.use('/cart', cart);
app.use('/admin', admin);
app.use('/client', client);
app.use('/tag', tag);

export default app;