// just created 
import React from 'react';
import { useHistory } from 'react-router-dom';
import Card from '../Section/Card';

const MovieCards = ({ movies }) => {
  const history = useHistory();

  const handleMovieClick = (movie) => {
    // Navigate to the movie detail component with the movie's ID or any unique identifier
    history.push(`/movies/${movie.id}`);
  };

  return (
    <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-4">
      {movies.map((movie) => (
        <Card key={movie.id} movie={movie} onMovieClick={handleMovieClick} />
      ))}
    </div>
  );
};

export default MovieCards;
