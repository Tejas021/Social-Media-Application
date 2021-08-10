const express=require("express");
const mongoose = require("mongoose")
const mongodb = "mongodb+srv://admin:admin123@cluster0.abkev.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"
const Post=require( "./models/Post");
const app=express()
let PORT =process.env.PORT||5000
mongoose.connect(mongodb,{useNewUrlParser: true,  useUnifiedTopology: true  } ).then(()=>{app.listen(PORT,()=>{
    console.log(`Listening at ${PORT}`)
})})
const cors = require('cors');
const cookieParser = require('cookie-parser')
var corsOptions = {
    origin: 'http://localhost:3000',
    credentials: true,
    optionsSuccessStatus: 200 // For legacy browser support
}
app.use(cors(corsOptions));

app.get("/add-post",(req,res)=>{
    const np=new Post({content:"Tejas",like:1000,caption:"wow"})
    np.save();
    res.send("POSTED")
})
app.get("/get-post",async(req,res)=>{
    const posts=await Post.find().then(res=>res);
    res.send(posts)
})

app.get("",(req,res)=>{
    res.send("hey")
})
