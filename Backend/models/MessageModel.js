import mongoose  from "mongoose";

const messageSchema = new mongoose.Schema({
    senderID:{
        type: mongoose.Schema.Types.ObjectId,
        ref : "User",
        required: true
    },
    reciverID:{
        type: mongoose.Schema.Types.ObjectId,
        ref : "User",
        required: true
    },
    message:{
        type: String,
        required : true
    }
} , {timestamps:true})

const Message = mongoose.model("Messsage", messageSchema)

export default Message