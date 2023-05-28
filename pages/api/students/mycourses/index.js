import Student from "@/models/Student";
import Course from "@/models/Course";


export default async function handler (req , res ){
    const {method} = req;
    const {id} = req.body ;

    if(method === "POST"){

        try {

            const student = await  Student.findById(id);
            console.log(Student)
            const mycourses = student.course;
            mycourses.forEach(async (course) =>{

                return console.log((await Course.findById(course)).title) ;
            },)
        } catch (error) {
            
            res.status(500).json(error.message)
            
        }
    


    }
}