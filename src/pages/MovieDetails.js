
import React, {useState,useEffect}from 'react'

function MovieDetails() {
  const[movie, setMovie]=useState();
  const[loading, setLoading]=useState(true);
  useEffect(()=>{
    const fetchMovie=()=>{
      try {
        const response = await axios.get("http://www.omdbapi.com/", {
          params: {
            apikey: "YOUR_API_KEY",
            i: id, // Fetching details using the movie ID
          },
        });

        setMovie(response.data);
      } catch (error) {
        console.error("Error fetchinf mdata", error);
      }finally{
        setLoading(false);
      }
    };
    fetchMovie();
  }, [id]
);
  return (
    <div className="movie-details">
    <img src={movie.Poster} alt={movie.Title} className="movie-poster-large" />
    <div className="movie-info">
      <h1>{movie.Title}</h1>
      <p><strong>Released:</strong> {movie.Released}</p>
      <p><strong>Genre:</strong> {movie.Genre}</p>
      <p><strong>Director:</strong> {movie.Director}</p>
      <p><strong>Actors:</strong> {movie.Actors}</p>
      <p><strong>Plot:</strong> {movie.Plot}</p>
      <p><strong>IMDB Rating:</strong> {movie.imdbRating}</p>
    </div>
  </div> 
    
  );
}

export default MovieDetails;