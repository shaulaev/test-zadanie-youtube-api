import { useState } from "react";
import "./style.css";
import { signIn } from "../../redux/users/usersReducer";
import { useDispatch } from "react-redux";
import { NavLink } from "react-router-dom";

function LoginForm() {
  const dispatch = useDispatch();

  const [isActive, setIsActive] = useState(false);
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");

  const handleShowPassword = () => {
    setIsActive(!isActive);
  };

  const handleChangeLogin = (e) => {
    setLogin(e.target.value);
  };

  const handleChangePassword = (e) => {
    setPassword(e.target.value);
  };

  const handleLogin = () => {
    dispatch(signIn({ login, password }));
  };

  return (
    <>
      <div className="login__form">
        <h5>Логин</h5>
        <input
          type="text"
          onChange={(e) => handleChangeLogin(e)}
          value={login}
        />
        <h5>Пароль</h5>
        <input
          type={isActive ? "text" : "password"}
          className="left"
          onChange={(e) => handleChangePassword(e)}
          value={password}
        />
        <button
          className={
            isActive
              ? "login__password__control view"
              : "login__password__control"
          }
          onClick={handleShowPassword}
        ></button>
      </div>
      <NavLink to="/main">
        <button className="login__submit" onClick={handleLogin}>
          Войти
        </button>
      </NavLink>
    </>
  );
}

export default LoginForm;
