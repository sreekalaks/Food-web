//import mongoose

const mongoose = require('mongoose')

//define the connection string

mongoose.connect('mongodb://localhost:27017/Food',()=>{
    console.log('connected to mongodb');
})

//create a model for the foods

const Food=mongoose.model('Food',{
    //schema creation
    id:Number,
    name:String,
    price:Number,
    imageUrl:String,
    origin:String
})


module.exports={
    Food
}