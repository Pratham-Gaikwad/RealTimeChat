import mongoose from "mongoose";

const convertiationSchema = new mongoose.Schema(
    {participant:[
        {type:mongoose.Schema.Types.ObjectId,
            ref : "User"
        }
    ],
    messages:[{
        type : mongoose.Schema.Types.ObjectId,
        ref : "Message",
        default: []
    }
]
}, {timestamps:true})

const Convertiation = mongoose.model("Convertiation",convertiationSchema)

export default Convertiation