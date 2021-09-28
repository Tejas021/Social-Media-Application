const User =require("../models/User")

module.exports.user = async (req,res)=>{
    const userId = req.query.userId
    
    try{

        const user = await User.findById(userId)
        res.status(200).json(user)
    } catch(err){
        console.log("error")
        res.status(500).json(err)
    }

}