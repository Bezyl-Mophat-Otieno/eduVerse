// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import dbConnect from "@/utils/mongodb";
import Video from "@/models/Video";


export default async function handler(req, res) {

    const {method} = req;
    // Creating a connection
    await dbConnect();
   //Add a communication message to the database
    if(method === "POST"){

        try {

            const video = await Video.create(req.body)
            console.log("video uploaded successfully")
            res.status(201).json(video)
            
        } catch (error) {
            res.status(500).json(error.message)
            
        }

    }

    // Fetch all  Videos uploaded
    if(method === 'GET'){
        try {
             const videos= await Video.find();
             res.status(200).json(videos);
        } catch (error) {
            res.status(500).json(error.message);
            
        }
    }

  }
  