import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import styles from "./Detail.module.css";

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
        <div className={styles.loader}>
          <h1> Loading ... </h1>
        </div>
      ) : (
        <div>
          <div className={styles.detail}>
            <div className={styles.poster}>
              <img src={movieData.large_cover_image} />
            </div>
            <div>
              <h1 className={styles.title}> {movieData.title} </h1>
              <h2 className={styles.genres}>
                {" "}
                {movieData.genres.join(" / ")}{" "}
              </h2>
              <p className={styles.description}>
                {" "}
                {movieData.description_full}{" "}
              </p>
            </div>
          </div>
          <div className={styles.screen_shots}>
            <img src={movieData.large_screenshot_image1} />
            <img src={movieData.large_screenshot_image2} />
            <img src={movieData.large_screenshot_image3} />
          </div>
        </div>
      )}
    </div>
  );
};

export default Detail;
