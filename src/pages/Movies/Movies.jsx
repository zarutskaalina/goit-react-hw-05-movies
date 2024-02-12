import { useSearchParams } from 'react-router-dom';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { Loader } from 'components/Loader/Loader';
import { LinkList } from 'pages/Home/Home.styled';
import { SearchForm, InputFile, Button } from './Movies.styled';

const Movies = () => {
  const [searhParams, setSearhParams] = useSearchParams();
  const [searchedMovie, setSearchedMovie] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const queryValue = searhParams.get('query');

  //функція на відправлення пошуку
  const onFormSubmit = e => {
    e.preventDefault();
    // беремо значення яке водиться в поле
    const searchValue = e.currentTarget.elements.searchKey.value;
    // встановлюємо значення пол в параметр
    setSearhParams({ query: searchValue });
  };

  useEffect(() => {
    if (!queryValue) return;
    const fetchSearchedMovies = async () => {
      try {
        setIsLoading(true);
        const { data } = await axios.get(
          `https://api.themoviedb.org/3/search/movie?query=${queryValue}&include_adult=false&language=en-US&page=1&api_key=a98bc7353de84626309d54158846e0b4`
        );
        setSearchedMovie(data.results);
      } catch (error) {
        setError(error.message);
      } finally {
        setIsLoading(false);
      }
    };

    fetchSearchedMovies();
  }, [queryValue]);

  return (
    <div>
      <SearchForm onSubmit={onFormSubmit}>
        <label>
          <InputFile
            type="text"
            name="searchKey"
            required
            placeholder="Search"
          />
        </label>
        <Button type="submit">Search</Button>
      </SearchForm>
      <ul>
        {isLoading && <Loader />}
        {error != null && <p>Sorry, an error occurred {error}!</p>}
        {searchedMovie !== null &&
          searchedMovie.map(movie => (
            <li key={movie.id}>
              <LinkList to={`/movies/${movie.id}/`}>
                <p>{movie.title || movie.name}</p>
              </LinkList>
            </li>
          ))}
      </ul>
    </div>
  );
};

export default Movies;
