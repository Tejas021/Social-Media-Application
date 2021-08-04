const express=require("express");
const mongoose = require("mongoose")
const mongodb = "mongodb+srv://admin:admin123@cluster0.abkev.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"

const app=express()
let PORT =process.env.PORT||5000
mongoose.connect(mongodb,{useNewUrlParser: true,  useUnifiedTopology: true  } ).then(()=>{app.listen(PORT,()=>{
    console.log(`Listening at ${PORT}`)
})})

app.get("",(req,res)=>{
    res.send("hey")
})
