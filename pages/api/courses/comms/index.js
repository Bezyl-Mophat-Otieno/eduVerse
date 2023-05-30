// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import Communication from "@/models/Communication";
import dbConnect from "@/utils/mongodb";
import Course from "@/models/Course";
// import  AfricasTalking from  "africastalking"

//TODO:install africastalking for sms 

export default async function handler(req, res) {

    const {method} = req;
    // Creating a connection
    await dbConnect();
   //Add a communication message to the database
    if(method === "POST"){

        // Set app credentials
// const credentials = {
//     apiKey: process.env.AFRICASTALKING_APIKEY,
//     username: process.env.USERNAME,
//   }
  
//   //Initialize the SDK
//   AfricasTalking(credentials)
  
//   //Get the SMS service
//   const sms = AfricasTalking.SMS


// // Function that sends the SMS message
//   const  sendMessage = async(studentNumber, message)=> {
//     let errors = []
//     const options = {
//         //set the numbers you want to send to international format
//         to: studentNumber,
//         // Set your message
//         message: message,
//         // Set your shortcode or senderID
//         from: 'eduVerse'
//     }
//     return await sms.send(options)
//   } 
  


// On Communicatio creation we send a message to the phone numbers registered per course 
        try {
            const {course,content} = req.body

            const comm = await Communication.create(req.body)
            const registeredPhoneNumbers = (await Course.findById(course)).students
            registeredPhoneNumbers.forEach((phoneNumber)=>{
                
                // sendMessage(phoneNumber,content)
                console.log(phoneNumber)
            })
            console.log("communication made successfully")
            res.status(201).json(comm)
            
        } catch (error) {
            res.status(500).json(error.message)
            
        }

    }

    // Fetch all the communications made about a course
    if(method === 'GET'){
        try {
             const comms= await Communication.find();
             res.status(200).json(comms);
        } catch (error) {
            res.status(500).json(error.message);
            
        }
    }

  }
  