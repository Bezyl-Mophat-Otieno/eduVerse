// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import dbConnect from "../../../utils/mongodb"
import Course from '../../../models/Course'


export default async function handler(req, res) {

    const {method} = req;
    // Creating a connection
    await dbConnect();
   //Add a Course to the database
    if(method === "POST"){

        try {

            const course = await Course.create(req.body)
            console.log("course added successfully")
            res.status(201).json(course)
            
        } catch (error) {
            res.status(500).json(error.message)
            
        }

    }

    // Fetch all the students
    if(method === 'GET'){
        try {
             const courses = await Course.find();
             res.status(200).json(courses);
        } catch (error) {
            res.status(500).json(error.message);
            
        }
    }

  }
  