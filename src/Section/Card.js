import React from 'react';
// import ErrorMessage from '../Components/ErrorMessage';

const Card = ({ movie, onMovieClick }) => {
  if (!movie) {
    return null; // or handle the case of missing data
  }
  const { title, year, rating, type } = movie;

  return (
    <div className="bg-white p-4 m-2 border rounded-lg cursor-pointer" onClick={() => onMovieClick(movie)}>
      <h3 className="text-lg font-semibold">{title}</h3>
      <p className="text-sm">Year: {year}</p>
      <p className="text-sm">Rating: {rating}</p>
      <p className="text-sm">Type: {type}</p>
    </div>
  );
};

export default Card;
