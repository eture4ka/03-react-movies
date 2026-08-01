// Спільні типи, що використовуються в кількох компонентах.

export interface Movie {
  id: number;
  title: string;
  overview: string;
  posterUrl: string | null;
  releaseDate: string;
  rating: number;
}

export interface MoviesResponse {
  page: number;
  results: Movie[];
  totalPages: number;
}
