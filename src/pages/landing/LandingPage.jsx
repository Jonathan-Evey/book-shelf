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
      <button className={`btn toggle-form landing-toggle${isFormShown ? " open" : ""}`} onClick={() => {
        toggleLoginForm()
        }} >{isFormShown ? "Cancel" : "Login"}</button>
      <section className={`panel-left${isFormShown ? " closed" : ""}`} aria-hidden={isFormShown && windowSize.width < 800 ? "true" : "false"}>
        
        <img 
          srcSet='img/landing-background-small.jpg 350w, img/landing-background-med.jpg 750w, img/landing-background-large.jpg 1200w,'
          sizes='(max-width: 350px) 350px, (max-width: 750px) 750px, 1200px'
          src='img/landing-background-large.jpg'
          alt='BookShelf with lots of books displayed on it' 
          />
        <div>
          <h2>Never Forget a Good Read</h2>
          <p>
            Add books to your digital book shelf and save notes, reviews, and
            ratings for each one.
          </p>
        
        </div>
      </section>
      <section className={`panel-right${isFormShown ? " open" : ""}`} aria-hidden={!isFormShown && windowSize.width < 800 ? "true" : "false"}>
        <header className="header-landing-page | box-shadow">
          <h1>
            My <br />
           
               Bookshelf
          </h1>
        </header>
        <Form isNewAccount={isNewAccount} />
        <div className="container-form-toggle-btns">
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
          <p className={`${windowSize.width < 800 ? "mobile-view" : ""}`}>Try the app with a <button className='btn toggle-form' onClick={() => {
            props.handleGuestLogin()
            }}>Guest Account</button>
          </p>
        </footer>
      </section>
      
    </main>
  )
}
export default LandingPage