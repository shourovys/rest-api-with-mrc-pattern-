const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const router = require('./Routers/UserRouters');

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// eslint-disable-next-line prettier/prettier
const dbURL = 'mongodb+srv://readRight:readRight@cluster0.vb8a7.mongodb.net/<dbname>?retryWrites=true&w=majority';

mongoose
    .connect(dbURL, { useNewUrlParser: true, useUnifiedTopology: true })
    .then((res) => app.listen(4000))
    .catch((err) => console.log(err));

app.use('/user', router);
