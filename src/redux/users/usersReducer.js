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
}

export const usersReducer = (state = initialState, action) => {
  switch(action.type){
    case "login":
      return state

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

export const signIn = async (payload) => {
  const goodLogin = initialState.users.find((item) =>
  item.login === payload.login 
    && 
  item.password === payload.password)
  if(!!goodLogin) {
    await localStorage.setItem("token", payload.login)
    window.location.reload()
  }else{
    alert("Неверный логин или пароль.")
  }
}