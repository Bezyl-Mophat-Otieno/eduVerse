import Student from "@/models/Student";
import Course from "@/models/Course";
export default async function handler (req,res){
    const {method,query:{id}} = req;
    // Course Id will be passed in the Request body 
    // Student id will be passed in the Request body
    // ie {CourseId:"hsduyfhvsyhhsbggs122",StudentId:"jhsdbhgfsu277329hd2n"}

    if (method === "PUT"){
        const {courseId,studentId} = req.body

        try {

            const registeredCourse = await Student.findByIdAndUpdate(studentId,{
                $push:{course:courseId}
            },{new:true,runValidators:true})
            const student = studentId && await Student.findById(studentId)
            const registerdStudent = await Course.findByIdAndUpdate(courseId,{
                $push:{students: student.phone}
            },{new:true,runValidators:true})
            res.status(200).json([{registerdStudent},{registeredCourse}]);
            
        } catch (error) {
            res.status(500).json(error.message);
            
        }


        
        
    }

}