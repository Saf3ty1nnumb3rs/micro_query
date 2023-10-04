const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
app.use(bodyParser.json());
app.use(cors());

const APP_PORT = 4002;
app.get('/posts', (req, res) => {

});

app.post('/posts', (req, res) => {

});

app.listen(APP_PORT, () => {
  console.log(`Listening on port ${APP_PORT}`);
});
