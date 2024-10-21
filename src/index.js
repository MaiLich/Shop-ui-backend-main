const express = require('express');
const app = express();
const cors = require('cors');
const morgan = require('morgan');
const db = require('./config/db');
const route = require('./routes');
const bodyParser = require('body-parser');

require('dotenv').config();

const port = process.env.PORT || 3002;

db.connect();

app.use(cors());

app.use(bodyParser.json());

app.use(morgan('combined'));

route(app);

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});
