const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
const router = express.Router();

//conexão com o banco
mongoose.connect(('mongodb+srv://davimachado123:davimachado123@cluster0.catov.mongodb.net/crud?retryWrites=true&w=majority'), {
useUnifiedTopology: true, useNewUrlParser: true, useCreateIndex: true, useFindAndModify: false })

app.use(cors());

//carrega os models
const User = require('./models/userSchema');

//carrega as rotas
const indexRoute = require('./routes/index');
const usersRoute = require('./routes/users');


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use('/', indexRoute);
app.use('/users', usersRoute);


module.exports = app;