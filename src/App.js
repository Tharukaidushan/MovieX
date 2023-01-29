// Import UseEffect Hook
import { useEffect, useState } from "react";

import SearchIcon from "./search.svg";
import "./App.css";
import { MovieCard } from "./components/MovieCard";

// Here is your key: 4e78a31d

// OMDb API: http://www.omdbapi.com/?i=tt3896198&apikey=4e78a31d

const API_URL = "http://www.omdbapi.com/?i=tt3896198&apikey=4e78a31d";

function App() {
  const [movies, setMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState([]);

  //Search and Fetch movies from server
  const searchMovies = async (title) => {
    const res = await fetch(`${API_URL}&s=${title}`);
    const data = await res.json();

    setMovies(data.Search);
  };
  useEffect(() => {
    searchMovies("");
  }, []);
  return (
    <div className="app">
      <h1>MoviesX</h1>
      <div className="search">
        <input
          type="text"
          placeholder="Search movie name"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />

        <img
          src={SearchIcon}
          alt="Search Icon"
          onClick={() => searchMovies(searchTerm)}
        />
      </div>

      {movies?.length > 0 ? (
        <div className="container">
          {movies.map((movie) => (
            <MovieCard movie1={movie} />
          ))}
        </div>
      ) : (
        <div className="empty">
          <h2>No movies</h2>
        </div>
      )}
    </div>
  );
}

export default App;
