import React from 'react'
import Link from 'next/link'
import { logout } from '@/redux/userSlice'
import { useDispatch } from 'react-redux'
import axios from 'axios'
import { useRouter } from 'next/router'

function TutorDashNav({user,setCloseAddCourseModal}) {
  const dispatch = useDispatch()
  const router = useRouter()
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
  return (
<div className=''>
<nav className="navbar navbar-expand-lg navbar-dark " style={{backgroundColor:"#143566"}}>
  <div className="container-fluid">

    <Link className="navbar-brand ms-4" href="/"> {user&&"Welcome to"} eduVerse</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link " aria-current="page" href="/">Home</Link>
        </li>



        <li className="nav-item dropdown">
          <Link className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Courses
          </Link>
          <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
            <li><span className="dropdown-item btn" onClick={()=>setCloseAddCourseModal(false)} >Add Course</span></li>
            
            <li><Link className="dropdown-item" href={`/dashboard/tutor/courses/${user?user._id:""}`} >My Courses</Link></li>
          </ul>
        </li>
        <li className="nav-item">
          <Link href='#' className="nav-link disabled">Messages</Link>
        </li>
      </ul>

    {user ?  <span  className='btn text-secondary' onClick={handleLogout}>Logout</span> : "" } 
    {
         user ?  <span className="btn btn-outline-secondary"> {user.name} </span> : ""
    }
     
    </div>
  </div>
</nav>
      
    </div>
  )
}

export default TutorDashNav
