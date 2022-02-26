import "./style.css"
import logo from "../assets/logo.svg"
import { NavLink, Outlet } from "react-router-dom"
import { createBrowserHistory } from 'history'

function Header() {

  const storage = localStorage.token
  const history = createBrowserHistory()

  const handleExit = () => {
    localStorage.removeItem("token")
  }

  if(!storage) {
    history.push("/")
    window.location.reload()
  }

  return (
    <>
    <div className="header">
      <div className="header__content">
        <img src={logo} alt="" />
        <ul>
          <li><NavLink to="/main">Поиск</NavLink></li>
          <li><NavLink to="/favorite">Избранное</NavLink></li>
        </ul>
        <li className="header__exit blue"><NavLink to="/" onClick={handleExit}>Выйти</NavLink></li>
      </div>
    </div>
    <Outlet />
    </>
  )
}

export default Header