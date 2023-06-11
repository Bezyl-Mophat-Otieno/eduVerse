import React from 'react'
import VideoCard from './VideoCard'

function Recommended() {
  return (
    <div>

        <section id="four" class="wrapper alt style1">
            <div class="inner">
            <h2 class="major">Recommended Tutorials from Students and Tutors from all walks of expertise</h2>
                <p>EduVerse serves as a comprehensive platform for both students and tutors to upload and share tutorials from different topics and expertise. We believe that knowledge should be accessible and shared freely, and our platform enables users to contribute to the educational community by uploading their tutorials, study materials, and educational resources. Whether you are a student who wants to share a helpful study guide or a tutor who wishes to showcase your expertise through video tutorials, eduVerse provides a space for you to inspire and empower others with your knowledge.</p>                <section class="features">
           <VideoCard/>
           <VideoCard/>
           <VideoCard/>
           <VideoCard/>
           <VideoCard/>
           <VideoCard/>
           <VideoCard/>
           <VideoCard/>
           <VideoCard/>
                </section>
                <ul class="actions">
                    <li><a href="#" class="button">Browse All</a></li>
                </ul>
            </div>
        </section>

      
    </div>
  )
}

export default Recommended
