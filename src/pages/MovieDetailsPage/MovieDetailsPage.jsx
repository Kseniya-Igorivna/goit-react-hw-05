import { useEffect, useState } from "react";
import { useParams, Link, Outlet, useNavigate } from "react-router-dom";
import { fetchMovieDetails } from "../../Api";
import styles from "./MovieDetailsPage.module.css";

export default function MovieDetailsPage() {
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    fetchMovieDetails(movieId).then(setMovie);
  }, [movieId]);

  const goBack = () => {
    navigate(-1);
  };

  return (
    <div className={styles.container}>
      <button onClick={goBack} className={styles.goBackButton}>
        Go back
      </button>

      {movie && (
        <>
          <img
            src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
            alt={movie.title}
            className={styles.poster}
          />
          <h1>{movie.title}</h1>
          <p>{movie.overview}</p>
          <div className={styles.linksContainer}>
            <Link to="cast" className={styles.link}>
              Cast
            </Link>
            <Link to="reviews" className={styles.link}>
              Reviews
            </Link>
          </div>
          <Outlet />
        </>
      )}
    </div>
  );
}
