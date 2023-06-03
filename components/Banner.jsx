import React from 'react'
import Link from 'next/link'
import { useState } from 'react'

 

function Banner() {
  const [role,setRole] = useState(false)
  const [choice,setChoice] = useState(false)
  const handleStudent = ()=>{
    setRole(true)
    setChoice(true)
    console.log(choice)
  }

  const handleTutor = ()=>{
    setRole(false)
    setChoice(true)

  }
  return (
    <div>
<section id="banner">
    <div class="inner">
        <div class="logo"><span class="icon fa-gem">eV</span></div>
        <h2 className=''>eduVerse</h2>
        <p>Service to comrades is service next to God<a href="http://html5up.net"> ~ Ceo.eduVerse LTD</a></p>
        <div className='d-flex justify-content-between align-items-center mt-5'>
        { !choice && <>
        <div className='text-center me-5'>Are you a student ? </div>
         <button onClick={()=>handleStudent()}>Yes</button> 
         <button onClick={()=>handleTutor()}>No</button>
        </>
        }
        </div>
        <>
        {choice && 
        <div className=' btn-group d-flex justify-content-center align-content-center'>
        
        {role ? <>
        <Link href={'/register/student'}> <button className='btn btn-outline-secondary me-5'  >Register</button> </Link>
        <Link href={'/login/student'}> <button className='btn btn-outline-secondary' >  Login   </button> </Link>
              </> 
        :
        <>
        <Link href={'/register/tutor'}> <button className='btn btn-outline-secondary me-5'  >Register</button> </Link>
        <Link href={'/login/tutor'}> <button className='btn btn-outline-secondary' >  Login   </button> </Link> 
        </>
         }
        </div>
        }

        </>
    </div>
</section>  
    </div>
  )
}

export default Banner
