const Conversation =require("../models/Conversation")

module.exports.postConversation = async (req,res)=>{
    // console.log(req.body)
    const newConversation = new Conversation(
        {
            members:[req.body.senderId,req.body.receiverId],
        }
    )

    try{
        console.log(newConversation.members)
        const savedConversation = await newConversation.save()
        res.status(200).json(savedConversation)
    } catch(err){
        res.status(500).json(err)
    }
}
   

module.exports.getConversation = async (req,res)=>{
    try{
        const conversation = await Conversation.find(
            {
                    members:{$in:[req.params.userId]},
            }
        )
        res.status(200).json(conversation)
    } catch(err){
        res.status(500).json(err)
    }

}