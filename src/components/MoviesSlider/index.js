// Write your code here
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import MovieItem from '../MovieItem'

const MoviesSlider = props => {
  const {movieList} = props
  const settings = {
    dots: false,
    slidesToShow: 4,
    slidesToScroll: 1,
  }

  const onRenderMovieItem = () =>
    movieList.map(each => <MovieItem key={each.id} movieData={each} />)

  return (
    <div className="slider-cont">
      <Slider {...settings}>{onRenderMovieItem()}</Slider>
    </div>
  )
}

export default MoviesSlider
