const dotenv = require('dotenv').config();
const express = require('express');
const app = express();
const PORT = process.env.port || 3000;

app.use( express.urlencoded( { extended: true } ) );
app.use( express.json( { extended: true } ) );

app.use( express.static( __dirname + '/../cliend/dist' ) );

