import mongoose  from "mongoose";

const messageSchema = new mongoose.Schema({
    senderID:{
        type: mongoose.Schema.Types.ObjectId,
        ref : "User",
        required: True
    },
    reciverID:{
        type: mongoose.Schema.Types.ObjectId,
        ref : "User",
        required: True
    },
    message:{
        type: String,
        required : True
    }
} , {timestamps:true})

const Message = mongoose.model("Messsage", messageSchema)

export default Message