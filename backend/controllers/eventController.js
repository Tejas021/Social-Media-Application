
const Event = require("../models/Event")

module.exports.getEvents=async(req,res)=>{
    const events=await Event.find()
// console.log(called)
res.status(200).send(events)
}
module.exports.postEvents=async(req,res)=>{

    const events=await Event.create({name:req.body.name,link:req.body.link,description:req.body.description}).then(res=>res)
// console.log(called)
res.status(200).send(events)
}