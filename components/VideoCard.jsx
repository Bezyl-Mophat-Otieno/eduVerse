import React from 'react'
import Image from 'next/image'

function VideoCard({video}) {
  return (
<article>
    <div href="#" class="videoWrapper">
    <video src={video.url} width={"auto"} height={300} alt="" controls />
    </div>
    <h3 class="major">{video.title}</h3>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing vehicula id nulla dignissim dapibus ultrices.</p>
    <a href="#" class="special">{video.language}</a>
</article>
  )
}

export default VideoCard

const styles = {

}
