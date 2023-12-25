import { MoviesList } from '../../components/MoviesList/MoviesList';
import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { searchMoviesByName } from '../../api';
import FormSearch from '../../components/SearchForm';
import css from './movies.css';

const Movies = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [movies, setMovies] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get('query');

  useEffect(() => {
    const fetchMovie = async () => {
      if (!query) {
        return;
      }
      try {
        const response = await searchMoviesByName(query);
        setMovies(response);
      } catch (error) {
        console.log(error);
      }
    };

    fetchMovie();
  }, [query]);

  const handleSubmit = event => {
    event.preventDefault();
    setSearchParams({ query: searchQuery });
    setSearchQuery('');
  };

  return (
    <div className={css.moviesTitle}>
      <FormSearch
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        handleSubmit={handleSubmit}
      />
      <MoviesList movies={movies} />
    </div>
  );
};

export default Movies;