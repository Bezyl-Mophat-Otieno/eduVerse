import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

function Services() {
  return (
    <div>
       
       <section id="one" class="wrapper spotlight style1">
            <div class="inner">
                <Link href="#" class="image"><Image width={300} height={300} src="/images/updates.jpg" alt="" /></Link>
                <div class="content">
                <h2 class="major mb-5 text-center text-primary btn-lg-emphasis ">What we offer here at eduVerse</h2>
                    <h2 class="major">Offline Realtime Class Updates</h2>
                    <p>One of the standout features of eduVerse is its ability to provide offline real-time class updates. We understand the challenges students face when it comes to missing out on important information due to various reasons such as poor internet connectivity or unexpected interruptions. That's why we have developed a robust system that allows students to receive real-time updates on class schedules, announcements, assignments, and any other important information, even when they are offline. With eduVerse, students will never have to worry about falling behind or missing crucial updates again.</p>
                    <a href="#" class="btn btn-outline-primary btn-lg">Learn more...</a>
                </div>
            </div>
        </section>

        <section id="two" class="wrapper alt spotlight style2">
            <div class="inner">
                <a href="#" class="image"><Image width={300} height={300} src="/images/anonymous.jpg" alt="" /></a>
                <div class="content">
                    <h2 class="major"> Anonymous Suggestion box to the administration </h2>
                    <p>In addition to its array of educational features, eduVerse recognizes the importance of fostering open communication and providing a platform for feedback and improvement. That's why we have implemented an anonymous suggestion box specifically designed for students and tutors to express their concerns, complaints, or suggestions to the head of departments within the organization.</p>
                    <a href="#" class="btn  btn-outline-primary btn-lg ">Learn more...</a>
                </div>
            </div>
        </section>

        <section id="two" class="wrapper alt spotlight style2">
            <div class="inner">
                <a href="#" class="image"><Image width={300} height={300} src="/images/1:1.jpg" alt="" /></a>
                <div class="content">
                    <h2 class="major"> 1:1 Tutor , Student Interraction</h2>
                    <p>eduVerse also fosters student interaction and collaboration. We understand the value of peer-to-peer learning and the importance of building a strong educational community. Through our interactive features, students can connect with fellow learners, participate in group discussions, ask questions, and exchange ideas. This collaborative environment not only enhances understanding but also creates a sense of belonging and motivation, making learning a more enjoyable and rewarding experience.</p>
                    <a href="#" class="btn btn-outline-primary btn-lg">Learn more...</a>
                </div>
            </div>
        </section>

        <section id="three" class="wrapper spotlight style3">
            <div class="inner">
                <a href="#" class="image"><Image width={300} height={300} src="/images/happy-learning.jpg" alt="" /></a>
                <div class="content">
                    <h2 class="major">Free Learning Resources from Fellow Students and Tutors </h2>
                    <p>Furthermore, eduVerse serves as a comprehensive platform for both students and tutors to upload and share tutorials from different topics and expertise. We believe that knowledge should be accessible and shared freely, and our platform enables users to contribute to the educational community by uploading their tutorials, study materials, and educational resources. Whether you are a student who wants to share a helpful study guide or a tutor who wishes to showcase your expertise through video tutorials, eduVerse provides a space for you to inspire and empower others with your knowledge.</p>
                    <Link href="#" class="btn btn-outline-primary btn-lg">Learn more...</Link>
                </div>
            </div>
        </section>

    </div>
  )
}

export default Services
