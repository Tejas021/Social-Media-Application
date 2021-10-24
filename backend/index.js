
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
const conversationRoutes=require("./routes/conversationRoutes")
const messageRoutes=require("./routes/messageRoutes.js")
const userRoutes=require("./routes/userRoutes.js")
const commentRoutes = require('./routes/commentRoutes')
const roomRoutes = require('./routes/roomRoutes')



//TESTING COOKIES
app.get("/set-cookies",(req,res)=>{
    res.cookie("name","TEjas")
    res.send("hi")
})
app.get('/get-cookies', (req, res) => {
    const cookies = req.cookies;
    console.log(req.cookies)
    
    res.json(cookies);
})

//USING ROUTES

app.use(authRoutes);
app.use(postRoutes)
app.use(conversationRoutes)
app.use(messageRoutes)
app.use(userRoutes)
app.use(commentRoutes)
app.use(roomRoutes)

app.get("",(req,res)=>{
    res.send("home")
})