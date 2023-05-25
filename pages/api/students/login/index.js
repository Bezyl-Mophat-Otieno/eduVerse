import Student from "@/models/Student";
import dbConnect from "@/utils/mongodb";




export default async function handler(req, res) {

    const {method} = req;
    if(method === "POST"){


        try {
            // find the student with the phone number  provided since they are unnique
            const student = await Student.findOne({phone:req.body.phone})
            if(!student) return res.status(404).json("Student with the phone number not found")
    
    
            // comparing the provided credentials and those stored in the db
            const isMatch = await bcrypt.compare(req.body.password, student.password)
            if(!isMatch) return res.status(400).json("Invalid credentials")
    
            // creating an access token to protect our user 
            const access_token = jwt.sign({ id: student._id }, process.env.ACCESS_TOKEN_SECRET, { expiresIn: 60 })
    
            // Student password field shouldnot be sent back to the client 
            const {password , ...others} = await student._doc
    
            // store the access token in cookies 
            res.cookie("access_token",access_token,{
                httpOnly:true,
            }).status(200).json(others)
            console.log("Login successful")
        } catch (error) {
            res.status(error.status).json(error.message)
        }



    }
}