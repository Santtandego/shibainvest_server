const express = require('express')
require('dotenv').config()

const app = express()

app.listen(process.env.PORT || 3612, (err) => {

    if ( err ) throw new Error(err);

    console.log( 'server running on:' , process.env.PORT);
})