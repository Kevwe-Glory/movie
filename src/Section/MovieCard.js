import React from 'react';
import { ImdbIcon, Rating } from '../asset/icon';

const MovieCard = ({ movie }) => {
  return (
    <div className='movie'>
      <div>
        <img data-testid='movie-poster'
          src={
            movie.poster_path
              ? `https://image.tmdb.org/t/p/w400${movie.poster_path}`
              : 'https://via.placeholder.com/400'
          }
          alt={movie.title}
        />
      </div>
      <div>
        <p className='text-[#9CA3AF] text-xs'data-testid='movie-release-date'>{movie.release_date}</p>
      </div>
      <span>{movie.media_type}</span>
      <h3 className="text-base  text-[#111827] font-[700] py-2" data-testid='movie-title'>{movie.title}</h3>
      <div className="flex gap-5 items-center mt-6">
            <img src={ImdbIcon} alt="imdb logo" /> 
            <img src={Rating} alt="rating logo" />
      </div>
      {/* <p className="genre-ids text-[#9CA3AF] text-xs">{genre_ids}</p> */}
    </div>
  );
};

export default MovieCard;

