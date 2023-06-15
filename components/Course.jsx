import React from 'react'
import Image from 'next/image'
import imageSource from '../public/images/expertise.jpg'
import TutorialsDropDown from './TutorialsDropDown'
import NotesDropDown from './NotesDropDown'
import CourseUpdateDropDown from './CourseUpdateDropDown'
import Link from 'next/link'
import MoreBtn from './MoreBtn'

function Course({course}) {
  return (

    
<>
<article>
    <Link href={`/dashboard/tutor/courses/course/${course._id}`} class="image"><Image src={imageSource} width={300} height={300} alt="" /></Link>
    <h3 class="major">{course.title}</h3>
    <p>{course.desc}</p>

</article>
</>
      
  )
}

export default Course
