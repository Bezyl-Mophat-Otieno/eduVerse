import React from 'react'
import Link from 'next/link'
import { useState } from 'react'

 

function Banner({user}) {
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
        <p>
        Welcome to eduVerse, the ultimate web application designed to revolutionize the way students and tutors connect, collaborate, and learn. With a comprehensive set of features, eduVerse aims to provide a seamless and immersive educational experience for users of all ages and backgrounds.
        </p>
        <div className='d-flex justify-content-between align-items-center mt-5'>
        { !user &&  !choice && <>
        <div className='text-center me-5'>Do you want to participate as a student ? </div>
         <button onClick={()=>handleStudent()}>Yes</button> 
         <button onClick={()=>handleTutor()}>No</button>
        </>
        }
        </div>
        <>
        {choice && 
        <div className=' btn-group d-flex justify-content-center align-content-center'>
        
        {role ? <>
        <div className='btn text-primary text-center text-decoration-underline fs-4' onClick={()=>setChoice(false)}>Click here to switch your role  </div>
        <Link href={'/register/student'}> <button className='btn btn-outline-secondary me-5'  >Register</button> </Link>
        <Link href={'/login/student'}> <button className='btn btn-outline-secondary' >  Login   </button> </Link>
              </> 
        :
        <>
        <div className='btn text-primary text-center text-decoration-underline fs-4' onClick={()=>setChoice(false)}>Click here to switch your role  </div>
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
