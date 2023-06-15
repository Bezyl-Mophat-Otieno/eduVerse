import dbConnect from "@/utils/mongodb";
import Course from "@/models/Course";

export  default async function handler  (req,res){

   const {method} = req;
// database connection
   await dbConnect()

   


   // Adding more turials to a course 
   if(method === "POST"){
    try {
  // I will pass the courseid  in the req.body
  const {id} = req.body

        await Course.findByIdAndUpdate(id,{
            $push:{tutorials:req.body.tutorials}
        })
        res.status(200).json("Tutorial successfully added")
    } catch (error) {
        console.log(error.message)
        res.status(error.statusCode).json(error.message)   
    }
    
   }
   

    


}