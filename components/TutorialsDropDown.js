import React from 'react'
import Link from 'next/link'

function TutorialsDropDown() {
  return (
    <div>

        <li className="dropdown list-unstyled btn btn-outline-secondary mb-4">
            <Link className="dropdown-toggle" href="#" id="dropDown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Tutorials
            </Link>
            <ul className="dropdown-menu text-decoration-none" aria-labelledby="dropDown">
            <li><Link className="dropdown-item" href="#" onClick={()=>{}}>Add Tutorial</Link></li>
            
            <li><Link className="dropdown-item" href={`#`} >View  Tutorials</Link></li>
            </ul>
        </li>
      
    </div>
  )
}

export default TutorialsDropDown
