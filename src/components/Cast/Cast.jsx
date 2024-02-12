import { useEffect, useState } from 'react';
import axios from 'axios';
import { Loader } from 'components/Loader/Loader';

const Cast = ({ movieId }) => {
  const [castList, setCastList] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCast = async () => {
      try {
        setIsLoading(true);
        const { data } = await axios.get(
          `https://api.themoviedb.org/3/movie/${movieId}/credits?language=en-US&api_key=a98bc7353de84626309d54158846e0b4`
        );

        setCastList(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setIsLoading(false);
      }
    };

    fetchCast();
  }, [movieId]);

  return (
    <div>
      {isLoading && <Loader />}
      {error != null && <p>Sorry, an error occurred {error}!</p>}
      {castList.cast &&
        castList.cast.map(actor => (
          <div key={actor.id}>
            <img
              src={`https://image.tmdb.org/t/p/w500/${actor.profile_path}`}
              alt={actor.name}
              width={100}
              height={150}
            />

            <li>
              {actor.name}
              <p>Character: {actor.character}</p>
            </li>
          </div>
        ))}
    </div>
  );
};

export default Cast;
