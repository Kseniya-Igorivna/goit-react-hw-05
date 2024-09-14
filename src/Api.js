import axios from "axios";

const API_URL = "https://api.themoviedb.org/3";
const API_TOKEN =
  "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1YzZlODMwMWMyMzNhYTIxNGZiYTZkNWJiYmFjMzA2YyIsIm5iZiI6MTcyNjMyNjU3Mi42NjE2NDEsInN1YiI6IjY2ZTVhNTQwNmEyYmRkNDAwNGZkN2Q2ZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.VK2UiRjYZYZfplbdkdevnah3SRKWDnWPHhDsaxVSe6U";

const axiosInstance = axios.create({
  baseURL: API_URL,
  headers: {
    Authorization: API_TOKEN,
  },
});

export const fetchTrendingMovies = async () => {
  const response = await axiosInstance.get("/trending/movie/day");
  return response.data.results;
};

export const searchMovies = async query => {
  const response = await axiosInstance.get(`/search/movie?query=${query}`);
  return response.data.results;
};

export const fetchMovieDetails = async movieId => {
  const response = await axiosInstance.get(`/movie/${movieId}`);
  return response.data;
};

export const fetchMovieCredits = async movieId => {
  const response = await axiosInstance.get(`/movie/${movieId}/credits`);
  return response.data.cast;
};

export const fetchMovieReviews = async movieId => {
  const response = await axiosInstance.get(`/movie/${movieId}/reviews`);
  return response.data.results;
};
