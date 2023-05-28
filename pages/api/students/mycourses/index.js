import Student from "@/models/Student";
import Course from "@/models/Course";


export default async function handler (req , res ){
    const {method} = req;
    const {id} = req.body ;

    if(method === "POST"){

        try {
            const courseRegistered = [];
        const student = await Student.findById(id);
        const myCourses = student.course;

        myCourses.forEach(async(courseId)=>{
         courseRegistered.push(await Course.findById(courseId));
        })
        res.status(200).json(myCourses)
    } catch (error) {
        
        res.status(500).json(error.message)
            
        }
    


    }
}