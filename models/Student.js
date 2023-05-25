import mongoose from "mongoose";



const studentSchema = new mongoose.Schema({
    name : {
        type:String,
        required:[true,"please enter your Name"]
    },
    reg:{
        type:String,
        required:[true,"please enter your registration number"],
        unique:true
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
        default:"student",
    }


})

export default mongoose.models.Student || mongoose.model("Student", studentSchema);