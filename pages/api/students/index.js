// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import dbConnect from "../../../utils/mongodb"
import Student from "../../../models/Student";
import { Student } from '@/models/Student';
import bcrypt from 'bcryptjs'


//TODO:Install bcryptjs library
//Todo: Handle form validation in the frontend ie password should be equal to Confirm password

export default async function handler(req, res) {

    const {method} = req;
    // Creating a connection
    await dbConnect();

   //Add a student to the database
   if(method === "POST"){

    const {password} = req.body;
        try {
            // generating the hash of the password
                const salt = bcrypt.genSaltSync(10);
                const hashedPassword = bcrypt.hashSync(password, salt);
               // creating the user object that will be used for authentication
               const student = await Student.create({
                   ...req.body,password: hashedPassword
               })
               return res.status(200).send("Student created successfully");
            
            } catch (error) {
            res.status(error.status).json(error.message)
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
  