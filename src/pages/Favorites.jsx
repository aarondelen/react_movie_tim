import MovieCard from "@/components/MovieCard";
import { useMovieContext } from "@/contexts/MovieContext";

const Favorites = () => {
const { favorites } = useMovieContext();

  if (favorites) {
    return (
      <div className="p-8 w-full box-border">
        <h2 className="mb-8 text-center text-4xl text-white text-shadow-md">
          Your Favorites
        </h2>
        <div className="grid gap-6 p-4 w-full box-border [grid-template-columns:repeat(auto-fit,minmax(250px,1fr))]">
          {favorites.map((movie) => (
            //   movie.title.toLowerCase().trim().includes(searchQuery.toLowerCase().trim()) &&
            <MovieCard key={movie.id} movie={movie} />
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="text-center py-16 px-8 bg-[rgba(255, 255, 255, 0.05)] rounded-xl my-8 mx-auto w-[600px]">
      <h2 className="text-4xl text-[#e50914] font-semibold mb-4">
        No Favorite Movies Yet
      </h2>
      <p className="text-lg leading-relaxed text-muted-foreground">
        Start adding movies to your favorites and they will appear here!
      </p>
    </div>
  );
};

export default Favorites;
