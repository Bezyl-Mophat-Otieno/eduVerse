import dbConnect from "@/utils/mongodb";
import Course from "@/models/Course";

export  default async function handler  (req,res){

   const {method,query:{id}} = req;
// database connection
   await dbConnect()



   // getting   Courses using by tutor id 
   if(method === "GET"){
    try {
        const course = await Course.find({tutor:id});
        res.status(200).json(course)
        
    } catch (error) {
        console.log("an error occurred")
        res.status(error.statusCode).json(error.message)   
    }
    
   }
   

    


}