import React from 'react'
import imageSource from '../public/images/Untitled.jpeg'
import Link from 'next/link'
import Image from 'next/image'

function NotesCard() {
  return (
<article>
    <Link href="#" class="image"><Image src={imageSource} width={300} style={{objectFit:"contain"}} height={300} alt="" /></Link>
    <h3 class="major">Pdf Title</h3>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing vehicula id nulla dignissim dapibus ultrices.</p>
    <ul class="actions">
                <li><a href="#" class="button btn btn-outline-success">Preview</a></li>
                <li><a href="#" class="button btn btn-outline-danger">Delete</a></li>
        </ul>
</article>
  )
}
export default NotesCard
