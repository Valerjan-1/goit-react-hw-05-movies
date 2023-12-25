import { searchMovieById } from '../../api';
import { useEffect, useState, useRef } from 'react';
import image from 'images/notFound.jpg';
import {  Link,  NavLink,  Outlet,  useLocation,  useParams,} from 'react-router-dom';


const MovieDetails = () => {
  const { moviesId } = useParams();
  const location = useLocation();
  const refLocation = useRef(location.state?.location);
  const from = location.state?.from ?? '/';
  const [movieById, setMovieById] = useState(null);
  useEffect(() => {
    searchMovieById(moviesId)
      .then(response => {
        setMovieById(response);
      })
      .catch(({ message }) => {
        console.log(message);
      });
  }, [moviesId]);

  if (!movieById) {
    return <p>404 Not Found</p>;
  }
  const { title, poster_path, release_date, vote_average, overview, genres } =
    movieById;
  return (
    <div>
      <Link to={refLocation.current ?? '/'}>
        Go back
      </Link>
      <div>
        <img
          src={
            poster_path
              ? `https://image.tmdb.org/t/p/w500${poster_path}`
              : image
          }
          alt={title}
          width="300"
          height="400"
        />
        <div>
          <h2>
            {title}({new Date(release_date).getFullYear()})
          </h2>
          <p>User Score: {Math.floor(vote_average * 10)}%</p>
          <h3>Overview</h3>
          <p>{overview}</p>
          <h2>Genres</h2>
          <p>{genres ? genres.map(genre => genre.name).join(' ') : '-'}</p>
        </div>
      </div>
      <div>
        <div>
          <NavLink to="cast" state={{ from: from }}>
            Cast
          </NavLink>
          <NavLink to="reviews" state={{ from: from }}>
            Reviews
          </NavLink>
        </div>
        <Outlet />
      </div>
    </div>
  );
};

export default MovieDetails;