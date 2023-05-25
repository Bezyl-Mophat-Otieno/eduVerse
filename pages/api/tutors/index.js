// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import dbConnect from "../../../utils/mongodb"
import Tutor from "../../../models/Tutor";

export default async function handler(req, res) {

    const {method} = req;
    // Creating a connection
    await dbConnect();

   //Add a student to the database
    if(method === "POST"){

        try {
            const requestBody = req.body;
            const tutor = await Tutor.create(requestBody);
            res.status(201).json(tutor);
            
        } catch (error) {
            console.log("error creating Tutor")
            res.status(error.status).json(error.message);
        }
    }

    // Fetch all the students
    if(method === 'GET'){
        try {
             const tutors = await Tutor.find();
             res.status(200).json(tutors);
        } catch (error) {
            res.status(error.status).json(error.message);
            
        }
    }

  }
  