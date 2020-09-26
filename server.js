'use strict'

const experss = require('express');

// Constants
const PORT = '8080';
const HOST = '0.0.0.0';

// App
const app = express();
app.get('/', function(req, res){
    res.send('Hell Mustapha');
})

app.listen(HOST, PORT);
console.log(`Running on http://${HOST}:${PORT}`);
