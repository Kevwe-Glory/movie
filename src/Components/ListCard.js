import React from 'react';

const MovieCard = ({ movie }) => {
  return (
    <div className='movie'>
      <div>
        <p>{movie.release_date}</p>
      </div>
      <div>
        <img
          src={
            movie.poster_path
              ? `https://image.tmdb.org/t/p/w400${movie.poster_path}`
              : 'https://via.placeholder.com/400'
          }
          alt={movie.title}
        />
      </div>
      <span>{movie.media_type}</span>
      <h3>{movie.title}</h3>
    </div>
  );
};

export default MovieCard;
