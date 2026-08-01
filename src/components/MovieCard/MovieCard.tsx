import type { Movie } from '../../types/movie';
import styles from './MovieCard.module.css';

interface MovieCardProps {
  movie: Movie;
  onSelect: (movie: Movie) => void;
}

const IMAGE_BASE_URL = 'https://image.tmdb.org/t/p/w500';

const MovieCard = ({ movie, onSelect }: MovieCardProps) => {
  const handleClick = () => {
    onSelect(movie);
  };

  return (
    <article className={styles.card}>
      {movie.poster_path && (
        <img
          className={styles.poster}
          src={`${IMAGE_BASE_URL}${movie.poster_path}`}
          alt={movie.title}
          loading="lazy"
        />
      )}
      <h2 className={styles.title}>{movie.title}</h2>
      <p className={styles.rating}>Рейтинг: {movie.vote_average.toFixed(1)}</p>
      <button className={styles.button} type="button" onClick={handleClick}>
        Детальніше
      </button>
    </article>
  );
};

export default MovieCard;