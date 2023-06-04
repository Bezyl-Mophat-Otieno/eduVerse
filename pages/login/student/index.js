import React from 'react'
import Link from 'next/link'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { loginStart , loginFailure , loginSuccess } from '@/redux/userSlice'
import axios from 'axios'
import signInImage from '../../../public/images/signin-image.jpg'
import Image from 'next/image'

function index() {


    const [phone , setPhone] = useState("")
    const dispatch = useDispatch()
    const [password , setPassword] = useState("")
    const [logError, setLogError ] = useState({})

    const handleLogin =async (e)=>{
        e.target.preventDefault
        const requestBody = {phone,password}


        try {
            dispatch(loginStart())
            const res = await axios.post('http://localhost:3000/api/students/login',requestBody)
            console.log(res.data)
            dispatch(loginSuccess(res.data))
        } catch (error) {
            console.log(error)
            setLogError({...logError,state:true,message:error.message})
            dispatch(loginFailure())
        }


    }
    
  return (
    <>

<div class="main">
{/* <!-- Sign up form --> */}
<section className="signIn mt-5 ">
    <div className="container">
        <div className="signup-content row">
            <div className="signup-form col-6">
                <h2 className="form-title">Sign In</h2>
                    <div className="form-group">
                        <label for="name"><i className="zmdi zmdi-account material-icons-name"></i></label>
                        <input type="text" name="name" id="name" placeholder="Enter Phone Number format[+254]" onChange={(e)=>setPhone(e.target.value)} />
                    </div>
                    <div className="form-group">
                        <label for="pass"><i className="zmdi zmdi-lock"></i></label>
                        <input type="password" name="pass" id="pass" placeholder="Password" onChange={(e)=>setPassword(e.target.value)} />
                    </div>
                    <div className="form-group form-button mt-5 ">
                    <button className='btn btn-outline-secondary' onClick={(e)=>handleLogin(e)}>Login</button>
                    </div>
            </div>
            <div className="signup-image mt-5 col-6">
                <figure><Image src={signInImage} alt='Sign in Image'  width={300} height={300}/> </figure>
                 <span className=' me-3'>Do not have an account ? </span> <Link href={'/register/student'}> <span className='text-primary'> Register</span></Link>
            </div>
        </div>
    </div>
</section>

</div>
</>
  )
}

    
  


export default index
