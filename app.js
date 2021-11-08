const express = require('express')
const router = require('./router/router')

const config = require('./config/config')
const strings = require('./config/strings')

const app = express()
app.use('', require('./router/router'))

app.listen(config.port, (err) => {

    if ( err ) throw new Error(err);

    console.log( strings.server_running , config.port);
})