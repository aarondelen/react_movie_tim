import MovieCard from "@/components/MovieCard";
import { Search } from "lucide-react";
import { useState, useEffect } from "react";
import { getTrendingMovies, searchMovies } from "@/services/api";

const Home = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getTrending = async () => {
      try {
        const trendingMovies = await getTrendingMovies();
        setMovies(trendingMovies);
      } catch (error) {
        console.error(error);
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    getTrending();
  }, []);

  // const movies = [
  //   {
  //     id: 1,
  //     title: "Aaron's Film",
  //     release_date: "2002",
  //     url: "https://www.bpmcdn.com/f/files/northernsentinel/import/2018-07/12720668_web1_SKYSCRAPER_Movie_01.jpg",
  //     rating: 8.8,
  //   },
  //   {
  //     id: 2,
  //     title: "The Dark Knight",
  //     release_date: "2008-07-18",
  //     url: "https://m.media-amazon.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_.jpg",
  //     rating: 9,
  //   },
  //   {
  //     id: 3,
  //     title: "The Dark Knight Rises",
  //     release_date: "2012-07-20",
  //     url: "https://m.media-amazon.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_.jpg",
  //     rating: 8.5,
  //   },
  // ];

  const handleSearch = async (e) => {
    e.preventDefault();
    if (!searchQuery.trim()) return;
    if (loading) return;

    setLoading(true);
    try {
      const searchedMovies = await searchMovies(searchQuery);
      setMovies(searchedMovies);
      setError(null);
    } catch (error) {
      console.error(error);
      setError(error);
    } finally {
      setLoading(false);
    }
    setSearchQuery("");
  };

  return (
    <div className="md:py-8 py-4 w-full box-border flex flex-col">
      <form
        onSubmit={searchMovies}
        className="max-w-2xl w-full mx-auto mb-4 md:mb-8 flex gap-4 px-4"
      >
        <input
          className="flex-1 py-3 px-4 border-none rounded-sm outline-none bg-[#333] text-white text-lg focus:ring-[#666] focus:shadow-[0_0_0_2px_#666]"
          type="text"
          placeholder="Search for movies..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <button
          type="submit"
          onClick={handleSearch}
          className="py-3 px-6 bg-[#e50914] text-white rounded-sm font-medium transition-all duration-250 ease-in-out whitespace-nowrap hover:bg-[#f40612]"
        >
          <Search width={18} height={18} />
        </button>
      </form>

      {error && <div className="error">{error}</div>}

      {loading ? (
        <div className="loading">Loading...</div>
      ) : (
        <div className="grid gap-6 p-4 w-full box-border [grid-template-columns:repeat(auto-fit,minmax(250px,1fr))]">
          {movies.map((movie) => (
            //   movie.title.toLowerCase().trim().includes(searchQuery.toLowerCase().trim()) &&
            <MovieCard key={movie.id} movie={movie} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Home;
