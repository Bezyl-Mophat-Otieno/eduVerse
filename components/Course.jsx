import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import imageSource from '../public/images/expertise.jpg'

function Course() {
  return (

<article>
    <a href="#" class="image"><Image src={imageSource} width={300} height={300} alt="" /></a>
    <h3 class="major">Sed feugiat lorem</h3>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing vehicula id nulla dignissim dapibus ultrices.</p>
    <a href="#" class="special">Learn more</a>
</article>
      
  )
}

export default Course
