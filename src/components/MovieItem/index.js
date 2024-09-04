// Write your code here
import Popup from 'reactjs-popup'
import {IoMdClose} from 'react-icons/io'
import ReactPlayer from 'react-player'
import './index.css'

const MovieItem = props => {
  const {movieData} = props
  const {thumbnailUrl, videoUrl} = movieData

  return (
    <>
      <Popup
        modal
        trigger={
          <button className="movie-card" type="button">
            <img src={thumbnailUrl} alt="thumbnail" className="thumbnail-img" />
          </button>
        }
      >
        {close => (
          <div className="popup-content">
            <button
              type="button"
              className="close-btn"
              onClick={() => close()}
              data-testid="closeButton"
              aria-label="close"
            >
              <IoMdClose className="close-icon" />
            </button>
            <ReactPlayer url={videoUrl} controls height="20rem" width="38rem" />
          </div>
        )}
      </Popup>
    </>
  )
}

export default MovieItem
