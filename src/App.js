import {Routes, Route} from "react-router-dom"
import SignIn from "./components/SignIn/SignIn";
import MainPage from "./components/Main/MainPage";
import Favorite from "./components/Favorite/Favorite";
import Header from "./Header/Header";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route element={<Header/>} path="/">
          <Route element={<MainPage/>} path="/main"/>
          <Route element={<Favorite/>} path="/favorite"/>
        </Route>
        <Route element={<SignIn/>} index />
      </Routes>
    </div>
  );
}

export default App;
