import React from 'react'
import MovieCard from '@/components/MovieCard'

const Home = () => {
    const movies = [
        {
            id: 1,
            title: "Inception",
            release_date: "2010-07-16",
            url: "https://m.media-amazon.com/images/M/MV5BMjAxMzY3Njc4Nx5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_.jpg",
            rating: 8.8
        },
        {
            id: 2,
            title: "The Dark Knight",
            release_date: "2008-07-18",
            url: "https://m.media-amazon.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_.jpg",
            rating: 9
        },
        {
            id: 3,
            title: "The Dark Knight Rises",
            release_date: "2012-07-20",
            url: "https://m.media-amazon.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_.jpg",
            rating: 8.5
        },
    ];

  return (
    <div className='home'>
        {movies.map((movie) => (
            <MovieCard key={movie.id} movie={movie} />
        ))}
    </div>
  )
}

export default Home
