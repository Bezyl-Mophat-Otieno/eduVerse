import React from 'react'
import VideoCard from './VideoCard'
import Link from 'next/link'

function Recommended({data,title,courseId}) {
  return (
    <div>

        <section id="four" class="wrapper alt style1">
            <div class="inner">
            <h2 class="major">{title}</h2>
                <p>EduVerse serves as a comprehensive platform for both students and tutors to upload and share tutorials from different topics and expertise. We believe that knowledge should be accessible and shared freely, and our platform enables users to contribute to the educational community by uploading their tutorials, study materials, and educational resources. Whether you are a student who wants to share a helpful study guide or a tutor who wishes to showcase your expertise through video tutorials, eduVerse provides a space for you to inspire and empower others with your knowledge.</p>                <section class="features">
           {/* I want to cut the list of videos to only 5  */}

       

            {
             
              data.map(video=>(
              <VideoCard video={video}/>
              )) 

            }

                </section>
                <ul class="actions">
                    <li><Link href={`http://localhost:3000/dashboard/tutor/courses/course/video-tutorials/${courseId}`} class="button">Browse All</Link></li>
                </ul>
            </div>
        </section>

      
    </div>
  )
}

export default Recommended
