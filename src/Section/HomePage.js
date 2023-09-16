import React from 'react';
import Hero from './Hero';
import FeaturedMovies from './FeaturedMovies';
// import MovieCard from './MovieCard';
import Card from './Card';
import Footer from './Footer';

const HomePage = () => {
  return (
    <>
    <section>
      <Hero />
    </section>
    <section>
      <FeaturedMovies />
    </section>
    <section>
      {/* <MovieCard /> */}
    </section>
    <section>
      <Card />
    </section>
    <section>
      <Footer />
    </section>
    </>
  )
}

export default HomePage