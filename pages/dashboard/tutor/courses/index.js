import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import imageSource from '../../../../public/images/expertise.jpg'
import Course from '@/components/Course'
import axios from 'axios'
function index({courseList}) {
  return (
    <div>

        <section id="four" class="wrapper alt style1">
            <div class="inner">
                <h2 class="major">Courses Registered</h2>
                <section class="features">
                {
                  courseList.map((course)=>(
                    <Course course={course}/>
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

export const getServerSideProps = async ()=>{

  try {
    const res = await axios.get("http://localhost:3000/api/courses")
    console.log(res)

    return {
      props: {
         courseList: await res.data
      }
    }
  } catch (error) {
    console.log(error.message)
  }
}