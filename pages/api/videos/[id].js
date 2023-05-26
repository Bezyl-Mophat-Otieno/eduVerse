import dbConnect from "@/utils/mongodb";
import Video from "@/models/Video";

export  default async function handler  (req,res){

   const {method,query:{id}} = req;
// database connection
   await dbConnect()

   
   // Update Video information
   if(method === "PUT"){
     try {

        const updatedVideo = await Video.findByIdAndUpdate(id,req.body,{new:true,runValidators:true})

        res.status(200).json(updatedVideo)
        
     } catch (error) {
        console.log("An error occured while updating")
        res.status(500).json(error.message)
     }
    
   }

   // getting single  Video using id
   if(method === "GET"){
    try {
        const video = await Video.findById(id);
        res.status(200).json(video)
        
    } catch (error) {
        console.log("an error occurred")
        res.status(error.statusCode).json(error.message)   
    }
    
   }
   

   // delete a Video from the database
      if(method === "DELETE"){
        try {

          await Video.findByIdAndDelete(id)
          res.status(200).json("Video deleted successfully")
        } catch (error) {
            res.status(error.statusCode).json(error.message)
            
        }
        
       }
    


}