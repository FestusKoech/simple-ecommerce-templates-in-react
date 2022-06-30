import React from 'react'
import Navbar from './Navbar';
// import email from './images/email.png'

// import password from './images/password.png'
import './reset.css'

const Login= () => {
  return (
   <div id = "Login" className='main'>
   
   <Navbar />
       <div className='sub-main'>
      <div>
    
        <div className='resetPage'>
          <h3>Reset password</h3>

          <div>
            {/* <img src= {email} alt= 'email' className='email'></img> */}
            <input type = 'text' placeholder='username or email' className='input'></input>
          </div>
          <div className='passInput'>
            {/* <img src= {password} alt= 'password' className='password'></img> */}
            <input type = 'password' placeholder='old password' className='input'></input>
          </div>
          <div className='passInput'>
            {/* <img src= {password} alt= 'password' className='password'></img> */}
            <input type = 'password' placeholder='new password' className='input'></input>
          </div>
          <div className='passInput'>
            {/* <img src= {password} alt= 'password' className='password'></img> */}
            <input type = 'password' placeholder='repeat new password' className='input'></input>
          </div>
          <div className='loginDiv'>
            <button className='loginButton'><b>Reset</b></button>
          </div>

         

         </div>

      </div>
    </div>
   
  </div>
  )
}
     


export default Login;
