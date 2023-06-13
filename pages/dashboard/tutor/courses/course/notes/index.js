import NotesCard from '@/components/NotesCard'
import React from 'react'

function index() {
  return (
    <div>

        <section id="four" class="wrapper alt style1">
            <div class="inner">
            <h2 class="major">Course Name</h2>
                <section class="features">
           <NotesCard/>
           <NotesCard/>
           <NotesCard/>
           <NotesCard/>
                </section>
                <ul class="actions">
                    <li><a href="#" class="button">Browse All</a></li>
                </ul>
            </div>
        </section>

      
    </div>
  )
}

export default index
