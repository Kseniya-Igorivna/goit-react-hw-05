import { useEffect, useState } from "react";
import { useParams, Link, Outlet } from "react-router-dom";
import { fetchMovieDetails } from "../../Api";
import styles from "./MovieDetailsPage.module.css";

export default function MovieDetailsPage() {
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    fetchMovieDetails(movieId).then(setMovie);
  }, [movieId]);

  return (
    <div className={styles.container}>
      {movie && (
        <>
          <img
            src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
            alt={movie.title}
            className={styles.poster}
          />
          <h1>{movie.title}</h1>
          <p>{movie.overview}</p>
          <Link to="cast" className={styles.link}>
            Cast
          </Link>
          <Link to="reviews" className={styles.link}>
            Reviews
          </Link>
          <Outlet />
        </>
      )}
    </div>
  );
}
