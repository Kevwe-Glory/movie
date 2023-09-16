// import React from 'react'
// import searchIcon from './search.svg';
// import { useEffect, useState } from 'react';

// const API_KEY = '574cf5f71934e72f9ea4dae5640ea158';
// const API_URL = `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}`;

// const Hero = () => {
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
//     <div>
//       <div className='search'>
//         <input
//           placeholder='Search for a movie...'
//           value={searchTerm}
//           onChange={(e) => setSearchTerm(e.target.value)}
//         />
//         <img src={searchIcon} alt='search' onClick={() => searchMovies(searchTerm)} />
//       </div>
//     </div>
//   )
// }

// export default Hero


import React from 'react';
import Search from '../Components/Search';

const Hero = () => {
  return (
    <div>
      <Search />
    </div>
  )
}

export default Hero