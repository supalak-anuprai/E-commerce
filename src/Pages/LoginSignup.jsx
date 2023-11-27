import React, { useContext, useState } from 'react'
import { Link } from 'react-router-dom'
import './CSS/LoginSignup.css'
import { ShopContext } from '../Context/ShopContext'

const LoginSignup = () => {

  const { handleSubmit, formData, handleChange } = useContext(ShopContext)

  return (
    <div className='loginsignup'>
      <div className="loginsignup-container">
        <h1>LOGIN</h1>
        <form onSubmit={handleSubmit} data-type='login'>
        <div className="loginsignup-fields">
          <input onChange={handleChange} type="text" name='fname' value={formData.fnae} placeholder='Your Frist Name' />
          <input onChange={handleChange} type="email" name='email' value={formData.email} placeholder='Email Address' />
          <input onChange={handleChange} type="password" name='password' value={formData.password} placeholder='Password' />
        </div>
        <button type='submit'>Continue</button>
        </form>
        <p className="loginsignup-login">Apply for an account at <Link style={{ textDecoration: 'none' }} to='/register'><span>Sign Up here</span></Link></p>
      </div>
    </div>
  )
}

export default LoginSignup