import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
function Detail() {
  // const x = useParams();
  // console.log(x);
  const { id } = useParams();
  const [loading, setLoading] = useState(true);
  const [movies, setMovies] = useState({});
  console.log(id);
  let result;
  let movieModel;
  const getMovie = async () => {
    result = await (
      await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
    ).json();
    setMovies(result.data.movie);
    console.log(movies);
  };
  useEffect(async () => {
    await getMovie();
    setLoading(false);
  }, []);
  return (
    <div>
      {loading ? (
        <h1>Loading...</h1>
      ) : (
        <div>
          <img src={movies.large_cover_image} />
          <h1>
            {movies.title} ({movies.rating} / 10)
          </h1>
          <p>{movies.description_intro}</p>
        </div>
      )}
    </div>
  );
}
export default Detail;
