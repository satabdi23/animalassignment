const express = require('express');
const app = express();
const morgan = require('morgan');

const animals = require('./api/routes/animals')

app.use(morgan('dev'));

app.use('/health', (req, res) => {
    res.status(200).json({
        "status": "APIs are up and running"
    })
})
app.use('/pets', animals.pets)

module.exports = app