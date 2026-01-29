const express = require('express');
const app = express()
const Port = 3000;
const router = require('./router/router')

app.use(express.json());

app.use('/', router);

app.listen(Port, () => {
    console.log(`server  http://localhost:${Port}`);
})