import React, {useState, useEffect} from 'react'
import Form from './Form'

const LandingPage = (props) => {
  const [isFormShown, setIsFormShown] = useState(false)
  const [isNewAccount, setIsNewAccount] = useState(false)

  const [windowSize, setWindowSize] = useState({
    width: undefined,
    height: undefined
  })

  const toggleForm = () => {
    setIsNewAccount(!isNewAccount)
  }

  const toggleLoginForm = () => {
    setIsFormShown(!isFormShown)
  }

  const handleResize = () => {
    setWindowSize({
      width: window.innerWidth,
      height: window.innerHeight,
    })
  }

  useEffect(() => {

    window.addEventListener("resize", handleResize)

    handleResize()
    

  }, [])

  return (
    <main className='landing-page'>
      <button className={`btn toggle-form get-started${isFormShown ? " open" : ""}`} onClick={() => {
        toggleLoginForm()
        }} >{isFormShown ? "Cancel" : "Login"}</button>
      <section className={`panel-left${isFormShown ? " closed" : ""}`} aria-hidden={isFormShown && windowSize.width < 800 ? "true" : "false"}>
        
        <div>
        <h2>Never Forget a Good Read</h2>
        <p>
          Add books to your digital book shelf and save notes, reviews, and
          ratings for each one.
        </p>
      </div>
      </section>
      <section className={`panel-right${isFormShown ? " open" : ""}`} aria-hidden={!isFormShown && windowSize.width < 800 ? "true" : "false"}>
        <header className="header main | box-shadow">
          <h1>
            My <br />
           
               Bookshelf
          </h1>
        </header>
        <Form isNewAccount={isNewAccount} />
        <div className="new-account">
          <div></div>
          <div>
            <p className={isNewAccount ? "" : "shown"} aria-hidden={isNewAccount ? "true" : "false"}>First time here? <button className='btn toggle-form' onClick={() => {
              toggleForm()
            }}>Sign up</button></p>
            <p className={isNewAccount ? "shown" : ""} aria-hidden={isNewAccount ? "false" : "true"}>Have an account? <button className='btn toggle-form' onClick={() => {
              toggleForm()
            }}>Login</button></p>
          </div>
        </div>
        <footer> 
          <p className={`${windowSize.width < 800 ? "mobile-view" : ""}`}>test the app with a <button className='btn toggle-form' onClick={() => {
            props.handleGuestLogin()
            }}>Guest Account</button>
          </p>
        </footer>
      </section>
      
    </main>
  )
}
export default LandingPage