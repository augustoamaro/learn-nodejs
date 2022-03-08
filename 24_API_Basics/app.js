const express = require('express');

const feedRoutes = require('./routes/feed');

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use('/feed', feedRoutes);

app.listen(8080);