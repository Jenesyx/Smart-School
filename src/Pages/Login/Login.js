import React from 'react'
import './Login.css'

function Login() {
  return (
    <>
      <div className='login-holder'>
        <div className='login'>Login</div>
        <div className="welcome">
          <p>Welcome to Pro Edupage!</p>
          <p>Please sign in to your account and start the adventure</p>
        </div>
        <div className="inputs">
          <div className="username">
            <p>Username or Lastname</p>
            <input type="text" placeholder='Bidkhori'/>
          </div>
          <div className="password">
            <p>Password</p>
            <input type="password"/>
          </div>
          <div className="button">
            <p>Sign in</p>
          </div>
        </div>
      </div>
    </>
  )
}

export default Login