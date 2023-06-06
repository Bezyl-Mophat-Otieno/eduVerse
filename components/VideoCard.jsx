import React from 'react'
import Image from 'next/image'
import imageSource from '../public/images/1:1.jpg'

function VideoCard() {
  return (
 <div class="card" style={{width: "20rem"}}>
  <Image src={imageSource} width={300} height={300}/>
  <div class="card-body">
    <h5 class="card-title">Card title</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
</div>
  )
}

export default VideoCard
