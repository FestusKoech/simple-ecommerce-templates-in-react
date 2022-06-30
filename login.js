import React from 'react'
import Navbar from './Navbar';
// import email from './images/email.png'
// import profile from './images/profile.png'
// import password from './images/password.png'

import './login.css'

const Login= () => {
  return (
   <div id = "Login" className='main'>
    <Navbar />
    
       <div className='sub-main'>
      <div>
        <div className='imgs'>
          {/* <div className = 'profile-container'>
            <img src={profile} alt = 'profile' className='profile'></img>
            </div> */}
            </div>
        <div className='loginPage'>
          <h3>Login Page</h3>

          <div className='passInput'>
            {/* <img src= {email} alt= 'email' className='email'></img> */}
            <input type = 'text' placeholder='username or email' className='input'></input>
          </div>
          <div className='passInput'>
            {/* <img src= {password} alt= 'password' className='password'></img> */}
            <input type = 'password' placeholder='password' className='input'></input>
          </div>
          <div className='loginDiv'>
            <button className='loginButton'><b>Login</b></button>
          </div>

          <div>
            <p className='resetPassword'>
              Forgot password? Reset password
            </p>
             </div>
             
            <div className='signup'>
            <p>Signup</p>


        
            
            </div>

         </div>

      </div>
    </div>
   
  </div>
  )
}
     


export default Login;