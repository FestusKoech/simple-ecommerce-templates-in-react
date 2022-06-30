import React from 'react'
import './signup.css'
import Navbar from './Navbar';

// import email from './images/email.png'
// import password from './images/password.png'

const Signup = () => {
  return (
    
    <div id = "person" className='main'>
       <Navbar />
      <header className="App-header"> </header>
       <div className='sub-main'>
      <div>
        
        <div className='signupPage'>
          <h3>Sign Up</h3>

          <div>
            <input type = 'text' placeholder='First Name' className='input'></input>
          </div>
          <div  className='passInput'>
            <input type = 'text' placeholder='Last Name' className='input'></input>
          </div>

          <div className='passInput'>
            {/* <img src= {email} alt= 'email' className='email'></img> */}
            <input type = 'text' placeholder='example@gmail.com' className='input'></input>
          </div>


          <div className='passInput'>
            {/* <img src= {password} alt= 'password' className='password'></img> */}
            <input type = 'password' placeholder='password' className='input'></input>
          </div>

          <div className='passInput'>
            {/* <img src= {password} alt= 'password' className='password'></img> */}
            <input type = 'password' placeholder='confirm password' className='input'></input>
          </div>


          <div className='SignupDiv'>
            <button className='signupButton'><b>Signup</b></button>
          </div>
          
         <div>
            <p className='login'>
              Have an account? 
            </p>
            <p className = 'login'>
                Sign in
            </p>
             </div>

         </div>
      </div>
    </div>
  </div>
     
    
  );
}

export default Signup;


