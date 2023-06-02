import React from 'react'
import styles from '../../styles/Register.module.css'
import Link from 'next/link'


function index() {
  return (
    <>

<div class="main">
{/* <!-- Sign up form --> */}
<section class="signIn mt-5 ">
    <div class="container">
        <div class="signup-content row">
            <div class="signup-form col-6">
                <h2 class="form-title">Sign In</h2>
                <form method="POST" class="register-form" id="register-form">
                    <div class="form-group">
                        <label for="name"><i class="zmdi zmdi-account material-icons-name"></i></label>
                        <input type="text" name="name" id="name" placeholder="Enter Phone Number format[+254]"/>
                    </div>
                    <div class="form-group">
                        <label for="pass"><i class="zmdi zmdi-lock"></i></label>
                        <input type="password" name="pass" id="pass" placeholder="Password"/>
                    </div>
                    <div class="form-group form-button mt-5 ">
                        <input type="submit" name="signup" id="signup" class="form-submit" value="Login"/>
                    </div>
                </form>
            </div>
            <div class="signup-image mt-5 col-6">
                <figure><img src="images/signin-image.jpg" alt="sing up image"/></figure>
                 <span class='text-primary me-3'>Do not have an account ? </span> <Link href={'/register'}>Register</Link>
            </div>
        </div>
    </div>
</section>

</div>
</>
  )
}

    
  


export default index
