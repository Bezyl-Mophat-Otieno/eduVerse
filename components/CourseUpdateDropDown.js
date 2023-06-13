import React from 'react'
import Link from 'next/link'

function CourseUpdateDropDown() {
  return (
    <div>

        <li className="dropdown list-unstyled btn btn-outline-secondary mb-4">
            <Link className="dropdown-toggle" href="#" id="dropDown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Communique'
            </Link>
            <ul className="dropdown-menu text-decoration-none" aria-labelledby="dropDown">
            <li><Link className="dropdown-item" href="#" onClick={()=>{}}>Add Communication</Link></li>
            
            <li><Link className="dropdown-item" href={`#`} >View Communications</Link></li>
            </ul>
        </li>
      
    </div>
  )
}

export default CourseUpdateDropDown
