const initialState = {
  videos: null,
  searchText: null,
  pending: false
}

export const videosReducer = (state = initialState, action) => {
  switch(action.type) {
    case "videos/load/pending":
      return {
        ...state, 
        pending: true
      };
      case "videos/load/fulfilled":
        return {
          ...state,
          videos: action.payload.data,
          searchText: action.payload.text,
          pending: false
        }

    default: 
      return state
  }
}

export const loadVideos = (searchText, videosCount = 12) => {

  const YOUTUBE_API = "https://youtube.googleapis.com/youtube/v3/search"
  const key = "AIzaSyCXMS8OGTC6fDFL5FW7PETQblLILdy5tT4"

  return (dispatch) => {
    dispatch({type: "videos/load/pending"})
    fetch(`${YOUTUBE_API}?part=snippet&type=video&order=viewCount&q=${searchText.toLowerCase()}&maxResults=${videosCount}&key=${key}`, {
      method: "GET",
    }).then(res => res.json())
    .then(data => dispatch({type: "videos/load/fulfilled", payload: {data: data, text: searchText}}))
  }
}