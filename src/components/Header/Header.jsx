import "./style.css";
import logo from "../../assets/logo.svg";
import { NavLink, Outlet } from "react-router-dom";
import { useDispatch } from "react-redux";

function Header() {
  const dispatch = useDispatch();

  const handleExit = () => {
    dispatch("delete/token");
    localStorage.removeItem("token");
  };

  return (
    <>
      <div className="header">
        <div className="header__content">
          <img src={logo} alt="" />
          <ul>
            <li>
              <NavLink to="/main">Поиск</NavLink>
            </li>
            <li>
              <NavLink to="/favorite">Избранное</NavLink>
            </li>
          </ul>
          <li className="header__exit blue">
            <NavLink to="/" onClick={handleExit}>
              Выйти
            </NavLink>
          </li>
        </div>
      </div>
      <Outlet />
    </>
  );
}

export default Header;
