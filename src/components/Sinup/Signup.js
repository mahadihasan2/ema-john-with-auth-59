import React from 'react';
import { Link } from 'react-router-dom';
import './Signup.css'

const Signup = () => {
    return (
        <div className='from-container'>
            <div>
                <form action="">
                    <h2 className='from-title'>Sign Up</h2>
                    <div className="input-group">
                        <label htmlFor="e-mail">E-mail</label>
                        <input type="text" required />
                    </div>
                    <div>
                        <div className="input-group">
                            <label htmlFor="password">Password</label>
                            <input type="password" name='password' required/>

                        </div>
                        <div className="input-group">
                            <label htmlFor="confirm password">Confirm Password</label>
                            <input type="password" name='password' required />

                        </div>
                        <input className='from-submit' type="submit" value="Sign Up" />
                    </div>
                </form>
                <p>Already have an account?<Link className='from-link' to='/login'>Login</Link></p>

            </div>
        </div>
    );
};

export default Signup;