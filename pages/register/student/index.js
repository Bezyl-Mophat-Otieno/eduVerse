import React from 'react'
import Link from 'next/link'
import { useState } from 'react'
import axios from 'axios'
import styles from '../../../styles/Register.module.css'
import signUpImage from '../../../public/images/signup-image.jpg'
import Image from 'next/image'
import Alert from '@/components/Alert'



function index() {
    const [name, setName] = useState("")
    const [reg, setReg] = useState("")
    const [phone, setPhone] = useState("")
    const [password, setPassword] = useState("")
    const [cPassword, setCPassword] = useState("")
    const [logError,setLogError] = useState({})
    const [success, setSuccess] = useState()
    const [error, setError ] = useState(false)

    const handleRegister = async (e)=>{
    e.preventDefault()

    if(password !== cPassword) {
       setLogError({...logError,state:true,message:"Password do not match !"})
        
    }else{
        try {
    
            const requestBody = {name,reg,phone,password}
            const res = await axios.post('http://localhost:3000/api/students',requestBody)
            setSuccess(true)
            console.log("Student Created successfully")
        } catch (error) {

            setLogError({...logError,state:true,message:error.message})
            setError(true)
        }
        }

    }


    
  return (
    <>

<div className='main'>
{/* <!-- Sign up form --> */}
<section className="signup mt-5 ">
    <div className="container">
        <div className="signup-content row">
            <div className="signup-form col-6">
                {success && <Alert message={"Student was created successfully"}  color={"alert-success"}/>}
                { error &&<Alert message={"Something went wrong , Student was not registered successfully"}  color={"alert-warning"}/>}
                <h2 className="form-title">Sign up</h2>
                    <div className="form-group">
                        <label htmlFor="name"><i className="zmdi zmdi-account material-icons-name"></i></label>
                        <input type="text" name="name" id="name" placeholder="Your Name" onChange={(e)=>setName(e.target.value)}/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="regno"><i className="zmdi zmdi-email"></i></label>
                        <input type="text" name="regno" id="regno" placeholder="Your Registration Number" onChange={(e)=>setReg(e.target.value)} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="phone"><i className="zmdi zmdi-lock"></i></label>
                        <input type="text" name="phone" id="phone" placeholder="Enter Phone Number Format[+254]" onChange={(e)=>setPhone(e.target.value)} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="pass"><i className="zmdi zmdi-lock"></i></label>
                        <input type="password" name="pass" id="pass" placeholder="Password" onChange={(e)=>setPassword(e.target.value)} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="re-pass"><i className="zmdi zmdi-lock-outline"></i></label>
                        <input type="password" name="re_pass" id="re_pass" placeholder="Confirm Password" onChange={(e)=>setCPassword(e.target.value)} />
                    </div>
                    <div className="form-group Form-button mt-5">
                    <button className = 'btn btn-outline-secondary' onClick={(e)=>handleRegister(e)}>Register</button>
                    </div>
            </div>
            <div className="signup-image mt-5 col-6">
                <figure><Image src={signUpImage} width={300} height={300} alt='Sign Up Image'/></figure>
                <span className=' me-3'>Already have  an account ? </span> <Link href={'/login/student'}> <span className='text-primary'>Login </span></Link>
            </div>
        </div>
    </div>
</section>

</div>
</>
  )
}

    
  


export default index
