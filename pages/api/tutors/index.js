// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import dbConnect from "../../../utils/mongodb"
import Tutor from "../../../models/Tutor";
import bcrypt from 'bcryptjs'
//TODO : install bcryptjs library
//TODO : handle form validation from the frontend ie password === confirmPassword

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
               const tutor = await Tutor.create({
                   ...req.body,password: hashedPassword
               })
               return res.status(200).Json({"Tutor":tutor});
            
            } catch (error) {
            res.status(error.status).json(error.message)
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
  