import { useState, useRef } from 'react'
import { signInWithEmailAndPassword } from 'firebase/auth'
import { auth } from '../../firebase'

const LoginForm = (props) => {
  const [isEmailError, setIsEmailError] = useState(false)
  const [isPasswordError, setIsPasswordError] = useState(false)

  const emailRef = useRef()
  const passwordRef = useRef()

  const signInUser = async (email, password) => {
    await signInWithEmailAndPassword(auth, email, password)
      .then(() => {
        console.log("signed in");
        return;
      })
      .catch((error) => {
        if (error.message.includes("auth/wrong-password")) {
          setIsPasswordError(true)
        }
        console.log(error.message);
      });
  };

  const handleSignin = (e) => {
    e.preventDefault()
    signInUser(emailRef.current.value, passwordRef.current.value)
  }

  return (
    <div className={`container-form${props.isNewAccount ? "" : " shown"}`} aria-hidden={props.isNewAccount ? "true" : "false"}>
            <header className="header form-header">
              <h3>Login</h3>
            </header>
            <div>
              <label>Email</label>
              <input ref={emailRef} className='box-shadow-lightest'/>
              {isEmailError ? (<p>Please verify that email entered is correct.</p>) : null}
            </div>
            <div>
              <label>Password</label>
              <input ref={passwordRef} className='box-shadow-lightest'/>
              {isPasswordError ? (<p className='error'>Password does not match account.</p>) : null}
            </div>
            <button onClick={(e) => {
              handleSignin(e)
            }} className='btn linear-gradient clr-700-800'>Sign In</button>
          </div>
  )
}

export default LoginForm