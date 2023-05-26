import mongoose from "mongoose";
//TODO:Check on how to add timestamps to Mongo

// 0 - represents "delivered" , 1 - represents - "viewed"

const commsSchema = new mongoose.Schema({
    course:{
        type:String,
        required:[true,"Course Communication must be associated with a Course "]
    },
    "message":{
        type:String,
        required:[true,"Message must be provided"]
    },

    "status":{
        type:Number,
        default:0
    }

},{timestamps:true}
)

export default mongoose.models.Communication || mongoose.model("Communication",commsSchema)