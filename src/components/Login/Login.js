import React from 'react';
import { Link } from 'react-router-dom';
import './Login.css'
const Login = () => {
    return (
        <div className='from-container'>
            <div>
              <form action="">
              <h2 className='from-title'>Login</h2>
                <div className="input-group">
                    <label htmlFor="e-mail">E-mail</label>
                    <input type="text" />
                </div>
                <div>
                    <div className="input-group">
                        <label htmlFor="password">Password</label>
                        <input type="text" />
                        
                    </div>
                    <input className='from-submit' type="submit" value="Login" />
                </div>
              </form>
              <p>New to ema-john?<Link className='from-link' to='/signup'>Create an account</Link></p>
               
            </div>
        </div>
    );
};

export default Login;