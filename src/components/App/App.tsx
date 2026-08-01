import { useState } from 'react';
import type { FormEvent } from 'react';
import type { Movie } from '../../types/movie';
import { fetchMovies } from '../../services/api';
import MovieList from '../MovieList/MovieList';
import styles from './App.module.css';

const App = () => {
  const [query, setQuery] = useState('');
  const [movies, setMovies] = useState<Movie[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (query.trim() === '') {
      setError('Введіть ключове слово для пошуку.');
      return;
    }

    try {
      setError(null);
      setIsLoading(true);
      const results = await fetchMovies(query);
      setMovies(results);
    } catch {
      setError('Не вдалося завантажити фільми. Спробуйте пізніше.');
    } finally {
      setIsLoading(false);
    }
  };

  const handleSelect = (movie: Movie) => {
    console.log('Обрано фільм:', movie.title);
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Пошук фільмів</h1>

      <form className={styles.form} onSubmit={handleSubmit}>
        <input
          className={styles.input}
          type="text"
          value={query}
          onChange={(event) => setQuery(event.target.value)}
          placeholder="Введіть назву фільму"
        />
        <button className={styles.button} type="submit">
          Шукати
        </button>
      </form>

      {isLoading && <p className={styles.status}>Завантаження…</p>}
      {error && <p className={styles.error}>{error}</p>}

      <MovieList movies={movies} onSelect={handleSelect} />
    </div>
  );
};

export default App;