import type { MouseEvent } from 'react';
import type { Movie } from '../../types/movie';
import styles from './MovieCard.module.css';

interface MovieCardProps {
  movie: Movie;
  onSelect: (movie: Movie) => void;
}

const MovieCard = ({ movie, onSelect }: MovieCardProps) => {
  const handleClick = (_event: MouseEvent<HTMLButtonElement>) => {
    onSelect(movie);
  };

  return (
    <article className={styles.card}>
      {movie.posterUrl && (
        <img
          className={styles.poster}
          src={movie.posterUrl}
          alt={movie.title}
        />
      )}
      <h2 className={styles.title}>{movie.title}</h2>
      <p className={styles.rating}>Рейтинг: {movie.rating}</p>
      <button className={styles.button} type="button" onClick={handleClick}>
        Детальніше
      </button>
    </article>
  );
};

export default MovieCard;
