import axios from 'axios';
import type { Movie, MoviesResponse } from '../types/movie';

const api = axios.create({
  baseURL: 'https://api.example.com',
});

export const fetchMovies = async (query: string): Promise<Movie[]> => {
  const { data } = await api.get<MoviesResponse>('/movies', {
    params: { query },
  });

  return data.results;
};

export default api;
