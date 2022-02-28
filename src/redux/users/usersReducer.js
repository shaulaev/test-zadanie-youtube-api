import users from "./users.json"

const initialState = {
  users: users,
  favorite: [
    {
      favorite: "Смешарики",
      videosCount: 12
    },
    {
      favorite: "Как верстать",
      videosCount: 20
    },
    {
      favorite: "Как быть успешным",
      videosCount: 5
    }
  ],
  changedFavorite: null,
  token: null
}

export const usersReducer = (state = initialState, action) => {
  switch(action.type){
    case "login":
      return {...state,
      token: action.payload
      }
    case "delete/token": 
      return {
        ...state,
        token: null
      }
    case "add/toChanged/token":
      return {
        ...state,
        changedFavorite: action.payload
      }
    case "user/favorite/":
      return {
        ...state,
        users: users,
        favorite: state.favorite.push(action.payload.favorite)
      }
    default: 
      return state
  }
}

export const signIn = (argument) => {
  return (dispatch) => {
    const goodLogin = initialState.users.find((item) =>
    item.login === argument.login 
      && 
    item.password === argument.password)
    if(!!goodLogin) {
       localStorage.setItem("token", argument.login)
       dispatch({type: "login", payload: argument.login})
    }else{
      alert("Неверный логин или пароль.")
   }
  }
}