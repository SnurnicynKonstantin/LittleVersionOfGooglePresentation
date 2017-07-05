const express = require('express');
const pg = require('pg');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
const db = require('./config/db');

const port = 8000;
app.use(cors());
app.options('*', cors());
app.use(bodyParser.urlencoded({ extended: true }));
pg.connect(db.url, (err, database) => {
    if (err) return console.log(err)
    require('./src/routes')(app, database);
    app.listen(port, () => {
        console.log('Server start on ' + port);
    });
})