import React from 'react'

function CourseNav({tutor}) {
  return (
<div className=''>
<nav className="navbar navbar-expand-lg navbar-dark " style={{backgroundColor:"#143566"}}>
  <div className="container-fluid">
    <a className="navbar-brand" href="/">Dr.{tutor.name}</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link " aria-current="page" href="/">Home</a>
        </li>
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Tutorials
          </a>
          <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
            <li><a className="dropdown-item" href="#">Upload Tutorial</a></li>
            <li><a className="dropdown-item" href="#">My Tutorials</a></li>
          </ul>
        </li>
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Notes
          </a>
          <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
            <li><a className="dropdown-item" href="#" onClick={()=>setClose(false)}>Add Notes</a></li>
            <li><a className="dropdown-item" href="#">My Notes</a></li>
          </ul>
        </li>
        <li className="nav-item">
          <a className="nav-link disabled">Suggestion Box</a>
        </li>
      </ul>
      <form className="d-flex">
        <input className="form-control me-2 text-bg-dark" type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-sm btn-outline-secondary" type="submit">Search</button>
      </form>
    </div>
  </div>
</nav>
      
    </div>
  )
}

export default CourseNav
