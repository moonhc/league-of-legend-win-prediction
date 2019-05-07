require('dotenv').config();

const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const app = express();
const port = process.env.PORT || 3001;
//const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

mongoose.Promise= global.Promise;

mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true })
    .then(() => console.log('MongoDB is connected'))
    .catch(e => console.error(e));

app.use('/', require('./routes/index'))

let server = app.listen(port, () => {
    console.log("API server has started on http://localhost:%s", port)
})

