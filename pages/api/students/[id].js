import Student from "@/models/Student";
import dbConnect from "@/utils/mongodb";

export  default async function handler  (req,res){

   const {method,query:{id}} = req;

   await dbConnect()

   
   // Update student information
   if(method === "PUT"){
     try {

        const updatedStudent = await Student.findByIdAndUpdate(id,req.body,{new:true,runValidators:true})

        res.status(200).json(updatedStudent)
        
     } catch (error) {
        res.status(error.status).json({message:error.message})
        console.log(error.message)
     }
    
   }

   // getting single  Student using id
   if(method === "GET"){
    try {
        const student = await Student.findById(id);
        res.status(200).json(student)
        
    } catch (error) {
        res.status(error.statusCode).json(error.message)   
    }
    
   }

   // delete an Student from the database
      if(method === "DELETE"){


        try {

          await Student.findByIdAndDelete(id)
          res.status(200).json("Student deleted successfully")
        } catch (error) {
            res.status(error.statusCode).json(error.message)
            
        }
        
       }
    


}