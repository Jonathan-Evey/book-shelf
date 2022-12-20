import { useState } from 'react'

const Form = (props) => {
    const [isEmailError, setIsEmailError] = useState(false)
  return (
    <form className="form login | box-shadow">
          <div className={`container-form${props.isNewAccount ? "" : " shown"}`} aria-hidden={props.isNewAccount ? "true" : "false"}>
            <header className="header form-header">
              <h3>Login</h3>
            </header>
            <div>
              <label>Email</label>
              <input className='box-shadow-lightest'/>
              {isEmailError ? (<p>Please verify that email entered is correct.</p>) : null}
            </div>
            <div>
              <label>Password</label>
              <input/>
            </div>
            <button className='btn linear-gradient clr-700-800'>Sign In</button>
          </div>
          <div className={`container-form creat-account${props.isNewAccount ? " shown" : ""}`} aria-hidden={props.isNewAccount ? "false" : "true"}>
            <header className="header form-header">
              <h3>Creat Account</h3>
            </header>
            <div>
              <label>Display Name</label>
              <input className='box-shadow-lightest'/>
            </div>
            <div>
              <label>Email</label>
              <input className='box-shadow-lightest'/>
            </div>
            <div>
              <label>Password</label>
              <input/>
            </div>
            <div>
              <label>Confirm Password</label>
              <input/>
            </div>
            <button className='btn linear-gradient clr-700-800'>Sign Up</button>
          </div>
          
        </form>
  )
}

export default Form