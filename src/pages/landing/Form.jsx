import LoginForm from './LoginForm'
import NewUserForm from './NewUserForm'

const Form = (props) => {

  return (
    <form className="form-landing-page | box-shadow">
        <LoginForm isNewAccount={props.isNewAccount}  />
        <NewUserForm isNewAccount={props.isNewAccount} />
    </form>
  )
}

export default Form