import NotesCard from '@/components/NotesCard'
import React from 'react'
import TutorDashNav from '@/components/TutorDashNav'
import { useSelector } from 'react-redux'
import {useState} from 'react'
import AddCourse from '@/components/AddCourse'
import axios from 'axios'

function index({publications,course}) {
  const {currentUser} = useSelector(state=>state.user)
  const [closeAddCourseModal , setCloseAddCourseModal] = useState(true)
 

  
  return (
    <div>
        { !close && <AddCourse user={currentUser} setCloseAddCourseModal={setCloseAddCourseModal}/>} 
        <TutorDashNav setCloseAddCourseModal={setCloseAddCourseModal} user={currentUser}/>
        <section id="four" class="wrapper alt style1">
            <div class="inner">
            <h2 class="major">{course.title}</h2>
                <section class="features">

                {
                  publications.map((publication)=>(
                    <NotesCard course={course} publication={publication}/>
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

export default index

export const getServerSideProps = async ({params}) => {

  try {
      const res = await axios.get(`http://localhost:3000/api/courses/publications/${params.id}`)
      const res1 = await axios.get(`http://localhost:3000/api/courses/${params.id}`)
      return {
        props:{
          publications:await res.data,
          course:await res1.data,
        }
      }
      
  } catch (error) {
      console.log(error.message)
      
  }



}