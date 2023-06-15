import React from 'react'
import CourseNav from '@/components/CourseNav'
import axios from 'axios'
import Course from '@/components/Course'
import { useSelector } from 'react-redux'
import TutorDashNav from '@/components/TutorDashNav'
import AddCourse from '@/components/AddCourse'
import { useState } from 'react'

function CourseDetails({courses}) {
  const {currentUser} = useSelector(state=>state.user)
  const[closeAddCourseModal, setCloseAddCourseModal ]=useState(true);

  return (
    <div>
        <TutorDashNav user={currentUser} setCloseAddCourseModal={setCloseAddCourseModal} />
    { !closeAddCourseModal && <AddCourse user={currentUser} setCloseAddCourseModal={setCloseAddCourseModal}/>}

        <section id="four" class="wrapper alt style1">
            <div class="inner">
                <h2 class="major">My Courses</h2>
                <section class="features">
                {
                  courses.map((course)=>(
                    <Course  course={course}/>
                  ))
                }
                </section>
                <ul class="actions">
                    <li><a href="#" class="button">Browse All</a></li>
                </ul>
            </div>
        </section>

      
    </div>
  )
}

export default CourseDetails

export const getServerSideProps = async ({params}) => {

    try {
        const res = await axios.get(`http://localhost:3000/api/courses/tutor/${params.id}`)
        return {
          props:{
            courses:await res.data,
          }
        }
        
    } catch (error) {
        console.log(error.message)
        
    }

  
  
  }
