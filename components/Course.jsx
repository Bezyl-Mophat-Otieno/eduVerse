import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import imageSource from '../public/images/expertise.jpg'

function Course({course}) {
  return (

    

<article>
    <a href="#" class="image"><Image src={imageSource} width={300} height={300} alt="" /></a>
    <h3 class="major">{course.title}</h3>
    <p>{course.desc}</p>
<Link href={`/dashboard/tutor/courses/${course._id}`}>
    <span  class="btn btn-outline-secondary mb-5">Learn more</span>
</Link> 
</article>
      
  )
}

export default Course
