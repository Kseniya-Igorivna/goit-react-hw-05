import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { searchMovies } from "../../Api";
import MovieList from "../../components/MovieList/MovieList";
import styles from "./MoviesPage.module.css";

export default function MoviesPage() {
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get("query") || "";
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    if (query) {
      searchMovies(query).then(setMovies);
    }
  }, [query]);

  const handleSubmit = e => {
    e.preventDefault();
    const searchQuery = e.target.elements.query.value.trim();
    if (searchQuery === "") {
      return;
    }
    setSearchParams({ query: searchQuery });
  };

  return (
    <div className={styles.container}>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="query"
          defaultValue={query}
          placeholder="Search movies..."
        />
        <button type="submit">Search</button>
      </form>
      <MovieList movies={movies} />
    </div>
  );
}
