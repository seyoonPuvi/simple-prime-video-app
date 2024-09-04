// Write your code here
import MoviesSlider from '../MoviesSlider'
import './index.css'

const PrimeVideo = props => {
  const {moviesList} = props

  const onRenderActionMovieList = () => {
    const actionMovieList = moviesList.filter(
      movie => movie.categoryId === 'ACTION',
    )
    console.log(actionMovieList)

    return <MoviesSlider movieList={actionMovieList} />
  }

  const onRenderComedyMovieList = () => {
    const comedyMovieList = moviesList.filter(
      movie => movie.categoryId === 'COMEDY',
    )
    console.log(comedyMovieList)

    return <MoviesSlider movieList={comedyMovieList} />
  }

  return (
    <div className="app-cont">
      <img
        src="https://assets.ccbp.in/frontend/react-js/prime-video-img.png"
        alt="prime video"
        className="prime-logo"
      />
      <div className="movie-list-cont">
        <h1 className="category-name">Action Movies</h1>
        {onRenderActionMovieList()}
        <h1 className="category-name">Comedy Movies</h1>
        {onRenderComedyMovieList()}
      </div>
    </div>
  )
}

export default PrimeVideo
