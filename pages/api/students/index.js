// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import dbConnect from "../../../utils/mongodb"
import Student from "../../../models/Student";

export default async function handler(req, res) {

    const {method} = req;
    // Creating a connection
    await dbConnect();

   //Add a student to the database
    if(method === "POST"){

        try {
            const requestBody = req.body;
            const student = await Student.create(requestBody);
            res.status(201).json("Created", student);
            
        } catch (error) {
            console.log("error creating student")
            res.status(error.status).json(error.message);
        }
    }

    // Fetch all the students
    if(method === 'GET'){
        try {
             const students = await Student.find();
             res.status(200).json(students);
        } catch (error) {
            res.status(error.status).json(error.message);
            
        }
    }

  }
  