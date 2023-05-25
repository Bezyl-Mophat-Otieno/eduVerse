import mongoose from "mongoose";
const tutorSchema = new mongoose.Schema({
    name : {
        type:String,
        required:[true,"please enter your Name"]
    },
    phone:{
        type:String,
        required:[true,"please enter your phone number"],
        unique:true
    },
    password:{
        type:String,
        required:[true,"please enter your Enter Password"]
    },
    course:{
        type:[String],
        default:[],
    },
    role:{
        type:String,
        default:"tutor",
    }


})

export default mongoose.models.Tutor || mongoose.model("Tutor", tutorSchema);