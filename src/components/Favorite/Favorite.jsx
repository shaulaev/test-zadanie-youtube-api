import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { loadVideos } from "../../redux/videos/videosReducer";
import { NavLink } from "react-router-dom";
import Modal from "../Modal/Modal";
import "./style.css";

function Favorite() {
  const dispatch = useDispatch();

  const titles = useSelector((state) => state.users.favorite);

  const [modal, setModal] = useState(false);
  const [rangeValue, setRangeValue] = useState("");
  const [request, setRequest] = useState("");
  const [name, setName] = useState("");
  const [sort, setSort] = useState("");

  const handleSearch = (title, searchCount) => {
    dispatch(loadVideos(title, searchCount));
  };

  const handleChange = (index) => {
    setModal(!modal);
  };

  const handleSave = (e) => {
    e.stopPropagation();
    dispatch({
      type: "change/favorite",
      payload: { request: request, videosCount: rangeValue },
    });
  };

  return (
    <div className="main">
      <div className="content">
        <h1>Избранное</h1>
        <div className="content__titles">
          {titles &&
            titles.map((item, index) => {
              return (
                <div className="one__title">
                  <NavLink key={index} to="/main">
                    <div
                      className="content__one__title"
                      onClick={() =>
                        handleSearch(item.favorite, item.videosCount)
                      }
                    >
                      {item.favorite}
                    </div>
                  </NavLink>
                  <div
                    className="content__change"
                    onClick={() => handleChange(index)}
                  ></div>
                  <div className="content__underline"></div>
                </div>
              );
            })}
        </div>
        <Modal modal={modal} setModal={setModal}>
          <h3>Сохранить запрос</h3>
          <div className="request">
            <h5>Запрос</h5>
            <input
              className="request__input"
              value={request}
              onChange={(e) => setRequest(e.target.value)}
              type="text"
              onClick={(e) => e.stopPropagation()}
            />
            <h5>Название</h5>
            <input
              className="request__input"
              value={name}
              onChange={(e) => setName(e.target.value)}
              type="text"
              onClick={(e) => e.stopPropagation()}
            />
            <h5>Сортировать по</h5>
            <input
              className="request__input"
              value={sort}
              onChange={(e) => setSort(e.target.value)}
              type="text"
              onClick={(e) => e.stopPropagation()}
            />
            <h5>Максимальное кол-во</h5>
            <div className="range__flex">
              <input
                className="range"
                type="range"
                value={rangeValue}
                onChange={(e) => setRangeValue(e.target.value)}
                id="range"
                min="0"
                max="50"
                onClick={(e) => e.stopPropagation()}
              />
              <div className="range__count">{rangeValue}</div>
            </div>
            <button className="non__save">Не сохранять</button>
            <button className="save" onClick={(e) => handleSave(e)}>
              Сохранить
            </button>
          </div>
        </Modal>
        <div className={modal ? "black__on" : "black"}></div>
      </div>
    </div>
  );
}

export default Favorite;
