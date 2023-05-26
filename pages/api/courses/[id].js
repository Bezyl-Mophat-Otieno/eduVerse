import dbConnect from "@/utils/mongodb";
import Course from "@/models/Course";

export  default async function handler  (req,res){

   const {method,query:{id}} = req;
// database connection
   await dbConnect()

   
   // Update student information
   if(method === "PUT"){
     try {

        const updatedCourse = await Course.findByIdAndUpdate(id,req.body,{new:true,runValidators:true})

        res.status(200).json(updatedCourse)
        
     } catch (error) {
        console.log("An error occured while updating")
        res.status(500).json(error.message)
     }
    
   }

   // getting single  Course using id
   if(method === "GET"){
    try {
        const course = await Course.findById(id);
        res.status(200).json(course)
        
    } catch (error) {
        console.log("an error occurred")
        res.status(error.statusCode).json(error.message)   
    }
    
   }
   

   // delete a course from the database
      if(method === "DELETE"){
        try {

          await Course.findByIdAndDelete(id)
          res.status(200).json("Course deleted successfully")
        } catch (error) {
            res.status(error.statusCode).json(error.message)
            
        }
        
       }
    


}