import { useEffect, useState } from 'react';
import axios from 'axios';
import { Loader } from 'components/Loader/Loader';
import { TrendingMovie } from './Home.styled';
import { TitleHomePage } from './Home.styled';
import { CustomLink } from 'components/SharedLayout/SharedLayout.styled';

const Home = () => {
  const [moviesList, setMoviesList] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!moviesList) return;
    const fetchMovies = async () => {
      try {
        setIsLoading(true);
        const response = await axios.get(
          'https://api.themoviedb.org/3/trending/all/day?language=en-US&api_key=a98bc7353de84626309d54158846e0b4'
        );

        const data = response.data.results;
        setMoviesList(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setIsLoading(false);
      }
    };

    fetchMovies();
  });

  return (
    <div>
      <TitleHomePage>Trending today</TitleHomePage>
      {isLoading && <Loader />}
      {error != null && <p>Sorry, an error occurred {error}!</p>}
      <ul>
        {moviesList.map(movie => (
          <li key={movie.id}>
            <CustomLink to={`/movies/${movie.id}/`}>
              <TrendingMovie>{movie.title || movie.name}</TrendingMovie>
            </CustomLink>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Home;
