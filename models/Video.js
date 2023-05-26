import mongoose from "mongoose";

const videoSchema = new mongoose.Schema({
    uploader: {
        type:String,
        required:[true,"Video uploader must be provided"]

    },
    title:{
        type:String,
        required:[true,"Video title must be provided"]
    },
    Language:{
        type:String,
        required:[true,"Language required"]
    },
    desc:{
        type:String,
        required:[true,"Description required"]
    },
    url:{
        type:String,
        required:[true,"Video url required"]
    },
    views:{
        type:Number,
        default:0
    },
    upvotes:{
        type:Number,
        default:0
    },
    downvotes:{
        type:Number,
        default:0
    }

},{timestamps:true}
)

export default mongoose.models.Video || mongoose.model("Video",videoSchema)