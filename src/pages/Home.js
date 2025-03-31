import {React,useEffect,useState} from 'react'
import axios from 'axios';

import '../App.css'
import { Link } from 'react-router';
function Home() {
    const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
const [searchItem, setSearchItem]=useState("");
useEffect(() => {
    const fetchMovies = async () => {
      try {
        const response = await axios.get('http://www.omdbapi.com/', {
          params: {
            apikey: '40fe1873', // Replace with your OMDb API key
            s: searchItem, // Example movie search query
          },
        });
        setMovies(response.data.Search || []);
      } catch (error) {
        console.error('Error fetching data', error);
      } finally {
        setLoading(false);
      }
    };

    fetchMovies();
  }, [searchItem]);
  if (loading) return <div>Loading...</div>;

return (
    <div className='home'>
   <h1>Movie List</h1>
   <input type='text' placeholder='Can you Enter Movie' value={searchItem} onChange={(e)=>setSearchItem(e.target.value)} className='b'/>
      <div className="movie-list">
        {movies?.map((movie) => (
          <div className="movie-card" key={movie.imdbID}>
            <Link to={`/movie/${movie.imdbID}`}>
            <img
              src={movie.Poster}
              alt={movie.Title}
              className="movie-poster"
            />
            <h3>{movie.Title}</h3>
            </Link>
           
          </div>
        ))}
      </div>
    </div>
  )
}

export default Home;