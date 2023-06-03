// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import dbConnect from "../../../utils/mongodb"
import bcrypt from 'bcryptjs'
import Tutor from '../../../models/Tutor'
export default async function handler(req, res) {

//TODO: Install Yup for telephone validation


    const {method} = req;
    // Creating a connection
    await dbConnect();
   //Add a Tutor to the database
    if(method === "POST"){

        const {password} = req.body;
        try {
            // generating the hash of the password
                const salt = bcrypt.genSaltSync(10);
                const hashedPassword = bcrypt.hashSync(password, salt);
                // creating the user object that will be used for authentication
                const newReqBody = {...req.body,password:hashedPassword}
                console.log(newReqBody)
                const tutor = await Tutor.create(newReqBody)

                res.status(201).json("Tutor created successfully")


            
            } catch (error) {
            res.status(error.status).json("Something went wrong")
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
  