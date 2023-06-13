import React from 'react'
import Link from 'next/link'
import { logout } from '@/redux/userSlice'
import { useDispatch } from 'react-redux'
import axios from 'axios'

function MainNav({user}) {
  const dispatch = useDispatch()
  const handleLogout = async () => {

    try {
      const res = await axios.get('http://localhost:3000/api/tutors/logout')
      res.data && dispatch(logout())
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
          <Link className="nav-link " aria-current="page" href="/about">About</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link " aria-current="page" href="/contact">Contact</Link>
        </li>
        <li className="nav-item">
{        user && <Link className="nav-link " aria-current="page" href="/dashboard/tutor">Dashboard</Link>
}        </li>
          {/* <li className="nav-item">
          <a className="nav-link disabled">Suggestion Box</a>
          </li> */}
      </ul>

    {user ?  <Link href="" className='btn text-secondary' onClick={handleLogout}>Logout</Link> : "" } 
      {
         user ?  <span className="btn btn-outline-secondary"> {user.name} </span> : ""
      }
        
     
    </div>
  </div>
</nav>
      
    </div>
  )
}

export default MainNav
