import { Suspense, lazy, useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { Route, Routes, Link } from 'react-router-dom';
import { CustomLink } from './SharedLayout/SharedLayout.styled';
import { useLocation } from 'react-router-dom';
import { Loader } from './Loader';

const Cast = lazy(() => import('components/Cast'));
const Reviews = lazy(() => import('components/Reviews'));

const MovieDetails = () => {
  const { movieId } = useParams();
  const [movieDetails, setMoviesDetails] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const location = useLocation();
  const backLinkHref = location.state?.from ?? '/products';

  useEffect(() => {
    const fetchMovieDetails = async () => {
      try {
        setIsLoading(true);
        const { data } = await axios.get(
          `https://api.themoviedb.org/3/movie/${movieId}?language=en-US&api_key=a98bc7353de84626309d54158846e0b4`
        );
        setMoviesDetails(data);
        console.log(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setIsLoading(false);
      }
    };

    fetchMovieDetails();
  }, [movieId]);

  const dateString = movieDetails.release_date;
  const year = new Date(dateString).getFullYear();

  return (
    <div>
      <Link to={backLinkHref}>
        <button type="button">Go Back</button>
      </Link>

      {isLoading && <Loader />}
      {error != null && <p>Sorry, an error occurred {error}!</p>}

      <div>
        <img
          src={`https://image.tmdb.org/t/p/w500${movieDetails.backdrop_path}`}
          alt={movieDetails.title}
        />
      </div>

      <div>
        <h2>
          {movieDetails.title} ({year})
        </h2>
        <h3>Overview</h3>
        <p>{movieDetails.overview}</p>
        <h4>Genres</h4>
        {movieDetails.genres &&
          movieDetails.genres.map(genre => (
            <li key={genre.id}>{genre.name}</li>
          ))}
      </div>

      <div>
        <p>Additional information</p>
        <ul>
          <li>
            <CustomLink to={`${movieId}/cast`}>Cast</CustomLink>
          </li>
          <li>
            <CustomLink to={`${movieId}/reviews`}>Reviews</CustomLink>
          </li>
        </ul>

        <Suspense fallback={<Loader />}>
          <Routes>
            <Route path=":movieId/cast" element={<Cast movieId={movieId} />} />
            <Route
              path=":movieId/reviews"
              element={<Reviews movieId={movieId} />}
            />
          </Routes>
        </Suspense>
      </div>
    </div>
  );
};

export default MovieDetails;
