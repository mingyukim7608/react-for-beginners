import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import styles from "./Movie.module.css";

const Movie = ({ movieId, coverImg, title, year, summary, genres }) => {
  return (
    <Link to={`/movie/${movieId}`}>
      <div className={styles.movie}>
        <img src={coverImg} alt={title} className={styles.movie__img} />
        <div>
          <h2 className={styles.movie__title}>{title}</h2>
          <h3 className={styles.movie__year}>{year}</h3>
          <p>
            {summary.length <= 235 ? summary : summary.slice(0, 235) + "..."}
          </p>
          <ul className={styles.movie__genres}>
            {genres.map((genre) => (
              <li key={genre}>{genre}</li>
            ))}
          </ul>
        </div>
      </div>
    </Link>
  );
};

Movie.propTypes = {
  coverImg: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  summary: PropTypes.string.isRequired,
  genres: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Movie;
