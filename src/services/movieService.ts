import axios from 'axios';
import type { Movie, MoviesResponse } from '../types/movie';

const api = axios.create({
  baseURL: 'https://api.themoviedb.org/3',
  headers: {
    Authorization: `Bearer ${import.meta.env.VITE_TMDB_TOKEN}`,
    accept: 'application/json',
  },
});

export const fetchMovies = async (query: string): Promise<Movie[]> => {
  const { data } = await api.get<MoviesResponse>('/search/movie', {
    params: { query },
  });

  return data.results;
};
