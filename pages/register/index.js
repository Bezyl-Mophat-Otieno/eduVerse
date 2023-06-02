import React from 'react'
import styles from '../../styles/Register.module.css'
import Link from 'next/link'


function index() {
  return (
    <>

<div class="main">
{/* <!-- Sign up form --> */}
<section class="signup mt-5 ">
    <div class="container">
        <div class="signup-content row">
            <div class="signup-form col-6">
                <h2 class="form-title">Sign up</h2>
                <form method="POST" class="register-form" id="register-form">
                    <div class="form-group">
                        <label for="name"><i class="zmdi zmdi-account material-icons-name"></i></label>
                        <input type="text" name="name" id="name" placeholder="Your Name"/>
                    </div>
                    <div class="form-group">
                        <label for="email"><i class="zmdi zmdi-email"></i></label>
                        <input type="email" name="email" id="email" placeholder="Your Email"/>
                    </div>
                    <div class="form-group">
                        <label for="pass"><i class="zmdi zmdi-lock"></i></label>
                        <input type="password" name="pass" id="pass" placeholder="Password"/>
                    </div>
                    <div class="form-group">
                        <label for="re-pass"><i class="zmdi zmdi-lock-outline"></i></label>
                        <input type="password" name="re_pass" id="re_pass" placeholder="Repeat your password"/>
                    </div>
                    <div class="form-group form-button">
                        <input type="submit" name="signup" id="signup" class="form-submit" value="Register"/>
                    </div>
                </form>
            </div>
            <div class="signup-image mt-5 col-6">
                <figure><img src="images/signup-image.jpg" alt="sing up image"/></figure>
                <span class='text-primary me-3'>Already have  an account ? </span> <Link href={'/login'}> Login </Link>
            </div>
        </div>
    </div>
</section>

</div>
</>
  )
}

    
  


export default index
