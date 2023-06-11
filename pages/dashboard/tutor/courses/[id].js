import React from 'react'
import CourseNav from '@/components/CourseNav'
import axios from 'axios'

function CourseDetails({course , tutor}) {
    console.log(course)
  return (
    <div>
    <CourseNav tutor={tutor}/>

    
    
      
    </div>
  )
}

export default CourseDetails

export const getServerSideProps = async ({params}) => {

    try {
        const res = await axios.get(`http://localhost:3000/api/courses/${params.id}`)
        const tutorId = res.data.tutor
        // finding a tutor by the id in the course 
        const res2 = await axios.get(`http://localhost:3000/api/tutors/${tutorId}`)


        return {
          props:{
            course:await res.data,
            tutor:res2.data
          }
        }
        
    } catch (error) {
        console.log(error.message)
        
    }

  
  
  }
