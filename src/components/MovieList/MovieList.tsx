import type { Movie } from '../../types/movie';
import MovieCard from '../MovieCard/MovieCard';
import styles from './MovieList.module.css';

interface MovieListProps {
  movies: Movie[];
  onSelect: (movie: Movie) => void;
}

const MovieList = ({ movies, onSelect }: MovieListProps) => {
  if (movies.length === 0) {
    return <p className={styles.empty}>Фільмів не знайдено.</p>;
  }

  return (
    <ul className={styles.list}>
      {movies.map((movie) => (
        <li key={movie.id}>
          <MovieCard movie={movie} onSelect={onSelect} />
        </li>
      ))}
    </ul>
  );
};

export default MovieList;
