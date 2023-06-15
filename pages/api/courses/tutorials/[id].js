import dbConnect from "@/utils/mongodb";
import Course from "@/models/Course";

export  default async function handler  (req,res){

   const {method,query:{id}} = req;
// database connection
   await dbConnect()

   


   // getting video tutorials   by  the course id
   if(method === "GET"){
    try {
        const course = await Course.findById(id).limit(5);
        const videoTutorials = course.tutorials
        res.status(200).json(videoTutorials)
        
    } catch (error) {
        console.log(error.message)
        res.status(error.statusCode).json(error.message)   
    }
    
   }
   

    


}