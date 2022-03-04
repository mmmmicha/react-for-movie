import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import style from './Movie.module.css';
function Movie({ id, medium_cover_image, title, year, summary, genres }) {
  return (
    <div className={style.movie}>
      <img
        src={medium_cover_image}
        alt={title}
        className={style.movie__img}
      ></img>
      <div>
        <h2 className={style.movie__title}>
          <Link to={`/movie/${id}`}>{title}</Link>
        </h2>
        <h3 className={style.movie__year}>{year}</h3>
        <p>{summary.length > 235 ? `${summary.slice(0, 235)}...` : summary}</p>
        <ul className={style.movie__genres}>
          {genres.map((e) => (
            <li key={e}>{e}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

Movie.propTypes = {
  medium_cover_image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  summary: PropTypes.string.isRequired,
  genres: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Movie;
