import React from 'react'
import Link from 'next/link'
import AddNotes from './AddNotes'
import { useState } from 'react'

function NotesDropDown({course}) {
  const [close,setClose] = useState(true)
  return (
    <div>
    { !close && <AddNotes courseId={course_id} setClose={setClose}/>}
       <li className="dropdown list-unstyled btn btn-outline-secondary mb-4">
            <Link className="dropdown-toggle" href="#" id="dropDown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Notes
            </Link>
            <ul className="dropdown-menu text-decoration-none" aria-labelledby="dropDown">
            <li><Link className="dropdown-item" href="#" onClick={()=>{setClose(false)}}>Add Notes</Link></li>
            
            <li><Link className="dropdown-item" href={`/dashboard/tutor/courses/course/notes`} >View Notes</Link></li>
            </ul>
        </li>
      
    </div>
  )
}

export default NotesDropDown
