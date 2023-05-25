import Tutor from "@/models/Tutor";
import dbConnect from "@/utils/mongodb";

export  default async function handler  (req,res){

   const {method,query:{id}} = req;

   await dbConnect()

   
   // Update student information
   if(method === "PUT"){
     try {

        const updatedTutor = await Tutor.findByIdAndUpdate(id,req.body,{new:true,runValidators:true})

        res.status(200).json(updatedTutor)
        
     } catch (error) {
        res.status(error.status).json({message:error.message})
        console.log(error.message)
     }
    
   }

   // getting single  Student using id
   if(method === "GET"){
    try {
        const tutor = await Tutor.findById(id);
        res.status(200).json(tutor)
        
    } catch (error) {
        res.status(error.statusCode).json(error.message)   
    }
    
   }

   // delete an Student from the database
      if(method === "DELETE"){
        try {
            await Tutor.findByIdAndRemove(id)
            res.status(200).json("Tutor deleted successfully")
        } catch (error) {
            res.status(500).json("error occured")
            
        }
        
       }
    


}