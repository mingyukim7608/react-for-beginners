import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const Detail = () => {
  const [movieData, setMovieData] = useState({});
  const [loading, setLoading] = useState(true);

  const { movieId } = useParams();
  const getMovieJson = async () => {
    const json = await (
      await fetch(
        `https://yts.mx/api/v2/movie_details.json?movie_id=${movieId}&with_images=true&with_cast=true`
      )
    ).json();
    setMovieData(json.data.movie);
    setLoading(false);
  };
  useEffect(() => {
    getMovieJson();
  }, []);
  return (
    <div>
      {loading ? (
        <h1> Loading ... </h1>
      ) : (
        <>
          <img src={movieData.large_cover_image} />
          <h1> {movieData.title} </h1>
          <h2> Genres: {movieData.genres.join()}</h2>
          <p> {movieData.description_full} </p>
          <img src={movieData.large_screenshot_image1} />
          <img src={movieData.large_screenshot_image2} />
          <img src={movieData.large_screenshot_image3} />
        </>
      )}
    </div>
  );
};

export default Detail;
