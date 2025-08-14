
const MovieCard = ({movie}) => {
  return (
    <div className="movie-card bg-[#1F1B2B] p-4 rounded-md text-white">
      <img className="aspect-[2/3] object-cover" src={movie.poster_path?`https://image.tmdb.org/t/p/w500${movie.poster_path}`:'/image/No-Poster.png'} alt={movie.title} />
      <h2>{movie.title}</h2>
      <p>{movie.release_date}</p>
    </div>
  )
}

export default MovieCard