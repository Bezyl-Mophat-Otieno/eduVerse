import React from 'react'
import Course from '@/components/Course';
import axios from 'axios'
import CourseNav from '@/components/CourseNav';
import { useSelector } from 'react-redux';
import { TutorDashNav } from '@/components/TutorDashNav';
import Link from 'next/link';
import Recommended from '@/components/Recommended';
function CourseDetails ({course , tutorials}) {
  const {currentUser} = useSelector(state=>state.user)
  return (
    <div>
    
    <CourseNav courseId={course._id} user={currentUser}/>
    <section id="four" class="wrapper alt style1">
        <div class="inner">
            <h2 class="major">{course.title}</h2>
            <p>{course.content}</p>


        <ul class="actions">
        <li><Link className="button btn btn-outline-success" href={`/dashboard/tutor/courses/course/notes/${course._id}`} >View Publications</Link></li>
        </ul>
        </div>
    </section>
  
    <Recommended data={tutorials} courseId={course._id} title={"Videos Tutorials Relevant to this Course"}/>
</div>
  )
}

export default  CourseDetails;


export const getServerSideProps = async ({params}) => {

    try {
        const res = await axios.get(`http://localhost:3000/api/courses/${params.id}`)
        return {
          props:{
            course:await res.data,
            tutorials:res.data.tutorials
          }
        }
        
    } catch (error) {
        console.log(error.message)
        
    }

  
  
  }
