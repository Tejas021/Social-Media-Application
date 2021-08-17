
//IMPORTED PACKAGES
const express=require("express");
const mongoose = require("mongoose");
const cookieParser = require('cookie-parser');
const cors = require('cors');
const bodyParser = require('body-parser');

//DATABASE VARIABLE
const mongodb = "mongodb+srv://admin:admin123@cluster0.abkev.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"




const app=express() //creating an express application

let PORT =process.env.PORT||5000
mongoose.connect(mongodb,{useNewUrlParser: true,  useUnifiedTopology: true  } ).then(()=>{app.listen(PORT,()=>{
    console.log(`Listening at ${PORT}`)
})}) //connecting to the database



//MIDDLEWARE
var corsOptions = {
    origin: 'http://localhost:3000',
    credentials: true,
    optionsSuccessStatus: 200 // For legacy browser support
}
app.use(cors(corsOptions));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));




//IMPORTING ROUTES
const authRoutes= require("./routes/authRoutes.js")
const postRoutes=require("./routes/postRoutes.js")

//USING ROUTES

app.use(authRoutes);
app.use(postRoutes)

app.get("",(req,res)=>{
    res.send("home")
})