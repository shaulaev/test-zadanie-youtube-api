import "./style.css"
import img from "../../assets/logo.svg"
import LoginForm from "./LoginForm"
import { createBrowserHistory } from  "history"

function SignIn() {

  const storage = localStorage.token

  const history = createBrowserHistory()

  if(storage) {
    history.push("/main")
    window.location.reload()
  }

  return (
  <div>
    <div className="login">
      <div className="login__block">
        <div className="login__img">
          <img src={img} alt="" />
        </div>
        <h4>Вход</h4>
        {storage ? <h1>Вы уже авторизованы</h1> : <LoginForm/>}
      </div>
    </div>
  </div>  
  )
}

export default SignIn