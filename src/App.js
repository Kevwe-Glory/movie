import React from 'react';
import './App.css';
import HomePage from './Section/HomePage';
import { Routes, Route, Link } from 'react-router-dom';
import MovieDetail from './Components/MovieDetail';
// import MovieCard from './Section/MovieCard';


const App = () => {
  return (
    <>
      <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/movies/:id" element={<MovieDetail />} />
    </Routes>
    </>
  );
}

export default App;