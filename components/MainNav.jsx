import React from 'react'
import Link from 'next/link'

function MainNav({}) {
  return (
<div className=''>
<nav className="navbar navbar-expand-lg navbar-dark " style={{backgroundColor:"#143566"}}>
  <div className="container-fluid">
    <Link className="navbar-brand" href="/">eduVerse</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link " aria-current="page" href="/">Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link " aria-current="page" href="/about">About</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link " aria-current="page" href="/contact">Contact Us</Link>
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

export default MainNav
