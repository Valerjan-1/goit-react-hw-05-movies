import { useState, useEffect } from 'react';
import { moviesFetch } from '../../api';
import { MoviesList } from '../../components/MoviesList/MoviesList';

const Home = () => {
  const [trendingFilms, setTrendingFilms] = useState([]);

  useEffect(() => {
    moviesFetch()
      .then(response => {
        setTrendingFilms(response);
      })
      .catch(({ message }) => {
        console.log(message);
      });
  }, []);

  if (!trendingFilms.length) {
    return <p>404 Not Found</p>;
  }

  return (
    <div>
      <MoviesList movies={trendingFilms} />
    </div>
  );
};

export default Home;