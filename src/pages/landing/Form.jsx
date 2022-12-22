import LoginForm from './LoginForm'
import NewUserForm from './NewUserForm'

const Form = (props) => {

  return (
    <form className="form login | box-shadow">
        <LoginForm isNewAccount={props.isNewAccount}  />
        <NewUserForm isNewAccount={props.isNewAccount} />
    </form>
  )
}

export default Form