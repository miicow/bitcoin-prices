const express = require('express');
const request = require('request');
const bodyParser = require('body-parser');

const app = express();
const port = process.env.PORT || 3000;
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/', express.static('public'));

app.listen(port, console.log(`listening on http://localhost:${port}`));
