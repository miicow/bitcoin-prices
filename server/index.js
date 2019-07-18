const express = require('express');
const request = require('request');
const bodyParser = require('body-parser');

const app = express();
const port = process.env.PORT || 3000;
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/', express.static('public'));

app.post('/submit-form', (req, res) => {
  console.log(req.body);
  res.render('the_template', { start: req.body.startDate });
});

app.get('/api/bitcoin/', (req, res) => {
  request(
    'https://api.coindesk.com/v1/bpi/historical/close.json?start=2019-04-01&end=2019-04-30',
    (error, response) => {
      if (error) {
        res.status(500).send(error);
      } else {
        res.status(200).send(response.body);
      }
    }
  );
});

app.listen(port, console.log(`listening on http://localhost:${port}`));
