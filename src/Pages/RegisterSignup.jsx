import {useContext} from 'react'
import { Link } from 'react-router-dom';
import './CSS/RegisterSignup.css'
import { ShopContext } from '../Context/ShopContext';

function RegisterSignup() {

    const { handleSubmit, formData, handleChange } = useContext(ShopContext)

  return (
        <form onSubmit={handleSubmit} data-type='register'>
            <div className='registersignup'>
                <div className="registersignup-container">
                    <h1>Sign Up</h1>
                    <div className='registersignup-label'>
                        <label>
                            <h4>FirstName:</h4>
                            <input
                            type="text"
                            name="fname"
                            value={formData.fname}
                            onChange={handleChange}
                            />
                        </label>

                        <label>
                            <h4>LastName:</h4>
                            <input
                            type="text"
                            name="lname"
                            value={formData.lname}
                            onChange={handleChange}
                            />
                        </label>

                        <label>
                            <h4>Email:</h4>
                            <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            />
                        </label>

                        <label>
                            <h4>Password:</h4>
                            <input
                            type="password"
                            name="password"
                            value={formData.password}
                            onChange={handleChange}
                            />
                        </label>
                    </div>
                    <button type="submit">Submit</button>
                    <p className="registersignup-login">Already have an account? <Link style={{ textDecoration: 'none'}} to='/Login' ><span>Login here</span></Link></p>
                    <div className='registersignup-checkbox'>
                        <input
                        type="checkbox"
                        name="checkbox"
                        id='checkbox'
                        onChange={handleChange}
                        />
                        <label htmlFor='checkbox'>By continuing, i agree to the terms of use & privacy policy.</label>
                    </div>
                </div>
            </div>
        </form>
  )
}

export default RegisterSignup