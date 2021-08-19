const mongoose = require("mongoose")
const Schema = mongoose.Schema

const messageSchema=new Schema({
    user_name:{
        type:String,
        requried:true
    }
     , text:{
         type:String,
         requried:true
     },
     user_id:{
         type:String,
         requried:true
     },
     room_id:{
         type:String,
         requried:true
 
     }

},{timestamps:true})

const Message = mongoose.model('message',messageSchema)
module.exports=Message;



