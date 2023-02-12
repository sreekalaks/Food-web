
//import express

const express = require('express');

//import cors

const cors = require('cors')

//import dataservices
const dataservices = require('./services/dataservice');

//create an  application using express

const app = express();

//use json parser for server responses

app.use(express.json())

// using cors specify the origin to the server

app.use(cors({
    origin:'http://localhost:4200'
}))

//set up a portnumber

app.listen(3000,()=>{
    console.log('listening on the port:3000');
})

//Api calls to get allfoods

app.get('/all-foods',(req,res)=>{
  dataservices.getFoods().then(
    result=>{
        res.status(result.statusCode).json(result)
    }
  )
})