// // import searchIcon from './search.svg';
// import { useEffect, useState } from 'react';
// import MovieCard from './MovieCard';

// const API_KEY = '574cf5f71934e72f9ea4dae5640ea158';
// const API_URL = `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}`;

// const ListMovies = () => {
//   const [movies, setMovies] = useState([]);
//   const [searchTerm, setSearchTerm] = useState('');

//   const searchMovies = async (title) => {
//     try {
//       const response = await fetch(`${API_URL}&query=${title}`);
//       if (!response.ok) {
//         throw new Error('Network response was not ok');
//       }
//       const data = await response.json();
//       setMovies(data.results); 
//     } catch (error) {
//       console.error('Error:', error);
//     }
//   };

//   useEffect(() => {
//     searchMovies('Spiderman');
//   }, []);

//   return (
//     <div className='app'>
//       <h1>Movie Discovery</h1>
//       <div className='search'>
//         <input
//           placeholder='Search for a movie...'
//           value={searchTerm}
//           onChange={(e) => setSearchTerm(e.target.value)}
//         />
//         <img src={searchIcon} alt='search' onClick={() => searchMovies(searchTerm)} />
//       </div>

//       {movies.length > 0 ? (
//         <div className='container'>
//           {movies.map((movie) => (
//             <MovieCard key={movie.id} movie={movie} />
//           ))}
//         </div>
//       ) : (
//         <div className='empty'>
//           <h2>No Movies Found</h2>
//         </div>
//       )}
//     </div>
//   );
// };

// export default ListMovies;