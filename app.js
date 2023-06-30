const express = require('express');
const app = express();


const router = require('./router/my.router')

app.use('/test', router)

app.use(express.json())

//setting for route
app.use(router);

//const PORT = process.env.PORT;
console.log('server started on port:',5000);
app.listen('5000');