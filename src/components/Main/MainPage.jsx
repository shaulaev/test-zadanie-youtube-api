import "./style.css";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loadVideos } from "../../redux/videos/videosReducer";
import { NavLink } from "react-router-dom";
import OneVideo from "./OneVideo";

function MainPage() {
  const [value, setValue] = useState("");
  const [favorite, setFavorite] = useState(false);
  const [modal, setModal] = useState(false);

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  const dispatch = useDispatch();

  const handleLoadVideos = () => {
    dispatch(loadVideos(value));
  };

  const handleAddFavorite = (payload) => {
    setFavorite(!favorite);
    setModal(!modal);
  };

  const pending = useSelector((state) => state.videos.pending);

  return (
    <div className="main">
      <div className="main__form">
        <div className="main__relative">
          <h1>Поиск видео</h1>
          <input
            type="text"
            onChange={(e) => handleChange(e)}
            value={value}
            placeholder="Что хотите посмотреть?"
          />
          <div
            className={modal ? "modal__on" : "modal__off"}
            onClick={() => setModal(!modal)}
          >
            <p className="gray">Поиск сохранён в разделе «Избранное»</p>
            <NavLink to="/favorite">
              <p className="blue">Перейти в избранное</p>
            </NavLink>
          </div>
          <button
            disabled={value ? false : true}
            className={
              favorite ? "main__form__favorite__on" : "main__form__favorite"
            }
            onClick={() =>
              handleAddFavorite({ favorite: value, videosCount: 12 })
            }
          ></button>
          <button className="main__form__findbtn" onClick={handleLoadVideos}>
            НАЙТИ
          </button>
        </div>
      </div>
      <div className="main__videos">
        <div className="main__videos__content">
          {!pending ? (
            <OneVideo text={value} />
          ) : (
            <div className="loader__block">
              <div className="loader"></div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default MainPage;
