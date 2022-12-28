import { useState, useRef } from 'react'
import { registerUser } from '../../firebase'

const NewUserForm = (props) => {
  const [userNameError, setUserNameError] = useState(false)
  const [emailError, setEmailError] = useState(false)
  const [passwordError, setPasswordError] = useState(false)
  const [confirmPasswordError, setConfirmPasswordError] = useState(false)

    const userNameRef = useRef()
    const emailRef = useRef()
    const passwordRef = useRef()
    const confirmPassworkRef = useRef()


    const handleSignUp = (e) => {
        e.preventDefault()
        checkInputs()
    }
    const validEmail = (email) => {
      const emailRegex = new RegExp(
        "^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$",
      );
      if (emailRegex.test(email)) {
        return true
      } else {
        return false
      }
    }
    const validUserName = () => {
      if (userNameRef.current.value.length < 3) {
        return false
      } else {
        return true
      }
    }
    const validPassword = () => {
      if (passwordRef.current.value.length < 6) {
        return false
      } else {
        return true
      }
    }
    const passwordsMatch = () => {
      if (passwordRef.current.value !== confirmPassworkRef.current.value) {
        return false
      } else {
        return true
      }
    }
    const checkInputs = () => {
      if (!validUserName()) {
        console.log("error")
        setUserNameError(true)
      }
      if (!validEmail(emailRef.current.value)) {
        setEmailError(true)
      }
      if (!validPassword()) {
        setPasswordError(true)
      }
      if (!passwordsMatch()) {
        setConfirmPasswordError(true)
      }
      return checkIfValidToRegister()
    }
    const checkIfValidToRegister = () => {
      if (validUserName()) {
        if (validEmail(emailRef.current.value)) {
          if(validPassword()) {
            if (passwordsMatch()) {
              console.log("Registered")
              registerUser(emailRef.current.value, passwordRef.current.value, userNameRef.current.value)
              return 
            }
          }
        }
      }
      console.log("Not Valid")
    }
  return (
    <div className={`container-form creat-account${props.isNewAccount ? " shown" : ""}`} aria-hidden={props.isNewAccount ? "false" : "true"}>
            <header className="header-form-login">
              <h3>Creat Account</h3>
            </header>
            <div>
              <label htmlFor='user-name'>Display Name</label>
              <input name='user-name' type={"text"} ref={userNameRef} className='box-shadow-lightest' onChange={() => {
                if (validUserName()) {
                  setUserNameError(false)
                }
              }}/>
              {userNameError ? (<p className='error'>Display name must be at least three letters</p>) : null}
            </div>
            <div>
              <label htmlFor='email'>Email</label>
              <input name='email' type={"email"} ref={emailRef} className='box-shadow-lightest' onChange={(e) => {
                if (emailError) {
                  if (validEmail(e.target.value)) {
                    setEmailError(false)
                  }
                }
              }} />
              {emailError ? (<p className='error'>Please verify that email entered is valid.</p>) : null}
            </div>
            <div>
              <label htmlFor='password'>Password</label>
              <input name='password' type={"password"} ref={passwordRef} className='box-shadow-lightest' onChange={() => {
                if (passwordError) {
                  if (validPassword()) {
                    setPasswordError(false)
                  }
                }
              }}/>
              {passwordError ? (<p className='error'>Password must be at least six characters long.</p>) : null}
            </div>
            <div>
              <label htmlFor='confirm-password' >Confirm Password</label>
              <input name="confirm-password" type={"password"} ref={confirmPassworkRef} className='box-shadow-lightest' onChange={() => {
                if (confirmPasswordError) {
                  if (passwordsMatch()) {
                    setConfirmPasswordError(false)
                  }
                }
              }}/>
              {confirmPasswordError ? (<p className='error'>Passwords do not match.</p>) : null}
            </div>
            <button className='btn linear-gradient clr-700-800 sign-up-in' onClick={(e) => {
              handleSignUp(e)
            }}>Sign Up</button>
          </div>
  )
}

export default NewUserForm