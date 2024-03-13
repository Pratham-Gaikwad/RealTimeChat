import mongoose from "mongoose";

const MongoConnect = async(req ,res )=>{
    try {
        await mongoose.connect(process.env.MONGO_DB,)
        console.log("Connected to MongoDB");
    } catch (error) {
        console.log("Error connecting to MongoDB database",error.message);
    }
}

export default MongoConnect;