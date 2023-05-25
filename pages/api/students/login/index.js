import Student from "@/models/Student";
import dbConnect from "@/utils/mongodb";
import jwt from 'jsonwebtoken'
import bcrypt from 'bcryptjs'
import cookie from 'cookie'






export default async function handler(req, res) {
    // Database connection
    const {method} = req;
    await dbConnect()
    if(method === "POST"){
        try {
            // find the student with the phone number  provided since they are unnique
            const student = await Student.findOne({phone:req.body.phone})
            if(!student) return res.status(404).json("Student with the phone number not found")
    
    
            // comparing the provided credentials and those stored in the db
            const isMatch = await bcrypt.compare(req.body.password, student.password)
            if(!isMatch) return res.status(400).json("Invalid credentials")
    
            // creating an access token to protect our student and store his session
            const access_token = jwt.sign({ id: student._id }, process.env.ACCESS_TOKEN_SECRET, { expiresIn: 60 })
    
            // Student password field shouldnot be sent back to the client 
            const {password , ...others} = await student._doc
    
            // store the access token in cookies 
            res.setHeader("Set-Cookie",cookie.serialize("token",process.env.ACCESS_TOKEN_SECRET,
            {maxAge:60*60,sameSite:"strict",path:"/"}))
            res.status(200).json({message:"success"})
   
            console.log("Login successful")
        } catch (error) {
            res.status(500).json(error.message)
        }



    }
}