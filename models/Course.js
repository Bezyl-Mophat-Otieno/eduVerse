import mongoose from "mongoose";
const courseSchema = new mongoose.Schema({
    tutor:{
        type:String,
        // required:[true,"please provide tutor's Id"],
    },
    title : {
        type:String,
        required:[true,"please add the title"],
        unique:true

    },
    desc:{
        type:String,
        required:[true,"please provide course description"],
    },
    content:{
        type:[String],
    },
    tutorials:{
        type:[String],

    },
    students:{
        type:[String]
    },
    publications:{
        type:[{title:{type:String,required:true},fileUrl:{type:String,required:true}}]
    }
})

export default mongoose.models.Course || mongoose.model("Course", courseSchema);