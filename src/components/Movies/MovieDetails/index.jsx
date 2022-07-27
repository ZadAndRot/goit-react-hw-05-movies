import styles from '../MovieDetails/index.module.css';
import {
  useParams,
  NavLink,
  Outlet,
  Link,
  useLocation,
} from 'react-router-dom';
import { useState, Fragment, useEffect } from 'react';
import axios from 'axios';

const MovieDetails = () => {
  const [data, setData] = useState([]);
  const { movieId } = useParams('');
  const location = useLocation();
  const backLinkHref = location.state.from ?? '/goit-react-hw-05-movies';

  useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/movie/${movieId}?api_key=d33121ec8e4d8e2727fc1b2edf68984b&language=en-US`
      )
      .then(res => {
        setData(res.data);
        console.log(res.data);
      })
      .catch(err => console.log(err));
  }, [movieId]);

  return (
    <Fragment>
      {data.genres && (
        <Fragment>
          <Link to={backLinkHref}>Back to products</Link>
          <div className={styles.flex}>
            <div>
              <img
                src={`https://image.tmdb.org/t/p/w200${data.poster_path}`}
                alt=" "
              />
            </div>
            <div>
              <h1>{data.original_title} </h1>
              <p>
                User sore:{(Math.floor(Number(data.vote_average)) / 10) * 100}%
              </p>
              <h3>Overwiev</h3>
              <p>{data.overview}</p>
              <h3>Genres</h3>
              <p>
                {data.genres.map(el => (
                  <span key={el.id}>{el.name} </span>
                ))}
              </p>
            </div>
          </div>
          <div className={styles.add}>
            <h3>Additional information</h3>
            <ul>
              <li>
                <NavLink state={{ from: backLinkHref }} to="cast">
                  Cast
                </NavLink>
                <br />
              </li>
              <li>
                <NavLink state={{ from: backLinkHref }} to="reviews">
                  Reviews
                </NavLink>
              </li>
            </ul>

            <Outlet />
          </div>
        </Fragment>
      )}
    </Fragment>
  );
};

export default MovieDetails;
