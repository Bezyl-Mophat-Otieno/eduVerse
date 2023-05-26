// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import Communication from "@/models/Communication";
import dbConnect from "@/utils/mongodb";


export default async function handler(req, res) {

    const {method} = req;
    // Creating a connection
    await dbConnect();
   //Add a communication message to the database
    if(method === "POST"){

        try {

            const comm = await Communication.create(req.body)
            console.log("communication made successfully")
            res.status(201).json(comm)
            
        } catch (error) {
            res.status(500).json(error.message)
            
        }

    }

    // Fetch all the communications made about a course
    if(method === 'GET'){
        try {
             const comms= await Communication.find();
             res.status(200).json(comms);
        } catch (error) {
            res.status(500).json(error.message);
            
        }
    }

  }
  