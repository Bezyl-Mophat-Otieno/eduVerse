import Tutor from "@/models/Tutor";
import dbConnect from "@/utils/mongodb";
import jwt from 'jsonwebtoken'
import cookie from 'cookie'
import bcrypt from 'bcryptjs'

export default async function handler(req, res) {
    // Database connection
    const {method} = req;
    await dbConnect()
    if(method === "POST"){
        try {
            // find the Tutor with the phone number  provided since they are unnique
            const tutor = await Tutor.findOne({phone:req.body.phone})
            if(!tutor) return res.status(404).json("Tutor with the phone number not found")
    
    
            // comparing the provided credentials and those stored in the db
            const isMatch = await bcrypt.compare(req.body.password, tutor.password)
            if(!isMatch) return res.status(400).json("Invalid credentials")
    
            // creating an access token to protect our user 
            const access_token = jwt.sign({ id: tutor._id }, process.env.ACCESS_TOKEN_SECRET, { expiresIn: 60 })
    
            // Tutor's password field shouldnot be sent back to the client 
            const {password , ...others} = await tutor._doc
    
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