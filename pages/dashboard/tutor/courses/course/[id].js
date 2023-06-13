import React from 'react'
import Course from '@/components/Course';
import axios from 'axios'
import CourseNav from '@/components/CourseNav';
import { useSelector } from 'react-redux';
function CourseDetails ({course}) {
  const {currentUser} = useSelector(state=>state.user)
  return (
    <div>
    <CourseNav user={currentUser}/>
    <section id="four" class="wrapper alt style1">
        <div class="inner">
            <h2 class="major">{course.title}</h2>
            <p>{course.content}</p>

        <ul class="actions">
                <li><a href="#" class="button btn btn-outline-success">Edit</a></li>
                <li><a href="#" class="button btn btn-outline-danger">Delete</a></li>
        </ul>
        </div>
    </section>
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
          }
        }
        
    } catch (error) {
        console.log(error.message)
        
    }

  
  
  }
