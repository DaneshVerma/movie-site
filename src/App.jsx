import { useEffect, useState } from "react";
import Search from "./componets/Search";
import MovieCard from "./componets/MovieCard";
import Spinner from "./componets/Spinner";
import { useDebounce } from "react-use";


const API_KEY = import.meta.env.VITE_TMDB_API_KEY;

const API_URL = "https://api.themoviedb.org/3";

const API_OPTIONS = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization: `Bearer ${API_KEY}`,
  },
};
const App = () => {
  const [movieList, setMovieList] = useState([]);
  const [loading, setLoading] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [errorMsg, setErrorMsg] = useState("");
  const [searchQuery, setSearchQuery] = useState("");
 
  
  useDebounce(
    () => {
      setSearchQuery(searchTerm);
    },250,
    [searchTerm]
  );

  const fetchMovies = async (query) => {
    try {
      setLoading(true);
      const url = query
        ? `${API_URL}/search/movie?query=${encodeURIComponent(query)}`
        : `${API_URL}/movie/popular?language=en-US&page=1`;

      const response = await fetch(url, API_OPTIONS);
      if (!response.ok) {
        throw new Error("Failed to fetch movies");
      }
      const data = await response.json();
      setMovieList(data.results);
    } catch (error) {
      setErrorMsg(error.message);
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    fetchMovies(searchQuery);
  }, [searchQuery]);
  return (
    <main className=''>
      <div className='bg-[url(/image/hero-bg.png)] w-full py-6 bg-cover bg-center flex gap-4 flex-col items-center justify-center'>
        <div className='logo'>
          <img src='/image/logo.png' alt='' />
        </div>
        <div className='heroiamge w-90'>
          <img
            className='w-full aspect-square'
            src='/image/hero-img.png'
            alt=''
          />
        </div>
        <header className='w-1/2 text-center font-bold text-white'>
          <h1 className='text-5xl'>
            Find <span className='text-[#AB8BFF]'>Movies</span> You’ll Love
            Without the Hassle
          </h1>
          <Search setSearchTerm={setSearchTerm} searchTerm={searchTerm} />
        </header>
      </div>
      <section>
        {loading ? (
          <Spinner />
        ) : errorMsg ? (
          <p className='text-red-500'>{errorMsg}</p>
        ) : (
          <>
            <h1 className='text-3xl font-bold text-white bg-[#02031C]'>
              All movies
            </h1>
            <ul className='grid grid-cols-4 p-4 gap-4 bg-[#02031C]'>
              {movieList.map((movie) => (
                <MovieCard key={movie.id} movie={movie} />
              ))}
            </ul>
          </>
        )}
      </section>
    </main>
  );
};

export default App;
