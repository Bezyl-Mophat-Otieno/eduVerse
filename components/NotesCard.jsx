import React from 'react'
import imageSource from '../public/images/Untitled.jpeg'
import Link from 'next/link'
import Image from 'next/image'

function NotesCard({publication,course}) {
  return (
<article>
    <Link href={publication.url} class="image"><Image src={imageSource} width={300} style={{objectFit:"contain"}} height={300} alt="" /></Link>
    <h3 class="major">{publication.title}</h3>
    <ul class="actions">
                <li><a href={publication.url} class="button btn btn-outline-success">Download</a></li>
                <li><Link className="button btn btn-outline-success" href={`/dashboard/tutor/courses/course/${course._id}`} >Back</Link></li>
        </ul>
</article>
  )
}
export default NotesCard
