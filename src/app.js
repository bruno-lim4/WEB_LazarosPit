import express from 'express';
import bodyParser from 'body-parser';
import index from './routes/index.js';
import product from './routes/product.js';
import mongoose from 'mongoose';
import Product from './models/product.js';

const app = express();
mongoose.connect('mongodb://admin:admin123@localhost:27017/lazarospit?authSource=admin');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.use('/', index);
app.use('/product', product);

export default app;