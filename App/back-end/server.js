'use strict'

//let mongoose = require('mongoose'),

const app = require('./app');
const config = require('./config/config')();
const db = require('./models');

console.log(`EXECUTION MODE: ${process.argv[2]}`);


db.sequelize.sync()
    .then(() => {
        app.listen(config.server.port, () => {
            console.log(`SERVER: listening on http://${config.server.ip}:${config.server.port}`);
        });
    })
    .catch(error => console.log(`DATABASE: ERROR: ${error}`));