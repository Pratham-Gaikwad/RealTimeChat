import Convertiation from "../models/convertiationModel.js"
import Message from "../models/MessageModel.js"

export const sendMessage = async(req , res )=>{
    try {
        const {message} = req.body
        const {id:reciverId} = req.params
        const senderId = req.userId

        let convertiations = await Convertiation.findOne({
            participant:{$all:[senderId , reciverId]}
        })

        if (!convertiations) {

            convertiations = await Convertiation.create({
                participant:[senderId , reciverId]
            })
        }

        const newMessage = new Message({
            senderID : senderId,
            reciverID: reciverId,
            message : message
        })

        if (newMessage) {
            convertiations.messages.push(newMessage._id)
        }

        res.status(200).json(newMessage)

    } catch (error) {
        console.log(error.message);
        res.status(500).json({error:"Internal server error"})
    }
}

