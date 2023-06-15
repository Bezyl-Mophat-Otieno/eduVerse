import dbConnect from "@/utils/mongodb";
import Course from "@/models/Course";

export  default async function handler  (req,res){

   const {method,query:{id}} = req;
// database connection
   await dbConnect()

   


   if(method === "GET"){
    try {
        // Get all the publications 
        const course = await Course.findById(id)
        const publications = course.publications
        res.status(200).json(publications)
    } catch (error) {
        console.log(error.message)
        res.status(error.statusCode).json(error.message)   
    }
    
   }
   

    


}