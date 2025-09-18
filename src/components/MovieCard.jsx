import { useState } from "react";
import { useMovieContext } from "../contexts/MovieContext";

const MovieCard = ({ movie }) => {
  const { addToFavorites, removeFromFavorites, isFavorite } = useMovieContext();
  const fav = isFavorite(movie.id);
  
  const toggleFav = (e) => {
    e.preventDefault();

    if (isFavorite(movie.id)) removeFromFavorites(movie.id);
    else addToFavorites(movie);
    
    // alert(`Added ${movie.title} to favorites!`);
  };

  return (
    <div className="relative rounded-lg overflow-hidden bg-[#1a1a1a] transition-all duration-250 ease-in-out h-full flex flex-col hover:translate-y-[-5px] hover:opacity-100 sm:text-lg cursor-pointer group">
      <div className="relative aspect-[2/3] w-full">
        <img
          className="w-full h-full object-cover"
          src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
          alt={movie.title}
        />
        <div className="absolute inset-0 opacity-0 transition-all duration-250 ease-in-out flex flex-col justify-end p-4 bg-[linear-gradient(to_bottom,rgba(0,0,0,0.1),rgba(0,0,0,0.8))] group-hover:opacity-100 ">
          <button
            className="absolute cursor-pointer top-4 right-4 rounded-full md:text-lg text-lg p-1 bg-[rgba(0,0,0,0.5)] w-8 h-8 md:w-10 md:h-10 flex items-center justify-center transition-all duration-250 ease-in-out hover:bg-[rgba(0,0,0,0.8)]"
            onClick={toggleFav}
          >
            {fav ? "❤️" : "🤍"}
          </button>
        </div>
      </div>
      <div className="p-3 md:p-4 flex-1 flex flex-col gap-2">
        <h3 className="text-lg m-0">{movie.title}</h3>
        <p className="text-[#999] text-sm">
          {movie.release_date?.split("-")[0]}
        </p>
        {/* <p className="bg-[rgba(0, 0, 0, 0.7)] text-white border-none p-2 rounded-sm cursor-pointer mt-2">Rating: {movie.rating}</p> */}
        <p className="text-[#ffd700] text-sm mt-auto">Rating: {movie.rating}</p>
      </div>
    </div>
  );
};

export default MovieCard;
