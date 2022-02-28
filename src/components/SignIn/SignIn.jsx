import "./style.css";
import img from "../../assets/logo.svg";
import LoginForm from "./LoginForm";

function SignIn() {
  return (
    <div>
      <div className="login">
        <div className="login__block">
          <div className="login__img">
            <img src={img} alt="" />
          </div>
          <h4>Вход</h4>
          <LoginForm />
        </div>
      </div>
    </div>
  );
}

export default SignIn;
