import React from 'react'
import { useSelector } from 'react-redux'
import { useRouter } from 'next/router'
import { logout } from '@/redux/userSlice'
import axios from 'axios'
import { useDispatch } from 'react-redux'
import AddCourse from './AddCourse'
import { useState } from 'react'

function CourseNav({user}) {
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

  const [close,setClose] = useState(true)
  return (
<div className=''>

{ !close && <AddCourse user={user} setClose={setClose}/>
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
        <li className="nav-item">
          <a className="nav-link " aria-current="page" href="#" onClick={()=>setClose(false)} >AddCourse</a>
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
