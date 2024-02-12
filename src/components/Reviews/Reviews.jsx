import { useEffect, useState } from 'react';
import axios from 'axios';
import { Loader } from '../Loader/Loader';

const Reviews = ({ movieId }) => {
  const [reviews, setReviews] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        setIsLoading(true);
        const { data } = await axios.get(
          `https://api.themoviedb.org/3/movie/${movieId}}/reviews?language=en-US&page=1&api_key=a98bc7353de84626309d54158846e0b4`
        );
        setReviews(data.results);
      } catch (error) {
        setError(error.message);
      } finally {
        setIsLoading(false);
      }
    };

    fetchReviews();
  }, [movieId]);

  return (
    <div>
      {isLoading && <Loader />}
      {error != null && <p>Sorry, an error occurred {error}!</p>}
      {reviews.map(review => (
        <div key={review.id}>
          <p>Author: {review.author}</p>
          {review.content !== '' ? (
            <p>{review.content}</p>
          ) : (
            <p>Sorry, there are no reviews!</p>
          )}
        </div>
      ))}
    </div>
  );
};

export default Reviews;
