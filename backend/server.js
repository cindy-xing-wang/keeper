const express = require('express');
const cors = require('cors');
const app = express();
const mongoose = require('mongoose');

app.use(cors());
app.use(express.json());

// app.get('/', function(req,res){
//     res.send('hello world');
// });

const homeRouter = require('./routes/home');

app.use('/',homeRouter);



app.listen(3000,function(){
    console.log('Server is running on port 3000...')
});