const express=require("express");

const app=express()
let PORT =process.env.PORT||5000

app.get("",(req,res)=>{
    res.send("hey")
})
app.listen(PORT,()=>{
    console.log(`Listening at ${PORT}`)
})