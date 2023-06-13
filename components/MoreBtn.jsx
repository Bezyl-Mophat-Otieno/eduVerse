import React from 'react'
import Link from 'next/link'

function MoreBtn({course}) {
  return (
    <div>

        <div className="list-unstyled btn btn-outline-secondary mb-4">
            <Link className="" href={`/dashboard/tutor/courses/course/${course._id}`}  role="button" >
            Learn More...
            </Link>
        </div>
      
    </div>
  )
}

export default MoreBtn
