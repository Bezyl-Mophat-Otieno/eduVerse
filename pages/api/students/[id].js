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

            const studentToBeDeleted = await Student.findById(id)

          if ( studentToBeDeleted ) {
              await studentToBeDeleted.remove()
              res.status(200).json({msg:"student deleted successfully from the database"})

          }else{
              res.status(404).json({msg:"Student with the above id not found"})

          }
            
        } catch (error) {
            res.status(error.statusCode).json(error.message)
            
        }
        
       }
    


}