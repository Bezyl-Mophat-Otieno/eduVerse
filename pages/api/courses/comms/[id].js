import dbConnect from "@/utils/mongodb";
import Communication from "@/models/Communication";


export  default async function handler  (req,res){

   const {method,query:{id}} = req;
// database connection
   await dbConnect()

   
   // Update Communication information
   if(method === "PUT"){
     try {

        const updatedComms = await Communication.findByIdAndUpdate(id,req.body,{new:true,runValidators:true})

        res.status(200).json(updatedComms)
        
     } catch (error) {
        console.log("An error occured while updating")
        res.status(500).json(error.message)
     }
    
   }

   // getting single  Communcation using id
   if(method === "GET"){
    try {
        const comms = await Communication.findById(id);
        res.status(200).json(comms)
        
    } catch (error) {
        console.log("an error occurred")
        res.status(error.statusCode).json(error.message)   
    }
    
   }
   

   // delete a Communication from the database
      if(method === "DELETE"){
        try {

          await Communication.findByIdAndDelete(id)
          res.status(200).json("communication deleted successfully")
        } catch (error) {
            res.status(error.statusCode).json(error.message)
            
        }
        
       }
    


}