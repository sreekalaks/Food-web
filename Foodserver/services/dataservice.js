//import db

const db = require('./db');

//get all food details from db

const getFoods=()=>{
  return  db.Food.find().then(
        (result)=>{
            if(result){
                return{
                    status:true,
                    statusCode:200,
                    foods:result
                }
                
            }
            else{
                return{
                    status:false,
                    statusCode:402,
                    message: 'food not found'
                }
            }
        }
    )
}
module.exports={
    getFoods
}