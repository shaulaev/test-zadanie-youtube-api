import React, {useState} from 'react'
import { useSelector } from "react-redux"

function OneVideo({text}) {

  const videos = useSelector((state) => state.videos.videos)
  const searchText = useSelector(state => state.videos.searchText)

  const [grid, setGrid] = useState(true)
  const [list, setList] = useState(false)

  const handleSetGrid = () => {
    setGrid(!grid)
    setList(!list)
  }

  return (
    <div className='video'>
      <ul>
          <div className='video__info__grid'>     
            {videos &&
            <> 
            <span className='video__count'>Видео по запросу <b>«{text ? text : searchText}» </b>
              <span className='video__count__gray'>
                {videos && videos.pageInfo.totalResults}
              </span>
            </span>
            <div className='btn__flex'>
            <button onClick={handleSetGrid} className={grid ? "main__form__grid_on" : "main__form__grid"}></button>
            <button onClick={handleSetGrid} className={list ? "main__form__list_on" : "main__form__list"}></button>
            </div>
            </>
            }
          </div>
          <div className={grid ? 'video__block__grid' : null}>
            {videos && videos.items.map((item) => {
              const { id, snippet = {} } = item
              const { title, channelTitle, thumbnails = {} } = snippet
              const { medium = {}, high = {} } = thumbnails
              return (
              <a key={id.videoId} className='videos__link' href={`https://www.youtube.com/watch?v=${id.videoId}`} >
              {grid ? 
                <div className="videos">
                  <div className='one__video'>
                    <img src={high.url} alt="" />
                    <li >{title}</li>
                    <li className="channel">{channelTitle}</li>
                  </div>
                </div>
              :
              <div className="videos">
                <div className='test__video'>
                  <img src={medium.url} height={medium.height} width={medium.width} alt="" />
                  <div className='title__channel'>
                    <li className='title'>{title}</li>
                    <div className='channel__box'>
                       <li className="channel">{channelTitle}</li>
                    </div>
                  </div>
                </div>
              </div>
              }
              </a>
              )
            })}
          </div>
      </ul>
    </div>
  )
}

export default OneVideo