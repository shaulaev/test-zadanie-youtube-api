import { Routes, Route } from "react-router-dom";
import SignIn from "./components/SignIn/SignIn";
import MainPage from "./components/Main/MainPage";
import Favorite from "./components/Favorite/Favorite";
import Header from "./components/Header/Header";
import { useSelector } from "react-redux";

function App() {
  const token = useSelector((state) => state.users.token);

  if (!token) {
    return (
      <div className="App">
        <Routes>
          <Route element={<SignIn />} path="*" />
        </Routes>
      </div>
    );
  }
  return (
    <div className="App">
      <Routes>
        <Route element={<Header />} path="/">
          <Route element={<MainPage />} path="/main" />
          <Route element={<Favorite />} path="/favorite" />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
