import "./MovieCard.sass";

export const MovieCard = ({ data }) => {
  return (
    <div className="componentWrapper" key={data.id}>
      <img
        className="componentWrapper__image"
        alt="movie Poster"
        src={`https://image.tmdb.org/t/p/w500${data.poster_path}`}
      />
      <h1>{data.title}</h1>
      <p>{data.vote_average}</p>
      <p>{data.overview}</p>
    </div>
  );
};
