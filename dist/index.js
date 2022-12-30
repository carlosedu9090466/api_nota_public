"use strict";const express = require('express');
const cors = require('cors');
const router = require('./routes/routes');
const app = express();


app.use(cors());
app.use(express.json());
app.use(router);

const porta = 3111;

app.listen(porta, ()=> {
    console.log('rodou na porta ' + porta);
});


app.get('/',(req,res) => res.json({message: 'Funcionandoooooooo!'}));












