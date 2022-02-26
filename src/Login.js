import React, {useState} from 'react'
import './Login.css'
import { Link, useNavigate } from 'react-router-dom';
import { authen } from './firebase';


function Login() {
    const Navigate = useNavigate(); 
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    
    
    const signIn = e =>{
        e.preventDefault();

        //firebase login

         authen.signInWithEmailAndPassword(email, password).then(authen => {
            Navigate('/')
        } )
        .catch(error => alert(error.message))
    }
    
    const register = e => {
        e.preventDefault();

        //firebase register

        authen.createUserWithEmailAndPassword(email, password).then((authen) => {
            if (authen) {
                Navigate('/')    
        }
        })
        .catch(error => alert(error.message))

    }

  return (
    <div className='login'>
        <Link to='/'>
            <img 
            className='login__logo'
            src='https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png'
            alt=''
            />
        </Link>

        <div className='login__container'>
            <h1>Sign in</h1>
            <form>
                <h5>E-mail</h5>
                <input type='text' value={email} onChange={e => setEmail(e.target.value)}/>
                <h5>Password</h5>
                <input type='password' value={password} onChange={e => setPassword(e.target.value)}/>
                <button type='submit' onClick={signIn} className='login__signInButton'>Sign In</button>
                <p>By Signing-in you agree to Fake conditions of Use & Sale.
                    Please see out fake Privacy Notice. Thank You 😃😃😃
                </p>

                <button type='submit' onClick={register} 
                className='login__registerButton'>Create your Account</button>
            </form> 
        </div>

    </div>
  )
}

export default Login