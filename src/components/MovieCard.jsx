import { HeartIcon } from "lucide-react";

const MovieCard = ({ movie }) => {
  const onFavoriteClick = () => {
    alert("Added to favorites: " + movie.title);
  };

  return (
    <div className="movie-card">
      <div className="movie-poster">
        <img src={movie.url} alt={movie.title} />
        <div className="movie-overlay">
          <button className="favorite-button" onClick={() => onFavoriteClick()}>
            <HeartIcon />
          </button>
        </div>
      </div>
      <div className="movie-info">
        <h3 className="">{movie.title}</h3>
        <p className="">{movie.release_date}</p>
        <p className="">Rating: {movie.rating}</p>
      </div>
    </div>
  );
};

export default MovieCard;
