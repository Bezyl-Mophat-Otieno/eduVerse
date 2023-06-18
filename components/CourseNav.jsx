import React from 'react'
import { useRouter } from 'next/router'
import { logout } from '@/redux/userSlice'
import axios from 'axios'
import { useDispatch } from 'react-redux'
import AddPublication from './AddPublication'
import { useState } from 'react'
import Link from 'next/link'
import AddTutorial from './AddTutorial'
import AddCourse from './AddCourse'
import AddCommunication from './AddCommunication'

function CourseNav({user,courseId}) {
  const router = useRouter()
  const dispatch = useDispatch()

  const handleLogout = async () => {

    try {
      const res = await axios.get('http://localhost:3000/api/tutors/logout')
      res.data && dispatch(logout())
      router.push('/')
      console.log("You have successfully Loged out")
    } catch (error) {
      console.log(error.message)
    }

  }

  const [closeAddPubModal,setCloseAddPubModal] = useState(true)
  const [closeAddCourseModal , setCloseAddCourseModal] = useState(true)
  const [closeAddTutorialModal , setcloseAddTutorialModal] = useState(true)
  const [closeAddCommsModal,setCloseAddCommsModal] = useState(true)
  
  return (
<div className=''>

{  
  !closeAddPubModal && <AddPublication user={user} courseId={courseId} setCloseAddPubModal={setCloseAddPubModal}/>
}

{
  !closeAddCourseModal && <AddCourse  user={user} setCloseAddCourseModal={setCloseAddCourseModal}/>
}
{
  !closeAddTutorialModal && <AddTutorial  courseId={courseId} setcloseAddTutorialModal={setcloseAddTutorialModal}/>
}

{
  !closeAddCommsModal && <AddCommunication  courseId={courseId} setCloseAddCommsModal={setCloseAddCommsModal}/>
}



<nav className="navbar navbar-expand-lg navbar-dark " style={{backgroundColor:"#143566"}}>
  <div className="container-fluid">
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link " aria-current="page" href="/dashboard/tutor">Dashboard</a>
        </li>
        <li className="nav-item dropdown">
          <Link className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Courses
          </Link>
          <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
            <li><span className="dropdown-item btn"  onClick={()=>setCloseAddCourseModal(false)}>Add Course</span></li>
            
            <li><Link className="dropdown-item" href={`/dashboard/tutor/courses/${user?user._id:""}`} >My Courses</Link></li>
          </ul>
        </li>
        <li className="nav-item dropdown">
          <Link className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Communique'
          </Link>
          <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
            <li><span className="dropdown-item btn" onClick={()=>setCloseAddCommsModal(false)}>Add Communication</span></li>
            
            <li><Link className="dropdown-item" href={`/dashboard/tutor/courses/${user?user._id:""}`} >View Communications</Link></li>
          </ul>
        </li>
        <li className="nav-item dropdown">
          <Link className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Video Tutorials
          </Link>
          <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
            <li><span className="dropdown-item btn"  onClick={()=>setcloseAddTutorialModal(false)}>Add Tutorial</span></li>
            
            <li><Link className="dropdown-item" href={`/dashboard/tutor/courses/${user?user._id:""}`} >View Tutorials</Link></li>
          </ul>
          
        </li>

        <li className="nav-item dropdown">
          <Link className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Publications
          </Link>
          <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
            <li><span className="dropdown-item btn"  onClick={()=>setCloseAddPubModal(false)}>Add Publication</span></li>
            
            <li><Link className="dropdown-item" href={`/dashboard/tutor/courses/course/notes/${courseId}`} >View Publications</Link></li>
          </ul>
          
        </li>

      </ul>
      {/* <form className="d-flex">
        <input className="form-control me-2 text-bg-dark" type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-sm btn-outline-secondary" type="submit">Search</button>
      </form> */}
    {user ?  <span className='btn text-secondary' onClick={handleLogout}>Logout</span> : "" } 
    {
         user ?  <span className="btn btn-outline-secondary"> {user.name} </span> : ""
    }
    </div>
  </div>
</nav>
      
    </div>
  )
}

export default CourseNav
