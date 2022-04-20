const express = require('express')
const mongoose = require('mongoose')
const router = require('./routes/dest')
var app = express()

app.get('/',function(req,res){
    res.send('hello world')
})
app.use('/dest',router)

require('dotenv').config();

const url = `mongodb+srv://${process.env.USERNAME}:${process.env.PASSWORD}@cluster0.kn8a8.mongodb.net/djamon?retryWrites=true&w=majority`;

const connectionParams={
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true 
}
mongoose.connect(url,connectionParams)
    .then( () => {
        console.log('Connected to database ')
    })
    .catch( (err) => {
        console.error(`Error connecting to the database. \n${err}`);
    })

app.listen(8000,function(){
    console.log('Server is Up')
})