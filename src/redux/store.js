import { applyMiddleware, createStore, combineReducers } from "redux";
import { createLogger } from "redux-logger"
import  thunk  from "redux-thunk"
import { usersReducer } from "./users/usersReducer";
import { videosReducer } from "./videos/videosReducer";

const rootReducers = combineReducers ({
  users: usersReducer,
  videos: videosReducer
})

const logger = createLogger ({
  diff: thunk,
  collapsed: true
})

export const store = createStore(rootReducers, applyMiddleware(thunk, logger))